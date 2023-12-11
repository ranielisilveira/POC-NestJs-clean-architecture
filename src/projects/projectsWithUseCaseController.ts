import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { CreateProjectDto } from './dto/createProjectDto';
import { CreateProjectUseCase } from './useCases/createProjectUseCase';
import { FindAllProjectsUseCase } from './useCases/findAllProjectsUseCase';
import { StartProjectUseCase } from './useCases/startProjectUseCase';
import { StartProjectDto } from './dto/startProjectDto';

@Controller('projects')
export class ProjectsWithUseCaseController {
  @Inject(CreateProjectUseCase)
  private readonly createProjectUseCase: CreateProjectUseCase;

  @Inject(FindAllProjectsUseCase)
  private readonly findAllProjectsUseCase: FindAllProjectsUseCase;

  @Inject(StartProjectUseCase)
  private readonly startProjectUseCase: StartProjectUseCase;

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.createProjectUseCase.execute(createProjectDto);
  }

  @Get()
  findAll() {
    return this.findAllProjectsUseCase.execute();
  }

  @Post(':id/start')
  start(@Param('id') id: string, @Body() startProjectDto: StartProjectDto) {
    return this.startProjectUseCase.execute(id, startProjectDto);
  }
}
