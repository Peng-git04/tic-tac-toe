<<<<<<< HEAD
import { ref } from "vue";
import type { Player } from "../types/game";

export function useGame() {
  const board = ref<(Player | null)[]>(Array(9).fill(null));
  const isXTurn = ref(true);
  const winner = ref<Player | null>(null);

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  function isDraw(): boolean {
    return !winner.value && board.value.every((cell) => cell !== null);
  }

  function checkWinner() {
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        board.value[a] &&
        board.value[a] === board.value[b] &&
        board.value[a] === board.value[c]
      ) {
        winner.value = board.value[a];
        return;
      }
    }
  }

  function handleClick(index: number) {
    if (board.value[index] || winner.value || isDraw()) return;
    board.value[index] = isXTurn.value ? "X" : "O";
    isXTurn.value = !isXTurn.value;
    checkWinner();
  }

  function resetGame() {
    board.value = Array(9).fill(null);
    isXTurn.value = true;
    winner.value = null;
  }

  return { board, isXTurn, winner, isDraw, handleClick, resetGame };
=======
import { ref } from "vue";
import type { Player } from "../types/game";

export function useGame() {
  const board = ref<(Player | null)[]>(Array(9).fill(null));
  const isXTurn = ref(true);
  const winner = ref<Player | null>(null);

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  function isDraw(): boolean {
    return !winner.value && board.value.every((cell) => cell !== null);
  }

  function checkWinner() {
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        board.value[a] &&
        board.value[a] === board.value[b] &&
        board.value[a] === board.value[c]
      ) {
        winner.value = board.value[a];
        return;
      }
    }
  }

  function handleClick(index: number) {
    if (board.value[index] || winner.value || isDraw()) return;
    board.value[index] = isXTurn.value ? "X" : "O";
    isXTurn.value = !isXTurn.value;
    checkWinner();
  }

  function resetGame() {
    board.value = Array(9).fill(null);
    isXTurn.value = true;
    winner.value = null;
  }

  return { board, isXTurn, winner, isDraw, handleClick, resetGame };
>>>>>>> 79a1303fd1a495f4a2d958a3575a656d7de44fdd
}