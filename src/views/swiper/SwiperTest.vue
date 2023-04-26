npm i swiper
<template>
  <v-btn @click="onClick">swiperjs.com 이동</v-btn>

  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="font-weight-bold text-blue">기본</div>
  <swiper
    :slides-per-view="1"
    :space-between="50"
  >
    <swiper-slide v-for="(item,idx) in prdList.list" :key="idx"><img :src="item.thumbnail" style="width: 100%; height: 200px"></swiper-slide>
  </swiper>

  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="font-weight-bold text-blue">navigation</div>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :modules="[Navigation]"
  >
    <swiper-slide v-for="(item,idx) in prdList.list" :key="idx"><img :src="item.thumbnail" style="width: 100%; height: 200px"></swiper-slide>
  </swiper>

  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="font-weight-bold text-blue">Pagination</div>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :modules="[Pagination]"
  >
    <swiper-slide v-for="(item,idx) in prdList.list" :key="idx"><img :src="item.thumbnail" style="width: 100%; height: 200px"></swiper-slide>
  </swiper>


  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="font-weight-bold text-blue">Scrollbar</div>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :modules="[Scrollbar]"
  >
    <swiper-slide v-for="(item,idx) in prdList.list" :key="idx"><img :src="item.thumbnail" style="width: 100%; height: 200px"></swiper-slide>
  </swiper>


  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="font-weight-bold text-blue">vertical</div>
<!--  vertical 사용시 height지정필요-->
  <swiper
    :slides-per-view="1"
    :space-between="0"
    direction="vertical"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    style="height: 200px"
    :pagination="{ clickable: true }"
    :modules="[Pagination]"
  >
    <swiper-slide v-for="(item,idx) in prdList.list" :key="idx"><img :src="item.thumbnail" style="width: 100%; height: 200px"></swiper-slide>
  </swiper>

</template>

<script setup>
import {Swiper,SwiperSlide} from "swiper/vue";
import {Navigation,Pagination,Scrollbar} from "swiper";
import {getCurrentInstance, onMounted, reactive} from "vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
  prdList.list.push(...res.data.products.slice(0,5));
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
