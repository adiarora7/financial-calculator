'use client'
import CAGRCalculator from "@/app/components/cagr"
import Link from "next/link"
import Header2 from "@/app/components/header2"

export default function Home() {
  return (
    <main>
      <Header2/>
      <div className="calculator-page">
        <Link href="/"><h3 id="back-arrow"
            >&larr;Back to calculators</h3>
        </Link>
        <div className="body">
          <div className="left-side">
            <CAGRCalculator/>
            <h3>How to use:</h3>
            <p>Fill in the first 3 values and the result will be displayed in the CAGR value line.

            </p>
          </div>
          <div className="description">
            <h2>CAGR(Compound Annual Growth Rate) Calculator</h2>
            <br/>
            <p>
            CAGR stands for Compound Annual Growth Rate. It's a measure used primarily in finance to represent the smoothed annualized gain of an investment over a specified time period.
              <br/><br/>
              The formula to calculate CAGR is:
              <br/><br/>
              **CAGR = (Ending Value / Beginning Value) ^ (1 / Number of Years) - 1**
              <br/><br/>
              In other words, CAGR computes the constant annual growth rate of an investment, assuming that the investment has been compounding over the time period.

              This is different from simple annual growth rates, which don't consider compounding.

              It's important to note that CAGR doesn't reflect investment risk. It's merely a descriptive statistic that provides a simplified rate of growth over multiple periods.
              <br/><br/>
              Let's say, for instance, you made an investment in a mutual fund. At the start of year 1, your investment was worth $1,000. By the end of year 3, your investment had grown to $1,331.
              <br/><br/>
              Let's calculate the CAGR.
              <br/><br/>
              Here's how you'd do that:
              <br/><br/>
              CAGR = ($1,331 / $1,000) ^ (1 / 3) - 1
              <br/><br/>
              First, calculate the ratio of the ending value to the beginning value, which in this case is $1,331 / $1,000 = 1.331.
              <br/><br/>
              Next, raise this ratio to the power of one divided by the number of years. In this case, that's 1/3 or about 0.3333. The result is 1.331 ^ 0.3333 = 1.1.
              <br/><br/>
              Finally, subtract 1 from the result to find the CAGR. In this case, 1.1 - 1 = 0.1 or 10%.
              <br/><br/>
              So, the compound annual growth rate for your investment over the three-year period was 10%.
            </p>

          </div>
        </div>
      </div>

    </main>
  )
}
