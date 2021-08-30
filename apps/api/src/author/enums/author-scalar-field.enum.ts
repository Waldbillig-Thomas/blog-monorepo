import { registerEnumType } from '@nestjs/graphql';

export enum AuthorScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    gender = "gender"
}

registerEnumType(AuthorScalarFieldEnum, { name: 'AuthorScalarFieldEnum' })
