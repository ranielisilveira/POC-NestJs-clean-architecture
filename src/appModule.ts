import { Module } from '@nestjs/common';
import { AppController } from './appController';
import { AppService } from './appService';
import { ProjectsModule } from './projects/projectsModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './projects/entities/projectEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Project],
      synchronize: true,
    }),
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
