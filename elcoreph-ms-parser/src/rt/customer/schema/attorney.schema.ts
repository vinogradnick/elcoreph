import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
export type AttorneyDocument = AttorneyModel & Document;

@ObjectType()
@Schema()
export class AttorneyModel {
  @Field(() => String)
  @Prop({ type: String, default: () => v4() })
  uuid: string;

  @Field(() => Number, { description: 'Значение доверенности' })
  @Prop({ type: Number })
  value: number;

  @Field(() => String, { description: 'Статус доверенности' })
  @Prop({ type: String })
  status: string;
}

export const AttorneySchema = SchemaFactory.createForClass(AttorneyModel);
