import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import GraphQLJSON from 'graphql-type-json';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
import { ContragentModel } from './contragent.entity';

export type AccountPointModelDocument = AccountPointModel & Document;

@ObjectType()
@Schema({ _id: false })
export class AccountPointModel {
  @Field(() => String)
  @Prop({ type: String, default: v4 })
  uuid: string;

  @Field(() => String, { description: 'Имя точки учета' })
  @Prop(String)
  pointName: string;

  @Field(() => Number, { description: 'Значение мощности на точке учета' })
  @Prop(Number)
  power: number;

  @Field(() => Number, { description: 'Уровень напряжения' })
  @Prop(Number)
  voltageLevel: number;

  @Field(() => Number, { description: 'Тип подключения' })
  @Prop(String)
  connectionType: string;

  @Field(() => [ContragentModel], { description: 'Тип подключения' })
  @Prop([ContragentModel])
  contragents: ContragentModel[];

  @Field(() => GraphQLJSON, { description: 'Тип подключения' })
  @Prop({ type: {} })
  ids: Record<string, string>;
  constructor(data: Partial<AccountPointModel>) {
    Object.assign(this, data);
    return this;
  }
}

export const AccountPointModelSchema = SchemaFactory.createForClass(
  AccountPointModel,
);
