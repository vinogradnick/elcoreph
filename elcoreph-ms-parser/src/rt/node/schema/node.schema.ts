import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
import { NodeInputDto } from '../dto/node.dto';
import { IdsModel } from './ids.schema';
import { PointControlModel } from './pointControl.schema';
export type NodeDocument = NodeModel & Document;

@ObjectType({ description: 'Узел учета' })
@Schema({ _id: false })
export class NodeModel {
  @Field(() => String)
  @Prop({ type: String, default: () => v4() })
  uuid: string;

  @Field(() => String, { description: 'Наименование узла учета' })
  @Prop({ type: String, required: true })
  name: string;

  @Field(() => PointControlModel, {
    description: 'Точка учета',
  })
  @Prop({ type: PointControlModel, required: true })
  pointControl: PointControlModel;
  @Field(() => IdsModel, {
    description: 'Ключи для связи',
  })
  @Prop({ type: IdsModel })
  ids: IdsModel;
}

export const NodeSchema = SchemaFactory.createForClass(NodeModel);
