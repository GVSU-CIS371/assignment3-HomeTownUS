<template>
  <div class="syrup" :style="{backgroundColor: beverageStore.currentSyrup.color}"></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from '../stores/beverageStore';
const beverageStore = useBeverageStore();
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
