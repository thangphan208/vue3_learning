<template>
  <h1>Home Page</h1>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <button @click="addMore">Click</button>
    <select v-model="selected">
      <option v-for="(option, index) in options" :value="option.value" :key="index">
        {{ option.text }}
      </option>
    </select>
    <ul>
      <li v-for="(option, index) in options" :value="option.value" :key="index">
        {{ option.text }}
      </li>
    </ul>
    <div class="container">
      <list-class></list-class>
    </div>
  </div>

</template>

<script>
import ListClass from "./class/ListClass";
export default {
  name : 'Home',
  components :{
    // eslint-disable-next-line vue/no-unused-components
    ListClass,

  },
  data(){
    return{
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  },
  methods:{
    addMore(){
      this.options.push({
        text : "Test",
        value : 'Test'
      })
    }
  }
}
</script>

<style>

</style>