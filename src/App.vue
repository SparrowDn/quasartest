<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import IndexPage from './pages/IndexPage.vue';

export default defineComponent({
  name: 'App',
  title: 'pages/IndexPage.vue'
})
</script>
