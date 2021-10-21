<template>
  <div class="container header">
    <ul class="nav">
      <li class="nav-item">
        <router-link :to="{ name: 'Home'}" class="nav-link active">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'Detail'}" class="nav-link active">Detail</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'About'}" class="nav-link active">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
.header {
  background-color: coral;
  height: 120px;
}

.nav-link {
  color: white;
}
</style>