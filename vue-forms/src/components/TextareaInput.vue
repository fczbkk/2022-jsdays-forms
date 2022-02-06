<template>
<p>
  <textarea v-model="content" />
</p>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TextareaInput',
  setup () {
    const content = ref('default content of textarea')
    return {
      content
    }
  }
}
</script>

<style scoped>

</style>
