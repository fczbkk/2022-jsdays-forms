import { useState } from 'react'

export function IncomeCalculator () {
  const [monthlyIncome, setMonthlyIncome] = useState(0)
  const [spouseIncome, setSpouseIncome] = useState(0)

  const annualIncome = (monthlyIncome + spouseIncome) * 12

  return (
    <>
      <h1>Income calculator</h1>

      <p>
        Monthly salary:<br />
        <input
          type="number" value={monthlyIncome}
          onChange={(event) => setMonthlyIncome(Number(event.target.value))}
        />
      </p>
      <p>
        Spouse salary:<br />
        <input
          type="number" value={spouseIncome}
          onChange={(event) => setSpouseIncome(Number(event.target.value))}
        />
      </p>
      <p>
        Annual income:<br />
        {annualIncome}
      </p>
    </>
  )
}
