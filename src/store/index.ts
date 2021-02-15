import loadToDos from "./storage";

export interface ToDoItem {
    title: string;
    content: string;
}

export const todoListRef = Symbol();

export {
    loadToDos,
};