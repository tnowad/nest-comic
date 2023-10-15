import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configurations, WasValidated } from 'src/config/configurations';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (
        configService: ConfigService<Configurations, WasValidated>,
      ) => {
        return {
          type: 'postgres',
          url: configService.get('postgres.url', { infer: true }),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          logging: 'all',
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
