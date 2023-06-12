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
        <div className='cards-flex-row'>
          <Card
            className='card'
            isPressable
            isHoverable
            variant="bordered"
            css={{ mw: "400px", height:"100px"}}
          >
            <Card.Body>
              <Link href="/calculators/cagr"><Text>CAGR</Text></Link>
            </Card.Body>
          </Card>
          <Spacer x={2}/>
          <Card
            className='card'
            isPressable
            isHoverable
            variant="bordered"
            css={{ mw: "400px" }}
          >
            <Card.Body>
              <Link href="/calculators/npv"><Text>NPV</Text></Link>
            </Card.Body>
          </Card>
          <Spacer x={2} />
          <Card
            className='card'
            isPressable
            isHoverable
            variant="bordered"
            css={{ mw: "400px" }}
          >
            <Card.Body>
              <Link href="/calculators/cagr"><Text>MVA</Text></Link>
            </Card.Body>
          </Card>
        </div>
        <div className='cards-flex-row'>
          <Card
            className='card'
            isPressable
            isHoverable
            variant="bordered"
            css={{ mw: "400px", height:"100px" }}
          >
            <Card.Body>
              <Link href="/calculators/cagr"><Text>Capital Gains Yield</Text></Link>
            </Card.Body>
          </Card>
          <Spacer x={2} />
          <Card
            className='card'
            isPressable
            isHoverable
            variant="bordered"
            css={{ mw: "400px"}}
          >
            <Card.Body>
              <Link href="/calculators/cagr"><Text>Jensens Alpha</Text></Link>
            </Card.Body>
          </Card>
          <Spacer x={2} />
          <Card
            className='card'
            isPressable
            isHoverable
            variant="bordered"
            css={{ mw: "400px"}}
          >
            <Card.Body>
              <Link href="/calculators/cagr"><Text>Sharpe Ratio</Text></Link>
            </Card.Body>
          </Card>
        </div>
      </div> 
    </main>
  )
}
