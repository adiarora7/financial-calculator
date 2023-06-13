'use client'
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function NPVCalculator() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [cashFlows, setCashFlows] = useState([]);
  const [discountRate, setDiscountRate] = useState('');
  const [npv, setNPV] = useState(0);

  const calculate = () => {
    const initial = parseFloat(initialInvestment);
    const flows = cashFlows.map((flow) => parseFloat(flow));
    const rate = parseFloat(discountRate);

    if (initial && flows.every((flow) => !isNaN(flow)) && rate) {
      const npvValue = flows.reduce((acc, flow, index) => {
        return acc + flow / Math.pow(1 + rate, index + 1);
      }, -initial);
      setNPV(npvValue.toFixed(2));
    } else {
      setNPV(0);
    }
  };

  useEffect(() => {
    calculate();
  }, [initialInvestment, cashFlows, discountRate]);

  const handleFlowChange = (index, value) => {
    const updatedFlows = [...cashFlows];
    updatedFlows[index] = value;
    setCashFlows(updatedFlows);
  };

  const addFlow = () => {
    setCashFlows([...cashFlows, '']);
  };

  return (
    <div className='calculator'>
      <label>
        Initial Investment:
        <div className='input'>
          <input
            pattern="[0-9]*"
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
          />
          <span>$</span>
        </div>
      </label>
      <hr />
      <label>
        Cash Flows:
        <div>
          {cashFlows.map((flow, index) => (
            <div className='input' key={index}>
              <input
                pattern="[0-9]*"
                type="number"
                value={flow}
                onChange={(e) => handleFlowChange(index, e.target.value)}
              />
              <span>$</span>
            </div>
          ))}
          <button onClick={addFlow}>Add Flow</button>
        </div>
      </label>
      <hr />
      <label>
        Discount Rate (%):
        <input
          pattern="[0-9]*"
          type="number"
          value={discountRate}
          onChange={(e) => setDiscountRate(e.target.value)}
          style={{
            width: '60%',
            paddingRight: '5%'
          }}
        />
      </label>
      <hr />
      <div className='result'>
        <label>NPV:</label> {npv}
      </div>
    </div>
  );
}
