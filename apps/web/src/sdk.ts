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

export interface Author {
  __typename?: 'Author';
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  posts?: Maybe<Array<Post>>;
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

export interface Post {
  __typename?: 'Post';
  author: Author;
  authorId: Scalars['String'];
  content: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
}

export interface PostListRelationFilter {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
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

export interface Query {
  __typename?: 'Query';
  AuthorFindMany: Array<Author>;
}


export interface QueryAuthorFindManyArgs {
  cursor?: Maybe<AuthorWhereUniqueInput>;
  distinct?: Maybe<Array<AuthorScalarFieldEnum>>;
  orderBy?: Maybe<Array<AuthorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorWhereInput>;
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
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

export type AuthorSearchQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
}>;


export type AuthorSearchQuery = { __typename?: 'Query', AuthorFindMany: Array<{ __typename?: 'Author', id: string, firstName: string, lastName: string, gender: Gender }> };

export const AuthorSearchDocument = gql`
    query AuthorSearch($skip: Int) {
  AuthorFindMany(skip: $skip) {
    id
    firstName
    lastName
    gender
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