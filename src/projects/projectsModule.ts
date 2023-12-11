import { Module } from '@nestjs/common';
import { ProjectsService } from './projectsService';
import { ProjectsController } from './projectsController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/projectEntity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
