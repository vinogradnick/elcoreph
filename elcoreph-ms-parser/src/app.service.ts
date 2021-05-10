import { HttpService, Injectable, Logger } from '@nestjs/common';
import xlsx from 'node-xlsx';
import { CounterModel } from './rt/counter/entities/counter.entity';
import { CustomerModel } from './rt/customer/schema/customer.schema';
import { FacilityModel } from './rt/facility/entities/facility.entity';
import _, { groupBy, uniqueId } from 'lodash';
import { v4 } from 'uuid';

import {
  parseCounter,
  parseCustomer,
  parseFacility,
} from './parser/dto/customer.dto';
@Injectable()
export class AppService {
  private GATE_URL = 'http://localhost:4000/';
  private logger = new Logger(AppService.name);
  constructor(private httpService: HttpService) {}

  async parse() {
    console.log(__dirname);
    const workSheets = xlsx.parse(`${__dirname}/test-store.XLSM`);

    const activeSheet = workSheets.find((x) => x.name === 'Реализация');
    const grouped = groupBy(
      activeSheet.data.filter((x, idx) => idx > 5 && idx < 6800),
      (x) => x[0],
    );
    for (const documentNumber in grouped) {
      const customer = parseCustomer(grouped[documentNumber][0]);
      const facilityGroup = groupBy(grouped[documentNumber], (x) => x[6]);
      customer.facilities = [];
      customer.counters = [];
     
      for (const facGroup in facilityGroup) {
      
        const facility = parseFacility(facilityGroup[facGroup], {
          uuidCustomer: customer.uuid,
        });
        facility.counters = [];

        customer.facilities.push({
          uuid: v4(),
          ids: { uuidFacility: facility.uuid },
        });
        const counters: any[] = facilityGroup[facGroup];
        for (const cc in counters) {
          const counter = parseCounter(counters[cc], {
            uuidCutomer: customer.uuid,
            uuidFacility: facility.uuid,
          });
          await this.createCounter(counter);

          customer.counters.push({
            uuid: v4(),
            ids: { uuidCounter: counter.uuid },
          });
          facility.counters.push({
            uuid: v4(),
            ids: { uuidCounter: counter.uuid },
          });
        }

        await this.createFacility(facility);
      }
      await this.createCustomer(customer);
    }
  }
  async createCustomer(customer: CustomerModel) {
    // this.logger.log('customer.create', JSON.stringify(customer));
    return this.httpService
      .post(this.GATE_URL + 'customer', customer)
      .toPromise();
  }
  async createFacility(facility: FacilityModel) {
    // this.logger.log('facility.create', JSON.stringify(facility));

    return this.httpService
      .post(this.GATE_URL + 'facility', facility)
      .toPromise();
  }
  async createCounter(counter: CounterModel) {
    // this.logger.log('counter.create', JSON.stringify(counter));

    return this.httpService
      .post(this.GATE_URL + 'counter', counter)
      .toPromise();
  }
}
