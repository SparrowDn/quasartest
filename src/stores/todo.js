import { defineStore } from "pinia";
import { uid } from "quasar";
import { LocalStorage } from 'quasar'


export default defineStore("useTodo", {

  state:()=>({
    tasks:[],
  }),

  getters : {

  },

  actions: {

    //localstorage
    listTodo(){
      this.tasks = LocalStorage.getItem("todo");},

    //insert
    insertTodo(title){
      if(this.tasks){
        this.tasks.unshift({
          id: uid(),
          title,
          done:'N'
        });
      }else{
        this.tasks=[];
        this.tasks.push({
          id: uid(),
          title,
          done:'N'
        })
      }

      LocalStorage.set("todo", this.tasks);
    },

    //remove
    removeTodo(id){
      const idx = this.tasks.findIndex(task=>task.id == id);
      this.tasks.splice(idx,1);
      LocalStorage.set("todo", this.tasks);
    },

    //edit
    editTodo(item){
      const idx = this.tasks.findIndex(task=>task == item);
      item.done='N';
      this.tasks.splice(idx,1,item);
      LocalStorage.set("todo", this.tasks)
    }
  }
})
