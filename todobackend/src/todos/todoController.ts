// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import Todo from "./todo.js";
import { TodoService } from "./todoService.js";

@Route("todos")
export class TodosController extends Controller {
  @Get("{todoId}")
  public async getTodo(
      @Path() todoId: string,
  ): Promise<Todo> {
    return new TodoService().get(todoId);
  }
}


