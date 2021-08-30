import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostWhereInput } from '../inputs/post-where.input';
import { PostOrderByInput } from '../inputs/post-order-by.input';
import { PostWhereUniqueInput } from '../inputs/post-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostScalarFieldEnum } from '../enums/post-scalar-field.enum';

@ArgsType()
export class FindManyPostArgs {

    @Field(() => PostWhereInput, {nullable:true})
    where?: PostWhereInput;

    @Field(() => [PostOrderByInput], {nullable:true})
    orderBy?: Array<PostOrderByInput>;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: PostWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}
