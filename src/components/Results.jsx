import React from 'react'
import {calculateInvestmentResults, formatter} from '../util/investment.js'

const Results = ({userInput}) => {
    // console.table(userInput);
    
    const result = calculateInvestmentResults(userInput);

    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

    
    console.table(result);
  return (
    <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intrest (Year)</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {result.map((yearData)=>{
                const totalIntreset = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalIntreset;
                return <tr id={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalIntreset)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
  )
}

export default Results