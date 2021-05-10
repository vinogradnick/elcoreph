import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import GraphQLJSON from 'graphql-type-json';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
import { CounterIdsModel } from './counter.ids';
export type CounterModelDocument = CounterModel & Document;

@ObjectType()
@Schema({ _id: false })
export class CounterModel {
  @Field(() => String)
  @Prop({ type: String, default: () => v4() })
  uuid: string;
  @Field(() => String, { description: 'Наименование объекта' })
  @Prop({ type: String })
  name: string;
  @Field(() => Boolean, { description: 'Статус работы счетчика' })
  @Prop({ type: Boolean })
  isActive: boolean;

  @Field(() => GraphQLJSON)
  @Prop({ type: {} })
  ids: any;

  @Field(() => Number, { description: 'Номер акта' })
  @Prop({ type: String })
  actNumber: string;
  @Field(() => Number, { description: 'Точка сцепления' })
  @Prop({ type: String })
  couplingPoint: string;
  @Field(() => String, { description: 'Зона суток' })
  @Prop({ type: String })
  timeZone: string;
  @Field(() => Number, { description: 'Коэфицент трансформации' })
  @Prop({ type: Number })
  coefficent: number;
  @Field(() => GraphQLJSON, { description: 'Даты' })
  @Prop(
    raw({
      created: Number,
      lastVisit: Number,
      lastMessage: Number,
    }),
  )
  date: Record<string, number>;
  @Field(() => CounterIdsModel, { description: 'Узлы учета' })
  @Prop([CounterIdsModel])
  nodes: CounterIdsModel[];
  @Field(() => CounterIdsModel, { description: 'Точки учета' })
  @Prop([CounterIdsModel])
  points: CounterIdsModel[];
  constructor(data: Partial<CounterModel>) {
    Object.assign(this, data);
  }
}

export const CounterModelSchema = SchemaFactory.createForClass(CounterModel);
