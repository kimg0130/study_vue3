<template>
  <v-card
    class="mx-auto"
    variant="tonal"
  >
    <v-card-item>
      <div>
        <div class="text-h6 mb-1">
          v-model modifiers
        </div>
        <div class="text-caption">
          v-model 수식어(modifiers)
        </div>
      </div>
    </v-card-item>
  </v-card>

  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="text-blue">.lazy</div>
  <div class="mt-1 mb-1"> change 이벤트 이후 데이터 동기화기능</div>
  <div class="mt-1 mb-1"> 기본 input에선 적용되나 v-text-field에서 적용안됨</div>
  <v-card class="pa-2" variant="outlined">
    <div class="text-body-1">v-model : {{val1}}</div>
    <input size="1" type="text" class="v-field__input" v-model="val1" style="background-color: rgb(233, 233, 233); width: 100%">
    <div class="text-body-1">v-model.lazy : {{val2}}</div>
    <input size="1" type="text" class="v-field__input" v-model.lazy="val2" style="background-color: rgb(233, 233, 233); width: 100%">
  </v-card>

  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="text-blue">.number</div>
  <div class="mt-1 mb-1"> 사용자 입력이 자동으로 number 타입으로 형변환</div>
  <v-card class="pa-2" variant="outlined">
    <div class="text-body-1">age : {{age}}</div>
    <div class="text-body-1">typeof age : {{typeof age}}</div>
    <v-text-field
      v-model.number="age"
      label="age"
      required
    ></v-text-field>
  </v-card>

  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="text-blue">.trim</div>
  <div class="mt-1 mb-1"> 사용자가 입력한 내용에서 자동으로 앞뒤 공백을 제거 </div>
  <v-card class="pa-2" variant="outlined">
    <div class="text-body-1">v-model ---|{{val3}}|--</div>
    <v-text-field
      v-model.trim="val3"
      required
    ></v-text-field>
  </v-card>

  <v-divider class="mt-5 mb-5"></v-divider>

</template>

<script setup>

import {ref} from "vue";

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const age = ref('11')

</script>

