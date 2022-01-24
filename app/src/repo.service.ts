import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import User from './db/models/user.entity';
import Car from './db/models/car.entity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Car) public readonly carRepo: Repository<Car>,
  ) {}
}

export default RepoService;
