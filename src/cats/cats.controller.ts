import {
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    throw new HttpException('api is broken', 402);
    return 'all cat';
  }

  @Get(':id')
  getCat() {
    throw new HttpException('api is broken2', 402);
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
    return;
  }

  @Delete(':id')
  deleteCat() {
    return 'detele cat';
  }
}
