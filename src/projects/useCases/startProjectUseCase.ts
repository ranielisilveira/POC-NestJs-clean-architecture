import { Inject } from '@nestjs/common';
import { IProjectRepository } from '../projectRespository';
import { StartProjectDto } from '../dto/startProjectDto';

export class StartProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository, //Repository em memoria
  ) {}

  async execute(id: string, input: StartProjectDto) {
    const project = await this.projectRepository.findById(id);
    project.start(input.started_at);
    await this.projectRepository.update(project);
    return project;
  }
}
