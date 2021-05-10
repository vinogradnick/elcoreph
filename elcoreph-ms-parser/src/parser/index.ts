// import uuid from 'uuid';
// import _ from 'lodash';
// import fs from 'fs';
// // Or var xlsx = require('node-xlsx').default;
// // Parse a file

// const parseSub = (data) =>
//   data.map((d, idx) => {
//     return { key: idx, val: d[idx] };
//   });

// const parseCounter = (data) =>
//   data.map((counter) => ({
//     uuid: uuid.v4(),
//     counterNumber: counter[11],
//     name: counter[12],
//     coefficent: counter[13],
//     zone: counter[25],
//     date: {
//       yearVerification: counter[14],
//     },
//   }));

// const parseFacility = (data) => {
//   return data.map((item) => ({
//     uuid: uuid.v4(),
//     name: item[7],
//     address: item[8],
//   }));
// };
// const parseBorderCompany = (companies) =>
//   companies.map((cum) => ({
//     uuid: uuid.v4(),
//     name: cum[196],
//   }));

// const parseCustomer = (key, data): Record<string, any> => {
//   const customerUuid = uuid.v4();
//   const facilities = parseFacility(data);
//   const counters = parseCounter(data);
//   const companies = _.uniqBy(parseBorderCompany(data), (x) => x.name);
//   return {
//     customer: {
//       uuid: customerUuid,
//       name: data[0][6],
//       additional: {
//         documentNumber: key,
//       },
//       objectIds: facilities.map((x) => ({ uuid: x.uuid })),
//       counters: counters.map((x) => ({ uuid: x.uuid })),
//     },
//     contragents: companies,
//     facilities: facilities.map((item) => ({
//       ...item,
//       ids: { idCustomer: customerUuid },
//     })),
//     workers: data.map((worker) => ({ uuid: uuid.v4(), name: worker[31] })),
//     counters: counters.map((counter) => ({
//       ...counter,
//       ids: {
//         idCustomer: customerUuid,
//       },
//     })),
//   };
// };

// const customers = _.groupBy(
//   activeSheet.data.filter((_, idx) => idx > 5 && idx < 6800),
//   (s) => s[0],
// );
// const dt = Object.keys(customers).map((key) => {
//   ///parseCustomer(key, customers[key])
//   return parseCustomer(key, customers[key]);
// });

// fs.writeFileSync('dat.json', JSON.stringify(dt, null, 2), { encoding: 'utf8' });

// // const pipeline = [...customers.keys()].map((key) =>
// //
// // );
