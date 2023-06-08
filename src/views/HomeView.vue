<template>
  <div class="home">
    <div class="count">
      {{ counterStore.count }}
    </div>
    <div class="buttons">
      <button @click="counterStore.increment">+</button> 
      <button @click="counterStore.decrement">-</button>
    </div>
    <hr />
    <div>
      This number is: {{ counterStore.oddOrEven }}
    </div>
    <hr />
    <div>
      <h1>Edit Counter</h1>
      <input v-model="counterStore.count" type="number">
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/CounterStore'
const counterStore = useCounterStore();

const count = ref(0)
const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
const evenOrOdd = computed(() => count.value % 2 === 0 ? 'even' : 'odd')
</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons button{
  font-size: 40px;
  margin: 10px;
}
</style>