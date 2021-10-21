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
      <tr v-for="(item, index) in group" :key="index">
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
import useFetchPosts from '../use/fetchPosts';

export default {
  name: 'Detail',
  setup() {
    const {group, getPosts} = useFetchPosts();
    getPosts();
    console.log(group)
    return {
      group
    }
  }
}
</script>

<style>

</style>