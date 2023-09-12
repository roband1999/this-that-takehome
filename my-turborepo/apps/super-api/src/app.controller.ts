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
    // We are updating relationships
    // Assumptions: 
    //  - relationships aren't always symmetrical, so we are specifying unidirectional relationships
    //  - The Heros already exist in the database, we aren't creating hero's as we go.

    // When number of Accomplaces is not huge (i.e. >100) 
    // we can specify in the body the all of the accomplaces at all times

    // If Accomplaces is huge (>>100) then it would make more sense to specify in the DTO the Ids to delete,
    // or the Id's to add.  

    // The POSTGRES Schema would be better generateed via TypeORM Entity
    // We can then access a Repo and make request

    // We'll assume the "Not Huge" case
    // We need to get the Hero's Repository
    // Set the Hero's Accomplaces Field to array passed in the Body
    // The POSTGRES schema will validate the ID's exist due to the RELATIONS command


    // For Production, It's probably better to only allow adding accomplaces,
    // dramatically augmenting accomplace relationships in one request seems risky

    // We'll need unit tests for this which can test the update flow (Canaries aswell etc)

    // Lastly we need some monitoring: We should be logging the old data as backup, the new update target, the latency of Database call.
    //  We should also be looking to catch exceptions from Repository, and handle them gracefull in the Status Code which we can provide as part of NestJS annotations.


  }

}
