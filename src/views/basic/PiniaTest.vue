<template>

  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="plusCount">pinia count test</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        name :  {{name}} <br/>
        count : {{count}} <br/>
        doubleCount: {{doubleCount}}
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import {useCounterStore} from "@/store/countStore";

const countStore = useCounterStore()
// 변수를 구조분해해서 받는순간 반응형이 사라짐
// state를 감지하려면 storeToRefs 사용해야함
const { name, count, doubleCount } = storeToRefs(countStore)
const { increment } = countStore
const plusCount = () =>{
  increment()
}
</script>
