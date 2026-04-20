<template>
  <div class="board">
    <Cell
      v-for="(cell, index) in board"
      :key="index"
      :value="cell"
      @click="handleClick(index)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Player } from "../types/game";
import Cell from "./Cell.vue";

defineProps<{
  board: (Player | null)[];
}>();

const emit = defineEmits<{ (e: "click", index: number): void }>();

function handleClick(index: number) {
  emit("click", index);
}
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 8px;
}
</style>