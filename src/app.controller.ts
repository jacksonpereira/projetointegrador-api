import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ONG } from './ong.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(201)
  createONG(@Body() ong:ONG): Promise<ONG> {
    return this.appService.createONG(ong);
  }

  @Get()
  getOngs(): Promise<ONG[]> {
    return this.appService.getONGs();
  }

  @Get('search')
  getOngByNomeAndCidade(@Query('nome') nome, @Query('cidade') cidade): Promise<ONG[]> {
    return this.appService.getOngByNomeAndCidade(nome, cidade);
  }
}
