import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../../prisma/inputs/string-with-aggregates-filter.input';
import { EnumGenderWithAggregatesFilter } from '../../prisma/inputs/enum-gender-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/inputs/date-time-with-aggregates-filter.input';

@InputType()
export class AuthorScalarWhereWithAggregatesInput {

    @Field(() => [AuthorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthorScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthorScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthorScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: StringWithAggregatesFilter;

    @Field(() => EnumGenderWithAggregatesFilter, {nullable:true})
    gender?: EnumGenderWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
