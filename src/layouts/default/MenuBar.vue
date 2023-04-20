<template>
  <v-app-bar
    color="primary"
    prominent
  >
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Vue3 study</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-home" @click="router.push('/');"></v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
  >
    <v-list>
      <v-list-item v-for="item in items" :key="item.id" @click="onClickMenu(item)">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script setup>
import {ref} from "vue";
import router from "@/router";
const drawer  = ref(false)
const items = ref([
  { id: 1, title: 'life cycle', path:'/lifeCycle' },
  { id: 2, title: 'menu 2', path:'/menu2' }
])

const onClickMenu = (item) => {
  drawer.value = false;
  router.push(item.path);
}
  //
</script>
