<template>
  <div class="container">
    <h5>New Group</h5>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">UserId</th>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">body</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in listPost" :key="index">
        <td>{{ item.userId }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.body }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  name: 'Detail',
  setup() {
    const store = useStore();
    const listPost = computed(() => store.state.postStore.listPost);
    return {
      listPost
    }
  }
}
</script>

<style>

</style>