<template>
  <p>
    <label>
      <input
        type="radio" name="jsFlavour" value="vanilla" v-model="jsFlavour"
      />
      Vanilla
    </label>
  </p>
  <p>
    <label>
      <input type="radio" name="jsFlavour" value="react" v-model="jsFlavour" />
      React
    </label>
  </p>
  <p>
    <label>
      <input type="radio" name="jsFlavour" value="vue" v-model="jsFlavour" />
      Vue
    </label>
  </p>
  <p>{{ jsFlavour }}</p>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'RadioInput',
  setup () {
    const jsFlavour = ref('vanilla')
    return {
      jsFlavour
    }
  }
}
</script>

<style scoped>

</style>
