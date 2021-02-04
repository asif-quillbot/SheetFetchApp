import { Controller, Get, Query } from "@nestjs/common";
import { CareerService } from "./career.service";

@Controller("career")
export class CareerController {
  constructor(private careerService: CareerService) {}

  @Get()
  async getPositions(@Query() query) {
    return this.careerService.getPositions(query);
  }

  // @Get('redis')
  // async getCached(@Query() query) {
  //     return this.careerService.getCached(query)
  // }
}
