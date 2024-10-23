import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import React, { useState } from "react";

function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setuserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,       // + is used to convert the string to int.
      };
    });
  };

  console.table(userInput);

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!inputIsValid && <p className="center">Please Enter a valid Duration!</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
