<template>
  <v-card
    class="mx-auto"
    variant="tonal"
  >
    <v-card-item>
      <div>
        <div class="text-h6 mb-1">
          <slot name="title"></slot>
        </div>
        <div class="text-caption">
          <slot></slot>
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>
<script setup>
</script>

