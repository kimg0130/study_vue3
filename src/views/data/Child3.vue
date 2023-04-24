<template>
  <v-card class="pa-2" variant="outlined">
    <div class="text-h6">child 3</div>
    <v-text-field
      v-model="name"
      @input="inputChange($event, 'name')"
      label="name"
      required
    ></v-text-field>

<!--    binding시 자동으로 number형 변환-->
    <v-text-field
      v-model.number="age"
      @input="inputChange($event, 'age')"
      label="age"
      required
    ></v-text-field>
  </v-card>

</template>

<script setup>
import {ref} from "vue";
const props = defineProps({
  name: String,
  age: Number
})

const name = ref(props.name)
const age = ref(props.age)

const emit = defineEmits(["update:name", "update:age"])
const inputChange = (event, target) =>{
  if(target === 'name')
    emit('update:name', event.target.value);
  else
    emit('update:age', event.target.value);
}

</script>
