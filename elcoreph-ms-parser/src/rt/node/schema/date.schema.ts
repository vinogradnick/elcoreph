import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GraphQLJSON } from 'graphql-type-json';
import moment from 'moment';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
export type DateDocument = DateModel & Document;

@ObjectType()
@Schema()
export class DateModel {
  @Field(() => Number, { nullable: true, description: 'Квартал проверки' })
  @Prop({ type: Number })
  quartalVerification: number;
  @Field(() => Number, { nullable: true, description: 'Дата производства' })
  @Prop({ type: Number })
  yearProduction: number;

  @Field(() => Number, {
    nullable: true,
    description: 'Дата следующей верификации',
  })
  @Prop({ type: Number })
  nextVerification: number;
  @Field(() => Number, { nullable: true, description: 'Дата создания объекта' })
  @Prop({ type: Number, default: () => moment().unix() })
  created: number;
}

export const DateSchema = SchemaFactory.createForClass(DateModel);
