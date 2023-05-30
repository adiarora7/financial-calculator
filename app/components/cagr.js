"use client"
import { Siemreap } from 'next/font/google';
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function CAGRCalculator(){
    const [initialValue, setInitialValue] = useState('');
    const [finalValue, setFinalValue] = useState('');
    const [years, setYears] = useState('');
    const [cagr, setCAGR] = useState(0);

    const [savedCAGR, setSavedCAGR] = useState([]);
    const [investmentName, setInvestmentName] = useState('');
  
    const calculate=()=>{
      const initial = parseFloat(initialValue);
      const final = parseFloat(finalValue);
      const n = parseFloat(years);

  

      if (initial && final && n) {
        const cagrValue = ((final / initial) ** (1 / n) - 1) * 100;
        setCAGR(cagrValue.toFixed(2));
      } else {
        setCAGR(0);
      }
    }

    const handleSave = () => {
        if (cagr && investmentName) {
            const savedInvestment = {
            name: investmentName,
            cagr: cagr
            };
        setSavedCAGR(prevSavedCAGR => [...prevSavedCAGR, savedInvestment]);
        setInvestmentName('');
        setInitialValue('');
        setFinalValue('');
        setYears('');
        setCAGR(0);
        }

    };


    const handleReset = () => {
        setSavedCAGR([]);
    }
    

    useEffect(() => {
        calculate();
      }, [initialValue, finalValue, years]);
  
    return (
      <div className='container' style={{ minWidth:"30rem", maxWidth:'30rem'}}>
        <h2 style={{paddingBottom:"1.5rem", color:"#004687"}}>CAGR Calculator</h2>
        <label>
          Investment Name:
          <div className='input'>
            <input
                type="text"
                value={investmentName}
                onChange={(e) => setInvestmentName(e.target.value)}
            />
          </div>
        </label>
        <br />
        <label>
          Initial Value:
          <div className='input'>
            <input
                type="number"
                value={initialValue}
                onChange={(e) => setInitialValue(e.target.value)}
            />
            <span>$</span>
          </div>
        </label>
        <br />
        <label>
          Final Value:
          <div className='input'>
            <input
                type="number"
                value={finalValue}
                onChange={(e) => setFinalValue(e.target.value)}
            />
            <span>$</span>
           </div>
        </label>
        <br />
        <label>
          Number of Years:
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            style={{width:'60%',
                    paddingRight:'5%'}}
          />
        </label>
        <br/>
        <div style={{fontSize:"1.2rem",display:"flex", justifyContent:"space-between"}}>
          <div>CAGR:</div><div>{cagr}%</div>  
        </div>
        
        <br/>
        <div className='buttons'>
            <button onClick={handleSave} style={{marginTop:"1rem", marginBottom:"1rem"}}>Save</button>
            <button onClick={handleReset} style={{marginTop:"1rem", marginBottom:"1rem"}}>Reset</button>
        </div>
        <h3 style={{color:"#444"}}>Saved CAGR values:</h3>
        <ul>
            {savedCAGR.map((investment, index) => (
            <li key={index}>
                Investment {index + 1}: {investment.name} - {investment.cagr}%
            </li>
            ))}
        </ul>
      </div>
    );
}
