<template>
  <button class="cell" :class="{ taken: value }" @click="$emit('click')">
    {{ value }}
  </button>
</template>

<script setup lang="ts">
import type { Player } from "../types/game";

defineProps<{ value: Player | null }>();
defineEmits<{ (e: "click"): void }>();
</script>

<style scoped>
.cell {
  width: 100px;
  height: 100px;
  font-size: 2.5rem;
  font-weight: bold;
  background: #1e1e2e;
  color: #cdd6f4;
  border: 2px solid #45475a;
  cursor: pointer;
  transition: background 0.2s;
}
.cell:hover:not(.taken) {
  background: #313244;
}
.taken {
  cursor: default;
}
</style>