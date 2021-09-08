import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRows = {
  __typename?: 'AffectedRows';
  count: Scalars['Int'];
};

export type Author = {
  __typename?: 'Author';
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  posts?: Maybe<Array<Post>>;
};

export type AuthorCountAggregate = {
  __typename?: 'AuthorCountAggregate';
  _all: Scalars['Int'];
  firstName: Scalars['Int'];
  gender: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
};

export type AuthorCountAggregateInput = {
  _all?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
};

export type AuthorCreateInput = {
  firstName: Scalars['String'];
  gender: Gender;
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type AuthorCreateManyInput = {
  firstName: Scalars['String'];
  gender: Gender;
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
};

export type AuthorCreateNestedOneWithoutPostsInput = {
  connect?: Maybe<AuthorWhereUniqueInput>;
  connectOrCreate?: Maybe<AuthorCreateOrConnectWithoutPostsInput>;
  create?: Maybe<AuthorCreateWithoutPostsInput>;
};

export type AuthorCreateOrConnectWithoutPostsInput = {
  create: AuthorCreateWithoutPostsInput;
  where: AuthorWhereUniqueInput;
};

export type AuthorCreateWithoutPostsInput = {
  firstName: Scalars['String'];
  gender: Gender;
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
};

export type AuthorMaxAggregateInput = {
  firstName?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
};

export type AuthorMinAggregateInput = {
  firstName?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
};

export type AuthorOrderByInput = {
  firstName?: Maybe<SortOrder>;
  gender?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
};

export type AuthorRelationFilter = {
  is?: Maybe<AuthorWhereInput>;
  isNot?: Maybe<AuthorWhereInput>;
};

export enum AuthorScalarFieldEnum {
  FirstName = 'firstName',
  Gender = 'gender',
  Id = 'id',
  LastName = 'lastName'
}

export type AuthorUpdateInput = {
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type AuthorUpdateManyMutationInput = {
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AuthorUpdateOneRequiredWithoutPostsInput = {
  connect?: Maybe<AuthorWhereUniqueInput>;
  connectOrCreate?: Maybe<AuthorCreateOrConnectWithoutPostsInput>;
  create?: Maybe<AuthorCreateWithoutPostsInput>;
  update?: Maybe<AuthorUpdateWithoutPostsInput>;
  upsert?: Maybe<AuthorUpsertWithoutPostsInput>;
};

export type AuthorUpdateWithoutPostsInput = {
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AuthorUpsertWithoutPostsInput = {
  create: AuthorCreateWithoutPostsInput;
  update: AuthorUpdateWithoutPostsInput;
};

export type AuthorWhereInput = {
  AND?: Maybe<Array<AuthorWhereInput>>;
  NOT?: Maybe<Array<AuthorWhereInput>>;
  OR?: Maybe<Array<AuthorWhereInput>>;
  firstName?: Maybe<StringFilter>;
  gender?: Maybe<EnumGenderFilter>;
  id?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
};

export type AuthorWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type EnumGenderFieldUpdateOperationsInput = {
  set?: Maybe<Gender>;
};

export type EnumGenderFilter = {
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderFilter>;
  notIn?: Maybe<Array<Gender>>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type Mutation = {
  __typename?: 'Mutation';
  AuthorCreate: Author;
  AuthorCreateMany: AffectedRows;
  AuthorDelete: Author;
  AuthorDeleteMany: AffectedRows;
  AuthorUpdate: Author;
  AuthorUpdateMany: AffectedRows;
  AuthorUpsert: Author;
  PostCreate: Post;
  PostCreateMany: AffectedRows;
  PostDelete: Post;
  PostDeleteMany: AffectedRows;
  PostUpdate: Post;
  PostUpdateMany: AffectedRows;
  PostUpsert: Post;
};


export type MutationAuthorCreateArgs = {
  data: AuthorCreateInput;
};


export type MutationAuthorCreateManyArgs = {
  data: Array<AuthorCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationAuthorDeleteArgs = {
  where: AuthorWhereUniqueInput;
};


export type MutationAuthorDeleteManyArgs = {
  where?: Maybe<AuthorWhereInput>;
};


export type MutationAuthorUpdateArgs = {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
};


export type MutationAuthorUpdateManyArgs = {
  data: AuthorUpdateManyMutationInput;
  where?: Maybe<AuthorWhereInput>;
};


export type MutationAuthorUpsertArgs = {
  create: AuthorCreateInput;
  update: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
};


export type MutationPostCreateArgs = {
  data: PostCreateInput;
};


export type MutationPostCreateManyArgs = {
  data: Array<PostCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationPostDeleteArgs = {
  where: PostWhereUniqueInput;
};


export type MutationPostDeleteManyArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationPostUpdateArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationPostUpdateManyArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationPostUpsertArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type NestedEnumGenderFilter = {
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderFilter>;
  notIn?: Maybe<Array<Gender>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author: Author;
  authorId: Scalars['String'];
  content: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  content: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
};

export type PostCountAggregateInput = {
  _all?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['Boolean']>;
};

export type PostCreateInput = {
  author: AuthorCreateNestedOneWithoutPostsInput;
  content: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PostCreateManyAuthorInput = {
  content: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PostCreateManyInput = {
  authorId: Scalars['String'];
  content: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  content: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
};

export type PostMaxAggregateInput = {
  authorId?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['Boolean']>;
};

export type PostMinAggregateInput = {
  authorId?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['Boolean']>;
};

export type PostOrderByInput = {
  authorId?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  AuthorId = 'authorId',
  Content = 'content',
  Id = 'id',
  Title = 'title'
}

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  authorId?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type PostUpdateInput = {
  author?: Maybe<AuthorUpdateOneRequiredWithoutPostsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  author?: Maybe<AuthorRelationFilter>;
  authorId?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  AuthorAggregate: AuthorCountAggregate;
  AuthorFindFirst: Author;
  AuthorFindMany: Array<Author>;
  AuthorFindUnique: Author;
  PostAggregate: PostCountAggregate;
  PostFindFirst: Post;
  PostFindMany: Array<Post>;
  PostFindUnique: Post;
};


export type QueryAuthorAggregateArgs = {
  _count?: Maybe<AuthorCountAggregateInput>;
  _max?: Maybe<AuthorMaxAggregateInput>;
  _min?: Maybe<AuthorMinAggregateInput>;
  cursor?: Maybe<AuthorWhereUniqueInput>;
  orderBy?: Maybe<Array<AuthorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorWhereInput>;
};


export type QueryAuthorFindFirstArgs = {
  cursor?: Maybe<AuthorWhereUniqueInput>;
  distinct?: Maybe<Array<AuthorScalarFieldEnum>>;
  orderBy?: Maybe<Array<AuthorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorWhereInput>;
};


export type QueryAuthorFindManyArgs = {
  cursor?: Maybe<AuthorWhereUniqueInput>;
  distinct?: Maybe<Array<AuthorScalarFieldEnum>>;
  orderBy?: Maybe<Array<AuthorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorWhereInput>;
};


export type QueryAuthorFindUniqueArgs = {
  where: AuthorWhereUniqueInput;
};


export type QueryPostAggregateArgs = {
  _count?: Maybe<PostCountAggregateInput>;
  _max?: Maybe<PostMaxAggregateInput>;
  _min?: Maybe<PostMinAggregateInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryPostFindFirstArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryPostFindManyArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryPostFindUniqueArgs = {
  where: PostWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type AuthorSearchQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthorSearchQuery = { __typename?: 'Query', AuthorFindMany: Array<{ __typename?: 'Author', id: string, gender: Gender, lastName: string }> };

export const AuthorSearchDocument = gql`
    query AuthorSearch {
  AuthorFindMany {
    id
    gender
    lastName
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AuthorSearchGQL extends Apollo.Query<AuthorSearchQuery, AuthorSearchQueryVariables> {
    document = AuthorSearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }