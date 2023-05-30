import Image from 'next/image'
import CAGRCalculator from './components/cagr'

export default function Home() {

  return (
    <main>
      <br/>
      <CAGRCalculator/>
      <br/>
      <div className='main-text'>
        <p>The CAGR calculator is a useful tool for anyone who wants to estimate the gain from an investment. This application bases its calculations on the Compound Annual Growth Rate formula (CAGR formula). If you know how to calculate the growth rate, you can determine the profit of your investment over a particular period. 
         <br/><br/>
         *To save an investments CAGR value, a name must be provided for the Investment Name.
         <br/>
         </p>
      </div>
    </main>
  )
}
