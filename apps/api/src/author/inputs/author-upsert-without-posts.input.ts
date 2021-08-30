import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutPostsInput } from './author-update-without-posts.input';
import { AuthorCreateWithoutPostsInput } from './author-create-without-posts.input';

@InputType()
export class AuthorUpsertWithoutPostsInput {

    @Field(() => AuthorUpdateWithoutPostsInput, {nullable:false})
    update!: AuthorUpdateWithoutPostsInput;

    @Field(() => AuthorCreateWithoutPostsInput, {nullable:false})
    create!: AuthorCreateWithoutPostsInput;
}
