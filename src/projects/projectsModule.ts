import { Module } from '@nestjs/common';
import { ProjectsService } from './projectsService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/projectEntity';
import { ProjectsWithUseCaseController } from './projectsWithUseCaseController';
import { CreateProjectUseCase } from './useCases/createProjectUseCase';
import { FindAllProjectsUseCase } from './useCases/findAllProjectsUseCase';
import { StartProjectUseCase } from './useCases/startProjectUseCase';
import { ProjectTypeOrmRepository } from './projectRespository';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsWithUseCaseController],
  providers: [
    ProjectsService,
    CreateProjectUseCase,
    FindAllProjectsUseCase,
    StartProjectUseCase,
    ProjectTypeOrmRepository,
    {
      provide: 'IProjectRepository',
      useExisting: ProjectTypeOrmRepository,
    },
  ],
})
export class ProjectsModule {}
