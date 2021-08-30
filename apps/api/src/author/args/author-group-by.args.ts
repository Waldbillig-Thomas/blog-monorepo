import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorWhereInput } from '../inputs/author-where.input';
import { AuthorOrderByInput } from '../inputs/author-order-by.input';
import { AuthorScalarFieldEnum } from '../enums/author-scalar-field.enum';
import { AuthorScalarWhereWithAggregatesInput } from '../inputs/author-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AuthorCountAggregateInput } from '../inputs/author-count-aggregate.input';
import { AuthorMinAggregateInput } from '../inputs/author-min-aggregate.input';
import { AuthorMaxAggregateInput } from '../inputs/author-max-aggregate.input';

@ArgsType()
export class AuthorGroupByArgs {

    @Field(() => AuthorWhereInput, {nullable:true})
    where?: AuthorWhereInput;

    @Field(() => [AuthorOrderByInput], {nullable:true})
    orderBy?: Array<AuthorOrderByInput>;

    @Field(() => [AuthorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AuthorScalarFieldEnum>;

    @Field(() => AuthorScalarWhereWithAggregatesInput, {nullable:true})
    having?: AuthorScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AuthorCountAggregateInput, {nullable:true})
    _count?: AuthorCountAggregateInput;

    @Field(() => AuthorMinAggregateInput, {nullable:true})
    _min?: AuthorMinAggregateInput;

    @Field(() => AuthorMaxAggregateInput, {nullable:true})
    _max?: AuthorMaxAggregateInput;
}
