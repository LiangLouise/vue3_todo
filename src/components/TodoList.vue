<template>
    <div class="page__bd">
        <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd" v-if="hasToDos()">To-Do List</div>
            <div class="weui-panel__bd">
                <div v-for="(item, index) in todos" v-bind:key="item" class="weui-media-box weui-flex">
                    <div class="weui-media-box_text weui-flex__item vertical_flex">
                        <h4 class="weui-media-box__title">{{ item.title }}</h4>
                        <p class="weui-media-box__desc">{{ item.content }}</p>
                    </div>
                    <div class="todo_btn">
                        <button class="weui-btn weui-btn_mini weui-btn_warn" @click=deletToDo(index)>Delete</button>
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';
import {todoListRef, ToDoItem} from "@/store";

export default {
    setup() { 
        const todos = inject<Ref<ToDoItem[]>>(todoListRef);

        const deletToDo = function(index: number) {
            todos?.value.splice(index, 1);
        }

        const hasToDos = function(): boolean {
            if (todos != undefined) {
                return todos.value.length > 0;
            } else {
                return false;
            }
        }

        return {
            todos,
            deletToDo,
            hasToDos,
        }
    }
}
</script>

<style>

.vertical_flex {
    flex-direction: column;
    text-align: left;
    flex-wrap: wrap;
}

.todo_btn {
    align-self: flex-end;
    padding-right: 5px;
}
</style>