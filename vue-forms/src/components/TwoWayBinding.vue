<template>
  <p>
    First<br />
    <input v-model="inputValue" />
  </p>
  <p>
    Second<br />
    <input v-model="inputValue" />
  </p>
  <p>
    <button @click="inputValue = 'Clicked on button'">Set input value</button>
  </p>
  <p>
    {{ inputValue }}
  </p>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TwoWayBinding',
  setup () {
    const inputValue = ref('')
    return {
      inputValue
    }
  }
}
</script>
