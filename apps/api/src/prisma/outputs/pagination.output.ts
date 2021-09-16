import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pagination {
  @Field(() => Int, { nullable: false })
  total!: number;

  @Field(() => Int, { nullable: false })
  pageSize!: number;

  @Field(() => Int, { nullable: false })
  pageIndex!: number;
}
