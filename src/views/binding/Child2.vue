<template>
  <v-card class="pa-2" variant="outlined">
    <div class="text-h6">child 2</div>
    <div class="text-body-1">props</div>
    <v-text-field
      v-model="childData"
      label="name"
      required
    >
      <template v-slot:append>
        <v-icon color="red" @click="onClick">
          mdi-upload
        </v-icon>
      </template>
    </v-text-field>
  </v-card>

</template>

<script setup>
import {ref} from "vue";
const props = defineProps({text: String, type: String})
const childData = ref(props.text);

const emit = defineEmits(["updateChild"])

const onClick = () =>{
  emit('updateChild', childData.value);
}

</script>
