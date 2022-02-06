<template>
  <h1>Income calculator</h1>
  <p>
    Monthly salary:<br />
    <input type="number" v-model.number="monthlySalary" />
  </p>
  <p>
    Spouse salary:<br />
    <input type="number" v-model.number="spouseSalary" />
  </p>
  <p>
    Annual salary:<br />
    {{ annualIncome }}
  </p>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'SalaryCalculator',
  setup () {
    const monthlySalary = ref(0)
    const spouseSalary = ref(0)
    const annualIncome = computed(() => (monthlySalary.value + spouseSalary.value) * 12)

    return {
      monthlySalary,
      spouseSalary,
      annualIncome
    }
  }
}
</script>

<style scoped>

</style>
