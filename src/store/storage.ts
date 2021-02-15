import {watch, Ref} from 'vue';

interface Local {
    "todo": string[];
}

export default function loadToDos(todoRef: Ref<string[]>): string[] {

    watch(
        todoRef, 
        (newValue,) => {
            localStorage.setItem("todo", JSON.stringify({"todo": newValue}));
        },
        {deep: true}
    );

    const data = localStorage.getItem("todo");
    if (data != null) {
        const todos: Local = JSON.parse(data);
        return todos.todo;
    } else {
        return [];
    }
}
