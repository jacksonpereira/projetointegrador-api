import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ONG } from './ong.model';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    ONG,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: <any>String('postgres'),
      host: String(process.env.DB_HOST),
      port: Number(process.env.PORT_DB),
      username: String(process.env.USERNAME_DB),
      password: String(process.env.PASSWORD_DB),
      database: String(process.env.NAME_DB),
      entities: [
        ONG,
      ],
      synchronize: Boolean(true),
      ssl: Boolean(process.env.DB_SSL == 'true' ? true: false),
      extra: {
        ssl: {
          rejectUnauthorized: Boolean(process.env.DB_REJECTUNAUTHORIZED == 'true' ? true: false),
        },
      },
      logging: false,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([
      ONG,
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
