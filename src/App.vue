<template>
  <div>
    <router-view />
    <footer />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Home from '../src/components/Home.vue'
import Footer from '../src/components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home,
    Footer
  }
})
</script>
