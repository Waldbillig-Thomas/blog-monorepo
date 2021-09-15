import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface AffectedRows {
  __typename?: 'AffectedRows';
  count: Scalars['Int'];
}

export interface Author {
  __typename?: 'Author';
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  posts?: Maybe<Array<Post>>;
}

export interface AuthorCountAggregate {
  __typename?: 'AuthorCountAggregate';
  _all: Scalars['Int'];
  firstName: Scalars['Int'];
  gender: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
}

export interface AuthorCountAggregateInput {
  _all?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
}

export interface AuthorCreateInput {
  firstName: Scalars['String'];
  gender: Gender;
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
}

export interface AuthorCreateManyInput {
  firstName: Scalars['String'];
  gender: Gender;
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
}

export interface AuthorCreateNestedOneWithoutPostsInput {
  connect?: Maybe<AuthorWhereUniqueInput>;
  connectOrCreate?: Maybe<AuthorCreateOrConnectWithoutPostsInput>;
  create?: Maybe<AuthorCreateWithoutPostsInput>;
}

export interface AuthorCreateOrConnectWithoutPostsInput {
  create: AuthorCreateWithoutPostsInput;
  where: AuthorWhereUniqueInput;
}

export interface AuthorCreateWithoutPostsInput {
  firstName: Scalars['String'];
  gender: Gender;
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
}

export interface AuthorMaxAggregateInput {
  firstName?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
}

export interface AuthorMinAggregateInput {
  firstName?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
}

export interface AuthorOrderByInput {
  firstName?: Maybe<SortOrder>;
  gender?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
}

export interface AuthorRelationFilter {
  is?: Maybe<AuthorWhereInput>;
  isNot?: Maybe<AuthorWhereInput>;
}

export enum AuthorScalarFieldEnum {
  FirstName = 'firstName',
  Gender = 'gender',
  Id = 'id',
  LastName = 'lastName'
}

export interface AuthorUpdateInput {
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
}

export interface AuthorUpdateManyMutationInput {
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
}

export interface AuthorUpdateOneRequiredWithoutPostsInput {
  connect?: Maybe<AuthorWhereUniqueInput>;
  connectOrCreate?: Maybe<AuthorCreateOrConnectWithoutPostsInput>;
  create?: Maybe<AuthorCreateWithoutPostsInput>;
  update?: Maybe<AuthorUpdateWithoutPostsInput>;
  upsert?: Maybe<AuthorUpsertWithoutPostsInput>;
}

export interface AuthorUpdateWithoutPostsInput {
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
}

export interface AuthorUpsertWithoutPostsInput {
  create: AuthorCreateWithoutPostsInput;
  update: AuthorUpdateWithoutPostsInput;
}

export interface AuthorWhereInput {
  AND?: Maybe<Array<AuthorWhereInput>>;
  NOT?: Maybe<Array<AuthorWhereInput>>;
  OR?: Maybe<Array<AuthorWhereInput>>;
  firstName?: Maybe<StringFilter>;
  gender?: Maybe<EnumGenderFilter>;
  id?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
}

export interface AuthorWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface EnumGenderFieldUpdateOperationsInput {
  set?: Maybe<Gender>;
}

export interface EnumGenderFilter {
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderFilter>;
  notIn?: Maybe<Array<Gender>>;
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export interface Mutation {
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
}


export interface MutationAuthorCreateArgs {
  data: AuthorCreateInput;
}


export interface MutationAuthorCreateManyArgs {
  data: Array<AuthorCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
}


export interface MutationAuthorDeleteArgs {
  where: AuthorWhereUniqueInput;
}


export interface MutationAuthorDeleteManyArgs {
  where?: Maybe<AuthorWhereInput>;
}


export interface MutationAuthorUpdateArgs {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
}


export interface MutationAuthorUpdateManyArgs {
  data: AuthorUpdateManyMutationInput;
  where?: Maybe<AuthorWhereInput>;
}


export interface MutationAuthorUpsertArgs {
  create: AuthorCreateInput;
  update: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
}


export interface MutationPostCreateArgs {
  data: PostCreateInput;
}


export interface MutationPostCreateManyArgs {
  data: Array<PostCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
}


export interface MutationPostDeleteArgs {
  where: PostWhereUniqueInput;
}


export interface MutationPostDeleteManyArgs {
  where?: Maybe<PostWhereInput>;
}


export interface MutationPostUpdateArgs {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
}


export interface MutationPostUpdateManyArgs {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
}


export interface MutationPostUpsertArgs {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
}

export interface NestedEnumGenderFilter {
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderFilter>;
  notIn?: Maybe<Array<Gender>>;
}

export interface NestedStringFilter {
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
}

export interface Pagination {
  __typename?: 'Pagination';
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
}

export interface Post {
  __typename?: 'Post';
  author: Author;
  authorId: Scalars['String'];
  content: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
}

export interface PostCountAggregate {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  content: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
}

export interface PostCountAggregateInput {
  _all?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['Boolean']>;
}

export interface PostCreateInput {
  author: AuthorCreateNestedOneWithoutPostsInput;
  content: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
}

export interface PostCreateManyAuthorInput {
  content: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
}

export interface PostCreateManyAuthorInputEnvelope {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
}

export interface PostCreateManyInput {
  authorId: Scalars['String'];
  content: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
}

export interface PostCreateNestedManyWithoutAuthorInput {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
}

export interface PostCreateOrConnectWithoutAuthorInput {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
}

export interface PostCreateWithoutAuthorInput {
  content: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
}

export interface PostListRelationFilter {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
}

export interface PostMaxAggregateInput {
  authorId?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['Boolean']>;
}

export interface PostMinAggregateInput {
  authorId?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['Boolean']>;
}

export interface PostOrderByInput {
  authorId?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
}

export enum PostScalarFieldEnum {
  AuthorId = 'authorId',
  Content = 'content',
  Id = 'id',
  Title = 'title'
}

export interface PostScalarWhereInput {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  authorId?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
}

export interface PostUpdateInput {
  author?: Maybe<AuthorUpdateOneRequiredWithoutPostsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
}

export interface PostUpdateManyMutationInput {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
}

export interface PostUpdateManyWithWhereWithoutAuthorInput {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
}

export interface PostUpdateManyWithoutAuthorInput {
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
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
}

export interface PostUpdateWithoutAuthorInput {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
}

export interface PostWhereInput {
  AND?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  author?: Maybe<AuthorRelationFilter>;
  authorId?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
}

export interface PostWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  AuthorAggregate: AuthorCountAggregate;
  AuthorCount: Scalars['Int'];
  AuthorFindFirst: Author;
  AuthorFindMany: Array<Author>;
  AuthorFindUnique: Author;
  AuthorPagination: Pagination;
  PostAggregate: PostCountAggregate;
  PostFindFirst: Post;
  PostFindMany: Array<Post>;
  PostFindUnique: Post;
}


