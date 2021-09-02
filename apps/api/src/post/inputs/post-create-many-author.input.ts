import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PostCreateManyAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;
}