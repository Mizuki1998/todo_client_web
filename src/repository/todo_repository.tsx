import axios, { AxiosResponse } from "axios";
import { TodoDto } from "./todo_response";

const BASE_URL = "http://localhost:8080"; // サーバーのベースURL

// TodoRepositoryクラスの定義
class TodoRepository {
  // Todoリストを取得するメソッド
  static async getTodoList(): Promise<TodoDto[]> {
    try {
      const response = await axios.get(`${BASE_URL}/todos/list`);
      return response.data.list;
    } catch (error) {
      console.error("Error fetching todo list:", error);
      throw error;
    }
  }

  // 新しいTodoを作成するメソッド
  static async createTodo(todo: TodoDto): Promise<TodoDto> {
    try {
      const response: AxiosResponse<TodoDto> = await axios.post(
        `${BASE_URL}/todos/create`,
        todo
      );
      return response.data;
    } catch (error) {
      console.error("Error creating todo:", error);
      throw error;
    }
  }

  // Todoを更新するメソッド
  static async updateTodo(id: number, updatedTodo: TodoDto): Promise<TodoDto> {
    try {
      const response: AxiosResponse<TodoDto> = await axios.put(
        `${BASE_URL}/todos/update/${id}`,
        updatedTodo
      );
      return response.data;
    } catch (error) {
      console.error("Error updating todo:", error);
      throw error;
    }
  }

  // Todoを削除するメソッド
  static async deleteTodo(id: number): Promise<void> {
    try {
      await axios.delete(`${BASE_URL}/todos/delete/${id}`);
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  }
}

export default TodoRepository;
