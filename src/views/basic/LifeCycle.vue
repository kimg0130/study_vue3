<template>
  <v-img
    src="@/assets/lifecycle.png"
    style="width: 100%"
  />
</template>

<script setup>
import {
  onBeforeMount,
  onBeforeUpdate,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated
} from 'vue';


onBeforeMount(()=>{
  console.log('onBeforeMount call');
})
onMounted(()=>{
  console.log('onMounted call');
  // debugger;
})

onBeforeUpdate(()=>{
  console.log('onBeforeMount call');
})
onUpdated(()=>{
  console.log('onUpdated call');
})

onUnmounted(()=>{
  console.log('onUnmounted call');
})

onErrorCaptured(()=>{
  console.log('onErrorCaptured call');
})

onRenderTracked(()=>{
  console.log('onRenderTracked call');
  debugger;
})

onRenderTriggered(()=>{
  console.log('onRenderTriggered call');
  debugger;
})


</script>
