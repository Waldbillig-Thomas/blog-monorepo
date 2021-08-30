import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../enums/gender.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGenderFilter } from './nested-enum-gender-filter.input';

@InputType()
export class NestedEnumGenderWithAggregatesFilter {

    @Field(() => Gender, {nullable:true})
    equals?: keyof typeof Gender;

    @Field(() => [Gender], {nullable:true})
    in?: Array<keyof typeof Gender>;

    @Field(() => [Gender], {nullable:true})
    notIn?: Array<keyof typeof Gender>;

    @Field(() => NestedEnumGenderWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGenderWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    count?: NestedIntFilter;

    @Field(() => NestedEnumGenderFilter, {nullable:true})
    _min?: NestedEnumGenderFilter;

    @Field(() => NestedEnumGenderFilter, {nullable:true})
    min?: NestedEnumGenderFilter;

    @Field(() => NestedEnumGenderFilter, {nullable:true})
    _max?: NestedEnumGenderFilter;

    @Field(() => NestedEnumGenderFilter, {nullable:true})
    max?: NestedEnumGenderFilter;
}
