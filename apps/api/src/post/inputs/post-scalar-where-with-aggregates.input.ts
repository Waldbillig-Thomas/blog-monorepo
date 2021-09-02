import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../../prisma/inputs/string-with-aggregates-filter.input';

@InputType()
export class PostScalarWhereWithAggregatesInput {

    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PostScalarWhereWithAggregatesInput>;

    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PostScalarWhereWithAggregatesInput>;

    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PostScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    authorId?: StringWithAggregatesFilter;
}