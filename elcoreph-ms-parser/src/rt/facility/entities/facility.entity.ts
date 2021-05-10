import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import GraphQLJSON from 'graphql-type-json';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
import { CounterIdsModel } from './counter.ids';
export type FacilityDocument = FacilityModel & Document;

@ObjectType()
@Schema({ _id: false })
export class FacilityModel {
  @Field(() => String)
  @Prop({ type: String, default: () => v4() })
  uuid: string;
  @Field(() => String, { description: 'Наименование объекта' })
  @Prop({ type: String, required: true })
  name: string;
  @Field(() => GraphQLJSON, { description: 'Адрес объекта' })
  @Prop(
    raw({
      type: {
        full: String,
        lat: Number,
        lng: Number,
      },
    }),
  )
  address: Record<string, any>;
  @Field(() => [CounterIdsModel])
  @Prop([CounterIdsModel])
  counters: CounterIdsModel[];
  constructor(data: Partial<FacilityModel>) {
    Object.assign(this, data);
    return this;
  }
}

export const FacilitySchema = SchemaFactory.createForClass(FacilityModel);
