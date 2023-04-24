<template>
  <v-divider class="mt-5 mb-5"></v-divider>

  <div class="text-blue">
    <slot name="title"></slot>
  </div>
  <div class="mt-1 mb-1">
    <slot name="desc"></slot>
  </div>
  <v-card class="pa-2" variant="outlined">
    <slot></slot>
  </v-card>
</template>

<script setup>
</script>
