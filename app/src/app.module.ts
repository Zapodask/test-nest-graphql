import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as ormOptions from './config/orm';
import RepoModule from './repo.module';
import CarResolver from './resolvers/car.resolver';
import UserResolver from './resolvers/user.resolver';

const gqlImports = [UserResolver, CarResolver];

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    RepoModule,
    ...gqlImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
})
export class AppModule {}
