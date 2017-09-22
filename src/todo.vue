<template>
  <div class="wrapper">
    <list class="todo-list">
      <header class="todo-filter">
        <div :class="['btn', 'btn-filter', btn.type === chosen ? 'btn-filter-selected' : '']" v-for="(btn, x) in filterButtons" :key="x" @click="filterTodo(btn.type)">
          <text :class="['btn-text', 'btn-filter-text', btn.type === chosen ? 'btn-filter-text-selected' : '']">{{btn.title}}</text>
        </div>
      </header>
      <cell class="todo-cell" v-for="(todo, i) in filteredTodos" :key="i">
        <div :class="['todo-card', i === 0 ? 'first-todo-card' : '']">
          <div class="btn btn-complete" @click="toggleComplete(todo)">
            <text class="btn-text btn-complete-text" v-if="todo.completed">&#xe721;</text>
            <text class="btn-text btn-complete-text" v-else>&#xe720;</text>
          </div>
          <div style="flex:1">
            <input type="text" class="todo-editor" v-if="todo.editing" v-model="todo.title" />
            <text :class="['todo-title', todo.completed ? 'todo-title-completed' : '']">{{todo.title}}</text>
          </div>
          <div class="btn btn-delete" @click="removeTodo(todo)">
            <text class="btn-text btn-delete-text">&#xe723;</text>
          </div>
        </div>
      </cell>
      <cell class="empty-todo-cell" v-if="!filteredTodos.length">
        <text class="tips">暂无任务</text>
      </cell>
    </list>
    <div class="operations">
      <input ref="input" class="input" type="text" placeholder="type here" v-model="userInput" @return="addTodo" />
      <div class="btn btn-send" v-if="userInput" @click="addTodo">
        <text class="btn-text btn-send-text">+</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    justify-content: space-between;
  }
  .todo-list {
    flex: 1;
    background-color: #F3F3F3;
  }
  .tips {
    text-align: center;
    color: #CCCCCC;
    font-size: 60px;
    margin-top: 200px;
  }
  .todo-filter {
    height: 90px;
    background-color: #FFFFFF;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .todo-card {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 25px;
    margin-right: 25px;
    padding-top: 45px;
    padding-bottom: 45px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    background-color: #FFFFFF;
  }
  .first-todo-card {
    margin-top: 50px;
  }
  .btn-complete {
    width: 100px;
  }
  .btn-complete-text {
    font-family: iconfont;
    font-size: 60px;
  }
  .btn-delete {
    width: 80px;
  }
  .btn-delete-text {
    font-family: iconfont;
    font-size: 50px;
  }
  .todo-title {
    font-size: 42px;
    color: #606060;
  }
  .todo-title-completed {
    color: #BBBBBB;
    text-decoration: line-through;
  }
  .operations {
    height: 120px;
    flex: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: #DDD;
    background-color: #FFFFFF;
  }
  .input {
    width: 500px;
    height: 120px;
    padding-left: 30px;
    color: #606060;
    font-size: 40px;
  }
  .btn {
    justify-content: center;
  }
  .btn-text {
    text-align: center;
    font-size: 34px;
    color: #808080;
  }
  .btn-filter {
    width: 140px;
    height: 60px;
    border-radius: 12px;
    margin-left: 25px;
    margin-right: 25px;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
  }
  .btn-filter-selected {
    border-color: #DDD;
    background-color: #F5F5F5;
  }
  .btn-filter-selected:active {
    background-color: #E0E0E0;
  }
  .btn-filter-text {
    color: #808080;
    font-size: 32px;
  }
  .btn-filter-text-selected {
    color: #606060;
    font-weight: bold;
  }
  .btn-send {
    width: 120px;
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: #DDD;
    background-color: #F5F5F5;
  }
  .btn-send:active {
    background-color: #E0E0E0;
  }
  .btn-send-text {
    color: #808080;
    font-size: 70px;
  }
</style>

<script>
  const STORAGE_KEY = 'weex-vue-todomvc-todos'
  const storage = weex.requireModule('storage')
  const dom = weex.requireModule('dom')
  dom.addRule('fontFace', {
    fontFamily: 'iconfont',
    src: 'url("https://gw.alicdn.com/bao/uploaded/TB1yokbXqagSKJjy0FhXXcrbFXa.ttf")'
    // src: 'url("https://gw.alicdn.com/bao/uploaded/TB1esNydMoQMeJjy1XaXXcSsFXa.woff")'
  })
  export default {
    props: {
      filterButtons: {
        type: Object,
        default: [
          { type: 'all', title: '全部' },
          { type: 'active', title: '待办' },
          { type: 'completed', title: '已完成' }
        ]
      }
    },
    data () {
      return {
        chosen: 'all',
        userInput: '',
        todoList: []
      }
    },
    computed: {
      filteredTodos () {
        switch (this.chosen) {
          case 'completed': return this.todoList.filter(todo => todo.completed)
          case 'active': return this.todoList.filter(todo => !todo.completed)
          default: return this.todoList
        }
      }
    },
    watch: {
      todoList: {
        deep: true,
        handler () {
          this.saveTodoList()
        }
      }
    },
    created () {
      storage.getItem(STORAGE_KEY, event => {
        if (event.result === 'success' && event.data) {
          this.todoList = JSON.parse(event.data)
        }
      })
    },
    methods: {
      toggleComplete (todo) {
        todo.completed = !todo.completed
      },
      filterTodo (type) {
        this.chosen = type
      },
      addTodo (todo) {
        if (this.$refs.input && this.$refs.input.blur) {
          this.$refs.input.blur()
        }
        const value = this.userInput && this.userInput.trim()
        if (value) {
          this.todoList.push({
            completed: false,
            title: value
          })
          this.userInput = ''
        }
      },
      removeTodo (todo) {
        this.todoList.splice(this.todoList.indexOf(todo), 1)
      },
      saveTodoList () {
        storage.setItem(STORAGE_KEY, JSON.stringify(this.todoList))
      }
    }
  }
</script>
