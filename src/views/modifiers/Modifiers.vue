<template>
  <SummaryCard>
    <template #title>
      v-model modifiers
    </template>
    v-model 수식어(modifiers)
  </SummaryCard>

  <!--lazy-->
  <ExampleCard>
    <template #title>
      .lazy
    </template>

    <template #desc>
      change 이벤트 이후 데이터 동기화기능 <br/>
      기본 input에선 적용되나 v-text-field에서 적용안됨
    </template>

    <div class="text-body-1">v-model : {{val1}}</div>
    <input size="1" type="text" class="v-field__input" v-model="val1" style="background-color: rgb(233, 233, 233); width: 100%">
    <div class="text-body-1">v-model.lazy : {{val2}}</div>
    <input size="1" type="text" class="v-field__input" v-model.lazy="val2" style="background-color: rgb(233, 233, 233); width: 100%">

  </ExampleCard>


  <!--number-->
  <ExampleCard>
    <template #title>
      .number
    </template>

    <template #desc>
      사용자 입력이 자동으로 number 타입으로 형변환
    </template>

    <div class="text-body-1">age : {{age}}</div>
    <div class="text-body-1">typeof age : {{typeof age}}</div>
    <v-text-field
      v-model.number="age"
      label="age"
      required
    ></v-text-field>

  </ExampleCard>


  <!--trim-->
  <ExampleCard>
    <template #title>
      .trim
    </template>

    <template #desc>
      사용자가 입력한 내용에서 자동으로 앞뒤 공백을 제거
    </template>

    <div class="text-body-1">v-model ---|{{val3}}|--</div>
    <v-text-field
      v-model.trim="val3"
      required
    ></v-text-field>

  </ExampleCard>


</template>

<script setup>
import SummaryCard from "@/components/common/SummaryCard.vue";
import ExampleCard from "@/components/common/ExampleCard.vue";
import {ref} from "vue";

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')

const age = ref('11')

</script>

