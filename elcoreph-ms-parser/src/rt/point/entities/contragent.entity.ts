import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import GraphQLJSON from 'graphql-type-json';
import { Document } from 'mongoose';
import { v4 } from 'uuid';

export type AccountPointModelDocument = ContragentModel & Document;

@ObjectType()
@Schema({ _id: false })
export class ContragentModel {
  @Field(() => String)
  @Prop({ type: String })
  uuid: string;
  @Field(() => String, { description: 'Тип контрагента' })
  @Prop({
    type: String,
  })
  contragentType: string;
  @Field(() => String, { description: 'Имя контрагента' })
  @Prop(String)
  contragentName: string;
}

export const ContragentModelSchema = SchemaFactory.createForClass(
  ContragentModel,
);
