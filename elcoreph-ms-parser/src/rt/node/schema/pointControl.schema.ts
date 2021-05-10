import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
import { AmperTransformerModel } from './amper.schema';
import { DateModel } from './date.schema';
export type PointControlDocument = PointControlModel & Document;

@ObjectType({ description: 'Точка учета' })
@Schema({ _id: false })
export class PointControlModel {
  @Field(() => String)
  @Prop({ type: String, default: () => v4() })
  uuid: string;

  @Field(() => Number, { description: 'Номер МПИ' })
  @Prop({ type: Number, required: true })
  mpi: number;

  @Field(() => String, { description: '' })
  @Prop({ type: String, required: true })
  quantity: string;

  @Field(() => String, { description: 'Тип энергии' })
  @Prop({ type: String, required: true })
  energyType: string;
  @Field(() => String, { description: 'Количество фаз' })
  @Prop({ type: String, required: true })
  countPhase: string;
  @Field(() => String, { description: 'Значение Э/И' })
  @Prop({ type: String, required: true })
  ei: string;
  @Field(() => String, { description: 'Значение БПУУ' })
  @Prop({ type: String, required: true })
  bpyy: string;
  @Field(() => String, { description: 'Место установки' })
  @Prop({ type: String, required: true })
  placeInstall: string;
  @Field(() => DateModel, { description: 'Даты точки учета' })
  @Prop({ type: DateModel, required: true })
  date: DateModel;
  @Field(() => AmperTransformerModel, { description: 'Трансформатор тока' })
  @Prop({ type: AmperTransformerModel, required: true })
  amperTransformer: AmperTransformerModel;
}

export const PointControlSchema = SchemaFactory.createForClass(
  PointControlModel,
);
