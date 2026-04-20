<template>
  <div class="app">
    <h1>Tic Tac Toe</h1>

    <p class="status">
      <template v-if="winner">🏆 Vince: {{ winner }}</template>
      <template v-else-if="isDraw()">🤝 Pareggio!</template>
      <template v-else>Turno di: {{ isXTurn ? "X" : "O" }}</template>
    </p>

    <Board :board="board" @click="handleClick" />

    <button v-if="winner || isDraw()" class="reset" @click="resetGame">
      Gioca ancora
    </button>
  </div>
</template>

<script setup lang="ts">
import { useGame } from "./composables/useGame";
import Board from "./components/Board.vue";

const { board, isXTurn, winner, isDraw, handleClick, resetGame } = useGame();
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #1e1e2e;
  color: #cdd6f4;
  font-family: sans-serif;
  gap: 24px;
}
h1 {
  font-size: 2rem;
  margin: 0;
}
.status {
  font-size: 1.2rem;
  min-height: 1.5rem;
}
.reset {
  padding: 10px 24px;
  font-size: 1rem;
  background: #89b4fa;
  color: #1e1e2e;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
.reset:hover {
  background: #74c7ec;
}
</style>