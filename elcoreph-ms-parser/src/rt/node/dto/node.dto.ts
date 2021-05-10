import { Field, InputType, PartialType, PickType } from '@nestjs/graphql';
import { AmperTransformerModel } from '../schema/amper.schema';
import { NodeModel } from '../schema/node.schema';
import { PointControlModel } from '../schema/pointControl.schema';

@InputType()
export class PointControlInputDto extends PartialType(
  PointControlModel,
  InputType,
) {}
@InputType()
export class NodeInputDto extends PartialType(NodeModel, InputType) {}

@InputType()
export class TrasformerInputDto extends PartialType(
  AmperTransformerModel,
  InputType,
) {}

@InputType()
export class NodeCreateInput extends PickType(PointControlInputDto, [
  'pointControl',
] as never[]) {}
