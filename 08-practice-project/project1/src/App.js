import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ResultTable from "./components/ResultTable/ResultTable";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  function resetHandler() {
    setUserInput(null);
  }

  const yearlyData = [];
  if (userInput !== null) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0;
    let investedCapital = currentSavings;

    // The below code calculates yearly results (total savings, interest etc.)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      investedCapital += yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form calculateHandler={calculateHandler} resetHandler={resetHandler} />
      <ResultTable result={yearlyData} />
    </div>
  );
}

export default App;
