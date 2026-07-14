import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import bookProviderConfig from './config/book-provider.config';
import { validateEnv } from './config/validate-env';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { LibraryModule } from './library/library.module';
import { GoalsModule } from './goals/goals.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
      load: [appConfig, databaseConfig, jwtConfig, bookProviderConfig],
    }),
    HealthModule,
    AuthModule,
    UsersModule,
    BooksModule,
    LibraryModule,
    GoalsModule,
  ],
})
export class AppModule {}
