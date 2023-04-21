<template>
  <v-card class="pa-2" variant="outlined">
    <div class="text-h6">child 1</div>
    <div class="text-body-1">v-model 이용 computed get(), set() 이용</div>
    <v-text-field
      v-model="selectedValue"
      label="name"
      required
    >
    </v-text-field>
  </v-card>

</template>

<script setup>
import {computed} from "vue";
const props = defineProps({modelValue: String, type: String})
const emit = defineEmits(["update:modelValue"])

const selectedValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit("update:modelValue", value)
  }
})
</script>
