import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthorWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
