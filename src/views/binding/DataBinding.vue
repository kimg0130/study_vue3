<template>

    <v-card
      class="mx-auto"
      variant="tonal"
    >
      <v-card-item>
        <div>
          <div class="text-h6 mb-1">
            Data 바인딩
          </div>
          <div class="text-caption">
            Vue3에서 양방향 바인딩을 위해서는 props 대신 v-model을 사용한다!<br/>
            props로 넘긴데이터는 단방향임!
          </div>
        </div>
      </v-card-item>
    </v-card>
    <div class="mt-10 text-h6">parent</div>
    <div class="mt-5">[양방향] v-model value1 : {{value1}}</div>
    <child-1 v-model="value1"/>
    <div class="mt-5">[단방향] props value2 : {{value2}}</div>
    <child-2 :text="value2" @updateChild="updateChild"/>

</template>

<script setup>
import Child1 from "@/views/binding/Child1.vue";
import Child2 from "@/views/binding/Child2.vue";
import {ref} from "vue";
const value1 = ref('')
const value2 = ref('기본 값')

const updateChild = (data) => {
  console.log(data);
  value2.value = data;
}
</script>

