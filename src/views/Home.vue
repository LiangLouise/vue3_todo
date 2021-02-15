<template>
  <div class="home">
    <NewItemForm/>
    <TodoLit/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NewItemForm from '@/components/NewItemForm.vue';
import TodoLit from '@/components/TodoList.vue';

@Options({
  components: {
    NewItemForm,
    TodoLit,
  },
})
export default class Home extends Vue {}
</script>
