<template>
  <div class="container">
    <h3>{{ message }}</h3>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
      </tr>
      </thead>
      <tbody>
      <button @click="changeTitle">Change Title</button>
      <tr v-for="(item) in classList" v-bind:key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.name }}</td>
      </tr>
      </tbody>
    </table>

    <h3>Infor of car</h3>
    <h4>{{ car.name }}</h4>
    <h5>{{ car.price }}</h5>

    <div class="input-group mb-3">
      <span id="basic-addon1" class="input-group-text">Seach</span>
      <input v-model="searchName" class="form-control" placeholder="Name" type="text">
    </div>
    <ul>
      <li v-for="(name, index) in listNameFill" :key="index">
        {{ name }}
      </li>
    </ul>

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

  </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed, reactive, ref, watch, watchEffect} from "vue";
import useFetchPosts from "../../use/fetchPosts";
// ref thường được dùng để khởi tạo những giá trị nguyên thủy (hiểu đơn giản như string bool num)
// reactive thường dùng để khởi tạo các giá trị như object or array !


// Về cơ bản thì watchEffect giống với computed
// - > Khác nhau : computed có return còn watchEffect thì không.
export default {
  setup() {
    let searchName = ref('');
    let message = ref("Hello this is something new in vue3");
    // const store = useStore();
    const classList = computed(() => useStore().state.classStore.listClass);
    const car = reactive({
      name: 'BMW X5',
      price: '2000000'
    });

    const listName = reactive(['some thing', 'apple', 'banana', 'orgin']);

    const listNameFill = computed(() => {
      return listName.filter(
          (item) => item.toLowerCase().includes(searchName.value.toLowerCase())
      )
    })

    watch(searchName, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    })

    watchEffect(() => {
      if (searchName.value) {
        console.log("value change!");
      }
    });

    //Khi khởi tạo biến trong setup() thì vue không thể lắng nghe sự thay đổi nên khi đó phải gán nó bằng một ref và có thể thay đổi giá trị
    //khi truy cập qua thuộc tính value (lúc này biến của ta sẽ chuyển thành một object);
    function changeTitle() {
      message.value = "new value";
      car.name = 'BMW X7';
      car.price = '5000000'
    }


    const {group, getPosts} = useFetchPosts();
    getPosts();

    return {classList, message, changeTitle, car, searchName, group, listNameFill}
  },
}
</script>