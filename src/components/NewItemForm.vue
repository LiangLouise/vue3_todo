<template>
  <div>
    <form class="weui-form">
      <div class="weui-form__text-area">
        <h2 class="weui-form__title">Add Your new To-Do</h2>
        <div class="weui-form__desc">Type the content of To-Do below</div>
      </div>

        <div class="weui-form__control-area">
        <div class="weui-cells__group weui-cells__group_form">
          <div class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><label class="weui-label">Title</label></div>
              <div class="weui-cell__bd">
                  <input id="to_content" class="weui-input" placeholder="Some Title" v-model="title" maxlength="50"/>
              </div>
            </div>
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><label class="weui-label">Content</label></div>
              <div class="weui-cell__bd">
                  <input id="to_content" class="weui-input" placeholder="Some Content" v-model="content" maxlength="120"/>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="weui-form__opr-area">
            <button class="weui-btn weui-btn_primary weui-btn" @click="submit">Submit</button>
        </div>
        <div id="warnToast" v-bind:style="toastStyle" @click="clearToast">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-icon_toast" v-bind:class="toastType"></i>
                <p class="weui-toast__content">{{ toastContent }}</p>
            </div>
        </div>
    </form>

    
  </div>
</template>

<script lang="ts">
import {ref, inject, Ref} from 'vue';
import {ToDoItem, todoListRef} from "@/store";

interface ToastStyle {
    opacity?: number;
    display?: string;
}

enum ToastClass {
    Waring =  "weui-icon-warn",
    Success = "weui-icon-success-no-circle",
}

enum ToastContent {
    Waring =  "Please Fill all fields!",
    Success = "Create Successfully!",
}

export default {
    setup() {

        const initialTostStyle: ToastStyle = {opacity: 0, display: "None"};
      
        const todoList = inject<Ref<ToDoItem[]>>(todoListRef);
        const title = ref('');
        const content = ref('');
        const toastStyle = ref(initialTostStyle);
        const toastType = ref('');
        const toastContent = ref('');

        // Submit a new Todo, if either field is empty, ask for completion
        // If both there, save to todoList
        const submit = function() {
            toastStyle.value = {opacity: 1};
            
            if (title.value == "" || content.value == "") {
                toastType.value = ToastClass.Waring;
                toastContent.value = ToastContent.Waring;
                return;
            }
            const newToDo: ToDoItem = {title: title.value, content: content.value};
            todoList?.value.unshift(newToDo);
            toastType.value = ToastClass.Success;
            toastContent.value = ToastContent.Success;
            title.value = '';
            content.value = '';
        };

        // Clear Toast from display
        const clearToast = function() {
            toastStyle.value = initialTostStyle;
        }

        return {
            title,
            content,
            submit,
            toastType,
            toastStyle,
            toastContent,
            clearToast,
        }
    }
}

</script>
