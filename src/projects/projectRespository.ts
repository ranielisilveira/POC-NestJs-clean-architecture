import { Repository } from 'typeorm';
import { Project } from './entities/projectEntity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

export interface IProjectRepository {
  create(project: Project): Promise<void>;
  update(project: Project): Promise<void>;
  findAll(): Promise<Project[]>;
  findById(id: string): Promise<Project>;
}

@Injectable()
export class ProjectTypeOrmRepository implements IProjectRepository {
  constructor(
    @InjectRepository(Project)
    private typeOrmRepository: Repository<Project>,
  ) {}

  async create(project: Project): Promise<void> {
    await this.typeOrmRepository.save(project);
  }

  async update(project: Project): Promise<void> {
    await this.typeOrmRepository.update(project.id, project);
  }

  findAll(): Promise<Project[]> {
    return this.typeOrmRepository.find();
  }

  findById(id: string): Promise<Project> {
    return this.typeOrmRepository.findOneOrFail({ where: { id } });
  }
}
