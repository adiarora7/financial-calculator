import Image from 'next/image'
import CAGRCalculator from './components/cagr'

export default function Home() {

  return (
    <main>
      <br/>
      <CAGRCalculator/>
      <br/>
      <div className='main-text'>
        <p>The CAGR calculator is a useful tool for anyone 
          who wants to estimate the gain from an investment. 
         <br/><br/>
         To save an investments CAGR value, a name must be provided for the Investment Name.
         </p>
      </div>
    </main>
  )
}
