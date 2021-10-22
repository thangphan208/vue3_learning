<template>
  <header-page/>
  <router-view/>
</template>

<script>
import HeaderPage from "./components/Header";
import {collection,getDocs} from 'firebase/firestore/lite';
import {fireStoreBase} from "./configs/firebase";

export default {
  name: 'App',
  components: {
    HeaderPage
  },
  setup() {
    const collecton_trans = async function getCollect() {
      const citiesCol = collection(fireStoreBase, 'Transaction');
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => doc.data());
      return cityList;
    }
    console.log(collecton_trans());
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
