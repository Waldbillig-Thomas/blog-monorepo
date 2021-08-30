import { Module } from '@nestjs/common';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { environment } from '../environments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// move to environment
const graphqlOptions: GqlModuleOptions = {
  autoSchemaFile: join(process.cwd(), 'apps/api/schema.gql'),
  debug: !environment.production,
  playground: !environment.production,
  sortSchema: true,
};

@Module({
  imports: [GraphQLModule.forRoot(graphqlOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
