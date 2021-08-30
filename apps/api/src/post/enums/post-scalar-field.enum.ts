import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    authorId = "authorId"
}

registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum' })
