<template>
<div class="page">
    <div class="weui-tab">
        <div class="weui-navbar">
            <div class="weui-navbar__item"> 
                <router-link to="/">Home</router-link>
            </div>
            <div class="weui-navbar__item"> 
                <router-link to="/about">About</router-link>
            </div>
        </div>
    </div>
    <router-view class="main"/>
    <div class="weui-footer">
        <p class="weui-footer__text">Copyright &copy; 2019-2021 LiangLiouse</p>
    </div>
</div>
</template>

<script lang="ts">
import {todoListRef, loadToDos} from "@/store";
import { provide, ref } from "vue";

export default ({
    setup() {
        const todos = ref(Array<string>());
        // Load the data from localstorage and 
        // register a hanlder to save data to ls
        todos.value = loadToDos(todos);
        provide(todoListRef, todos);   
    }
})
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
}

.themebtn {
    float: right;
}

.main {
    height: 100%;
}

</style>
