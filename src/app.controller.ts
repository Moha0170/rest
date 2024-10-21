import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  #products = [
    {
      nev: "valami1",
      ar: 1000
    },
    {
      nev: "valami2",
      ar: 2000
    },
    {
      nev: "valami3",
      ar: 3000
    },
    {
      nev: "valami4",
      ar: 4000
    }
  ];

  @Get("products")
  listProducts() {
    return this.#products
  }

  @Get("products/:id")
  getProduct(@Param("id") id: string) {
    return this.#products[Number(id)-1];
  }
}
