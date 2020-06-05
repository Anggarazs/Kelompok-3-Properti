<template>
 <div>
    <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Komen</label>
        <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
        <button>Add</button>
    </form>
    <ul>
        <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
        ></li>
    </ul>
 </div>
</template>

<script>
export default {
  name: 'Komentar',
  data () {
    return {
      msg: 'HHH'
    }
  }
}
</script>
