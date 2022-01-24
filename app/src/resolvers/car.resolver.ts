import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import RepoService from '../repo.service';
import Car from '../db/models/car.entity';
import CarInput from './input/car.input';

@Resolver()
export default class CarResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Car])
  public async getCars(): Promise<Car[]> {
    return this.repoService.carRepo.find();
  }

  @Query(() => Car, { nullable: true })
  public async getCar(@Args('id') id: number): Promise<Car> {
    return this.repoService.carRepo.findOne(id);
  }

  @Query(() => [Car])
  public async getCarsFromUser(@Args('userId') userId: number): Promise<Car[]> {
    return this.repoService.carRepo.find({
      where: { userId },
    });
  }

  @Mutation(() => Car)
  public async createCar(@Args('data') input: CarInput): Promise<Car> {
    const car = this.repoService.carRepo.create({
      model: input.model,
      year: input.year,
      userId: input.userId,
    });

    return this.repoService.carRepo.save(car);
  }
}
