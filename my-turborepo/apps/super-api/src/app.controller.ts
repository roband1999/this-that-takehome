import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { UpdateAccomplaces } from './update-accomplaces.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Put('/hero/accomplaces/:id')
  //Can Have a DTO for Id Param Aswell 
  async updateAccomplaces(@Param('id') id: number, @Body() updateAccomplaces: UpdateAccomplaces) {

  }

}
