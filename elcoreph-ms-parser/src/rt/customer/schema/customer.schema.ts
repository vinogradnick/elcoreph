import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
import { AttorneyModel } from './attorney.schema';
import { DocumentInfoModel } from './documentInfo.schema';
import { IdsModel } from './ids.schema';
export type CustomerDocument = CustomerModel & Document;

@ObjectType()
@Schema()
export class CustomerModel {
  @Field(() => String)
  @Prop({ type: String, default: () => v4() })
  uuid: string;
  @Field(() => String, { description: 'Категория потребителя' })
  @Prop({ type: String })
  group: string;
  @Field(() => DocumentInfoModel, {
    nullable: true,
    description: 'Детальная информация потребителя',
  })
  @Prop(DocumentInfoModel)
  additional: DocumentInfoModel;
  @Field(() => [IdsModel], {
    nullable: true,
    description: 'Объекты потребителя',
  })
  @Prop([IdsModel])
  facilities: Array<IdsModel>;
  @Field(() => [IdsModel], {
    nullable: true,
    description: 'Счетчики потребителя',
  })
  @Prop([IdsModel])
  counters: Array<IdsModel>;
  @Field(() => AttorneyModel, { nullable: true, description: 'Доверенность' })
  @Prop(AttorneyModel)
  attorney: AttorneyModel;
  @Field(() => [IdsModel], {
    nullable: true,
    description: 'Работники отвественные за потребителя',
  })
  @Prop([IdsModel])
  workers: Array<IdsModel>;
  constructor(data: Partial<CustomerModel>) {
    Object.assign(this, data);
    return this;
  }
}

export const CustomerSchema = SchemaFactory.createForClass(CustomerModel);
