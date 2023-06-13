'use client'
import { Card, Spacer, Text } from '@nextui-org/react'
import Link from 'next/link'
import Header from './components/header'

export default function Home() {

  return (
    <main>
      <Header/>
       <div className="homepage">
        <h2>General Investment Calculators</h2>
        <div className='cards'>
          <div className='cards-flex-row'>
            <Link href="/calculators/cagr" className='card'>
                <p>CAGR</p>
            </Link>
            <Link href="/calculators/cagr" className='card'>
                <p>MVA</p>
            </Link>
            <Link href="/calculators/cagr" className='card'>
                <p>NPV</p>
            </Link>
          </div>
          <div className='cards-flex-row'>
            <Link href="/calculators/cagr" className='card'>
                <p>Jensens</p>
            </Link>
            <Link href="/calculators/cagr" className='card'>
                <p>Sharpe Ratio</p>
            </Link>
            <Link href="/calculators/cagr" className='card'>
                <p>Capital Gains Yield</p>
            </Link>
          </div>
        </div>
      </div> 
    </main>
  )
}
