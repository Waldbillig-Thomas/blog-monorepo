import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthorResolver } from './author.resolver';

@Module({ providers: [AuthorResolver, PrismaService] })
export class AuthorModule {}
