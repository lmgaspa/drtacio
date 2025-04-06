<template>
  <MenuOnlyView />
  <SideBarMenu />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuOnlyView from './components/MenuOnlyView.vue'

export default defineComponent({
  name: 'App',
  components: {
    MenuOnlyView,
  }
})
</script>
