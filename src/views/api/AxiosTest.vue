<template>
  <v-btn @click="getList">test</v-btn>
  <v-btn @click="onClear">clear</v-btn>

  <ul>
    <li v-for="(item,idx) in prdList.list" :key="idx">{{item.title}}</li>
  </ul>
</template>

<script setup>
import {getCurrentInstance, reactive} from "vue";
const { proxy } = getCurrentInstance();
let prdList = reactive({
  count:0,
  list:[]
});
const getList = async () =>{
  let res = await proxy.$axios.get('/products')
  console.log(res.data)
  prdList.list = []
  prdList.list.push(...res.data.products);
}
const onClear = () =>{
  prdList.list = []
}

</script>