export interface QueryAuthorAggregateArgs {
  _count?: Maybe<AuthorCountAggregateInput>;
  _max?: Maybe<AuthorMaxAggregateInput>;
  _min?: Maybe<AuthorMinAggregateInput>;
  cursor?: Maybe<AuthorWhereUniqueInput>;
  orderBy?: Maybe<Array<AuthorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorWhereInput>;
}


export interface QueryAuthorCountArgs {
  cursor?: Maybe<AuthorWhereUniqueInput>;
  distinct?: Maybe<Array<AuthorScalarFieldEnum>>;
  orderBy?: Maybe<Array<AuthorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorWhereInput>;
}


export interface QueryAuthorFindFirstArgs {
  cursor?: Maybe<AuthorWhereUniqueInput>;
  distinct?: Maybe<Array<AuthorScalarFieldEnum>>;
  orderBy?: Maybe<Array<AuthorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorWhereInput>;
}


export interface QueryAuthorFindManyArgs {
  cursor?: Maybe<AuthorWhereUniqueInput>;
  distinct?: Maybe<Array<AuthorScalarFieldEnum>>;
  orderBy?: Maybe<Array<AuthorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorWhereInput>;
}


export interface QueryAuthorFindUniqueArgs {
  where: AuthorWhereUniqueInput;
}


export interface QueryAuthorPaginationArgs {
  cursor?: Maybe<AuthorWhereUniqueInput>;
  distinct?: Maybe<Array<AuthorScalarFieldEnum>>;
  orderBy?: Maybe<Array<AuthorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorWhereInput>;
}


export interface QueryPostAggregateArgs {
  _count?: Maybe<PostCountAggregateInput>;
  _max?: Maybe<PostMaxAggregateInput>;
  _min?: Maybe<PostMinAggregateInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
}


export interface QueryPostFindFirstArgs {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
}


export interface QueryPostFindManyArgs {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
}


export interface QueryPostFindUniqueArgs {
  where: PostWhereUniqueInput;
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export interface StringFieldUpdateOperationsInput {
  set?: Maybe<Scalars['String']>;
}

export interface StringFilter {
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
}

export type AuthorEntryFragment = { __typename?: 'Author', id: string, firstName: string, lastName: string, gender: Gender };

export type PaginationFragment = { __typename?: 'Pagination', pageIndex: number, pageSize: number, total: number };

export type AuthorSearchQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorWhereInput>;
}>;


export type AuthorSearchQuery = { __typename?: 'Query', pagination: { __typename?: 'Pagination', pageIndex: number, pageSize: number, total: number }, entries: Array<{ __typename?: 'Author', id: string, firstName: string, lastName: string, gender: Gender }> };

export const AuthorEntryFragmentDoc = gql`
    fragment AuthorEntry on Author {
  id
  firstName
  lastName
  gender
}
    `;
export const PaginationFragmentDoc = gql`
    fragment Pagination on Pagination {
  pageIndex
  pageSize
  total
}
    `;
export const AuthorSearchDocument = gql`
    query AuthorSearch($skip: Int = 0, $take: Int = 10, $where: AuthorWhereInput = {}) {
  pagination: AuthorPagination(skip: $skip, take: $take, where: $where) {
    ...Pagination
  }
  entries: AuthorFindMany(skip: $skip, take: $take, where: $where) {
    ...AuthorEntry
  }
}
    ${PaginationFragmentDoc}
${AuthorEntryFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AuthorSearchGQL extends Apollo.Query<AuthorSearchQuery, AuthorSearchQueryVariables> {
    document = AuthorSearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }