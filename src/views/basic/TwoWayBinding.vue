<template>

    <v-card
      class="mx-auto"
      variant="tonal"
    >
      <v-card-item>
        <div>
<!--          <div class="text-overline mb-1">-->
<!--            OVERLINE-->
<!--          </div>-->
          <div class="text-h6 mb-1">
            양방향 바인딩
          </div>
          <div class="text-caption">
            Vue3에서 양방향 바인딩을 위해서는 props 대신 v-model을 사용한다!<br/>
            props로 넘긴데이터는 단방향임!
          </div>
        </div>
      </v-card-item>
<!--      <v-card-actions>-->
<!--        <v-btn variant="outlined">-->
<!--          Button-->
<!--        </v-btn>-->
<!--      </v-card-actions>-->
    </v-card>
    <div class="mt-10 text-h6">parent</div>
    <div>v-model value : {{value1}}</div>
    <child-v-model v-model="value1"/>

</template>

<script setup>
import ChildVModel from "@/views/basic/ChildVModel.vue";
import {ref} from "vue";
const value1 = ref('')
const value2 = ref('')
</script>

<style scoped>

</style>
