import { createStore, action, thunk, Action, Thunk } from 'easy-peasy';
import api from '../api';

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface TodoStoreModel {
  todos: Todo[];
  fetchTodos: Thunk<TodoStoreModel>;
  setTodos: Action<TodoStoreModel, Todo[]>;
  addTodo: Thunk<TodoStoreModel, Omit<Todo, 'id'>>;
  appendTodo: Action<TodoStoreModel, Todo>;
  updateTodo: Thunk<TodoStoreModel, Todo>;
  modifyTodo: Action<TodoStoreModel, Todo>;
  removeTodo: Thunk<TodoStoreModel, number>;
  deleteTodo: Action<TodoStoreModel, number>;
}

const todoStoreModel: TodoStoreModel = {
  todos: [],

  fetchTodos: thunk(async (actions) => {
    try {
      const response = await api.get<Todo[]>('');
      actions.setTodos(response.data);
    } catch (error) {
      console.error("Erro ao buscar todos:", error);
    }
  }),

  setTodos: action((state, todos) => {
    state.todos = todos;
  }),

  addTodo: thunk(async (actions, newTodo) => {
    try {
      const response = await api.post<Todo>('', newTodo, {
        headers: { 'Content-Type': 'application/json' },
      });
      actions.appendTodo(response.data);
    } catch (error) {
      console.error("Erro ao adicionar todo:", error);
    }
  }),

  appendTodo: action((state, todo) => {
    state.todos.push(todo);
  }),

  updateTodo: thunk(async (actions, updatedTodo) => {
    try {
      await api.put(`/${updatedTodo.id}`, updatedTodo, {
        headers: { 'Content-Type': 'application/json' },
      });
      actions.modifyTodo(updatedTodo);
    } catch (error) {
      console.error("Erro ao atualizar todo:", error);
    }
  }),

  modifyTodo: action((state, updatedTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index > -1) {
      state.todos[index] = updatedTodo;
    }
  }),

  removeTodo: thunk(async (actions, todoId) => {
    try {
      await api.delete(`/${todoId}`);
      actions.deleteTodo(todoId);
    } catch (error) {
      console.error("Erro ao remover todo:", error);
    }
  }),

  deleteTodo: action((state, todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
  }),
};

const store = createStore(todoStoreModel);

export default store;