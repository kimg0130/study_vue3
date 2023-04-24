npm i swiper
<template>
  <v-btn @click="onClick">swiperjs.com 이동</v-btn>

  <v-divider class="mt-5 mb-5"></v-divider>

  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item,idx) in prdList.list" :key="idx"><img :src="item.thumbnail" style="width: 100%; height: 200px"></swiper-slide>
  </swiper>
</template>

<script setup>
import {Swiper,SwiperSlide} from "swiper/vue";
import {getCurrentInstance, onMounted, reactive} from "vue";
import 'swiper/css';

const { proxy } = getCurrentInstance();
let prdList = reactive({
  count:0,
  list:[]
});

onMounted(()=>{
  getList()
})

const getList = async () =>{
  let res = await proxy.$axios.get('/products')
  console.log(res.data)
  prdList.list = []
  prdList.list.push(...res.data.products);
}

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};


const onClick = () =>{
  window.open('https://swiperjs.com/vue#controller')
}
</script>
