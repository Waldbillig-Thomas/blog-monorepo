import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateNestedOneWithoutPostsInput } from '../../author/inputs/author-create-nested-one-without-posts.input';

@InputType()
export class PostCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => AuthorCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: AuthorCreateNestedOneWithoutPostsInput;
}
