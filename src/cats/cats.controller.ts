import { Controller, Delete, Get, HttpException, Patch, Post, Put, UseFilters } from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  getAllCat() {
    throw new HttpException('api is broken', 402)
    return 'all cat';
  }

  @Get(':id')
  getCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return ;
  }

  @Delete(':id')
  deleteCat() {
    return 'detele cat';
  }
}
