import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteCarInput {
  @Field()
  readonly id: number;

  @Field()
  readonly userId: number;
}

@InputType()
export default class CarInput {
  @Field()
  readonly model: string;

  @Field()
  readonly year: number;

  @Field()
  readonly userId: number;
}
