<template>
  <SummaryCard>
    <template #title>
      Data 바인딩
    </template>
    Vue3에서 양방향 바인딩을 위해서는 props 대신 v-model을 사용한다!<br/>
    props로 넘긴데이터는 단방향임!
  </SummaryCard>

  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="text-blue">[양방향] v-model</div>
  <div class="mt-1">  value1 : {{value1}}</div>
  <Child1 v-model="value1"/>

  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="text-blue">[단방향] props</div>
  <div class="mt-1"> value2 : {{value2}}</div>
  <Child2 :text="value2" @updateChild="updateChild"/>

  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="text-blue">v-model 여러개 지정 가능</div>
  <div class="mt-1">name : {{name}}</div>
  <div class="mt-1">age : {{age}}</div>
  <Child3 v-model:name="name" v-model:age="age"/>

</template>

<script setup>
import SummaryCard from "@/components/common/SummaryCard.vue";

import Child1 from "@/views/data/Child1.vue";
import Child2 from "@/views/data/Child2.vue";
import Child3 from "@/views/data/Child3.vue";

import {ref} from "vue";
const value1 = ref('')
const value2 = ref('기본 값')

const name = ref('jiyeon')
const age = ref(41)

const updateChild = (data) => {
  console.log(data);
  value2.value = data;
}
</script>

