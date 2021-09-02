import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PostResolver } from './post.resolver';

@Module({ providers: [PostResolver, PrismaService] })
export class PostModule {}
