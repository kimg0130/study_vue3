<template>
  <v-card class="pa-2" variant="outlined">
    <div class="text-h6">child v-model</div>
    <v-text-field
      v-model="$props.modelValue"
      :counter="10"
      label="name"
      required
    >
      <template v-slot:append>
        <v-icon color="red" @click="onClick">
          mdi-plus
        </v-icon>
      </template>
    </v-text-field>
  </v-card>

</template>

<script setup>
// const props = defineProps({
//   modelValue: String
// })

const emit = defineEmits(['update:modelValue'])
const onClick = (value) => {
  emit('update:modelValue', value)
}
</script>
