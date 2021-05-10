import { CustomerModel } from 'src/rt/customer/schema/customer.schema';
import { FacilityModel } from 'src/rt/facility/entities/facility.entity';
import { v4 } from 'uuid';
import _ from 'lodash';
import { CounterModel } from 'src/rt/counter/entities/counter.entity';
import { DocumentInfoModel } from 'src/rt/customer/schema/documentInfo.schema';

export function parseCounter(data: any[], ids: any): CounterModel {
  return new CounterModel({ uuid: v4(), ids });
}

export function parseCustomer(data: any[]): CustomerModel {
  return new CustomerModel({
    uuid: v4(),
    group: '1',
    additional: new DocumentInfoModel({
      name: data[6],
      documentNumber: data[0],
    }),
  });
}
export function parseFacility(data: any[], ids?: any): FacilityModel {
  console.log(data[0][7]);
  return new FacilityModel({ uuid: v4(), name: data[0][7] });
}
