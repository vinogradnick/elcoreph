import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GraphQLJSON } from 'graphql-type-json';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
export type IdsDocument = IdsModel & Document;

@ObjectType()
@Schema()
export class IdsModel {
  @Field(() => String)
  @Prop({ type: String, default: () => v4() })
  uuid: string;
  @Field(() => GraphQLJSON, { nullable: true })
  @Prop({ type: {} })
  ids: any;
}

export const IdsSchema = SchemaFactory.createForClass(IdsModel);
