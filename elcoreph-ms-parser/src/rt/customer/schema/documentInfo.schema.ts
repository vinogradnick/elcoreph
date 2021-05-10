import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
export type CustomerDocument = DocumentInfoModel & Document;

@ObjectType()
@Schema()
export class DocumentInfoModel {
  @Field(() => String)
  @Prop({ type: String, default: () => v4() })
  uuid: string;
  @Field(() => String, { description: 'Имя потребителя' })
  @Prop({ type: String })
  name: string;
  @Field(() => Number, { description: 'ИНН' })
  @Prop({ type: Number })
  inn: number;
  @Field(() => Number, { description: 'ОГРН' })
  @Prop({ type: Number })
  orgn: number;
  @Field(() => String, { description: 'Электронная почта' })
  @Prop({ type: String })
  email: string;
  @Field(() => String, { description: 'Номер телефона' })
  @Prop({ type: String })
  phone: string;
  @Field(() => Number, { description: 'Номер договора' })
  @Prop({ type: Number })
  documentNumber: number;
  constructor(data: Partial<DocumentInfoModel>) {
    Object.assign(this, data);
  }
}

export const DocumentInfoSchema = SchemaFactory.createForClass(
  DocumentInfoModel,
);
