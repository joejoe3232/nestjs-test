import { Controller, Get, Param , Query} from '@nestjs/common';

@Controller('todos')
export class TodoController {
  //http://localhost:3000/todos/1
  @Get(':id')
  get(@Param('id') id: string) {
    return {
      id,
      title: `Title ${id}`,
      description: ''
    };
  }

  //http://localhost:3000/todos?limit=1
  @Get()
  getList(
    @Query('limit') limit: number = 30,
    @Query('skip') skip: number = 0
  ) {
    const list = [
      {
        id: 1,
        title: 'Title 1',
        description: ''
      },
      {
        id: 2,
        title: 'Title 2',
        description: ''
      }
    ];

    return list.slice(skip, limit);
  }
  
}