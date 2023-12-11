import { CreateProjectDto } from '../dto/createProjectDto';
import { Project } from '../entities/projectEntity';
import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '../projectRespository';

@Injectable()
export class CreateProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository, //Repository in memory
  ) {}

  async execute(input: CreateProjectDto) {
    const project = new Project(input);
    await this.projectRepository.create(project);
    return project;
  }
}
