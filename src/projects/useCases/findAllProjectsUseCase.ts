import { IProjectRepository } from '../projectRespository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindAllProjectsUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository, //Repository em memoria
  ) {}

  execute() {
    return this.projectRepository.findAll();
  }
}
