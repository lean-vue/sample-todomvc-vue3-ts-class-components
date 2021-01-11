import { Store } from "./store";
import { Todo } from "./todo";
class LocalStore implements Store {

  async getAll(): Promise<Todo[]> {
    return this.loadTodos();
  }

  async create(title: string): Promise<Todo> {
    const todo = { id: this.generateId(), title, completed: false };

    const todos = this.loadTodos();
    todos.push(todo);
    this.saveTodos(todos);

    return todo;
  }

  async update(id: number, changes: Partial<{ title: string; completed: boolean }>): Promise<Todo> {
    const todos = this.loadTodos();

    const ix = todos.findIndex(t => t.id === id);
    todos[ix] = { ...todos[ix], ...changes };
    this.saveTodos(todos);

    return todos[ix];
  }

  async remove(id: number): Promise<void> {
    const todos = this.loadTodos();
    this.saveTodos(todos.filter(t => t.id !== id));
  }

  private loadTodos(): Todo[] {
    return JSON.parse(localStorage.todos || '[]');
  }

  private saveTodos(todos: Todo[]): void {
    localStorage.todos = JSON.stringify(todos);
  }

  private generateId(): number {
    const nextId = JSON.parse(localStorage.lastId || '0') + 1;
    localStorage.lastId = nextId;
    return nextId;
  }
}

// Export singleton store object
export default new LocalStore();
