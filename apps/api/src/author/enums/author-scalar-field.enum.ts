import { registerEnumType } from '@nestjs/graphql';

export enum AuthorScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    gender = "gender",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(AuthorScalarFieldEnum, { name: 'AuthorScalarFieldEnum' })
