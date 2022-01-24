import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoService from './repo.service';
import User from './db/models/user.entity';
import Car from './db/models/car.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Car])],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {}

export default RepoModule;
