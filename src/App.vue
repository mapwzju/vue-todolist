<template>
  <div id="app">
    <todo-list-tab></todo-list-tab>
    <router-view class='content'></router-view>
  </div>
</template>

<script>
import TodoListTab from 'components/Tab'
export default {
  name: 'app',
  components: {
    TodoListTab
  }
}
</script>
<style scoped>
.content{
  position: fixed;
  left: 50%;
  top: 0px;
}
</style>
