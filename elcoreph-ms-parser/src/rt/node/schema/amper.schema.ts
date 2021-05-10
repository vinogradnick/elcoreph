import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
import { DateModel } from './date.schema';
export type AmperTransformerDocument = AmperTransformerModel & Document;

@ObjectType({ description: 'Траснформатор тока' })
@Schema()
export class AmperTransformerModel {
  @Field(() => String)
  @Prop({ type: String, default: () => v4() })
  uuid: string;

  @Field(() => Number, { description: 'Номер МПИ' })
  @Prop({ type: Number, required: true })
  mpi: number;
  @Field(() => DateModel, { description: 'Даты трансформатора' })
  @Prop({ type: DateModel, required: true })
  date: DateModel;
}

export const AmperTransformerSchema = SchemaFactory.createForClass(
  AmperTransformerModel,
);
