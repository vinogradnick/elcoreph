import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import GraphQLJSON from 'graphql-type-json';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
export type FacilityDocument = CounterIdsModel & Document;

@ObjectType()
@Schema({ _id: false })
export class CounterIdsModel {
  @Field(() => String)
  @Prop({ type: String, default: () => v4() })
  uuid: string;

  @Field(() => GraphQLJSON)
  @Prop({ type: {} })
  ids: any;
}

export const CounterIdsModelSchema = SchemaFactory.createForClass(
  CounterIdsModel,
);
