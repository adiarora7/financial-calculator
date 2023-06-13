'use client'
import NPVCalculator from "@/app/components/npv"
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
              <NPVCalculator/>
              <p>Fill in the first 3 values and the result will be displayed in the CAGR value line.
              </p>
            </div>
            <div className="description">
              <h2>NPV - Net Present Value Calculator</h2>
              <br/>
              <p>NPV stands for Net Present Value, which is a financial metric that is widely used in capital budgeting and investment planning. NPV measures the profitability of a project or investment. It's the sum of the present values of incoming and outgoing cash flows over a period of time.

                  Outgoing cash flows (often called costs) are usually treated as negative and incoming cash flows (returns) as positive.
                  <br/><br/>
                  It's important to note that NPV accounts for the time value of money - a concept that a dollar today is worth more than a dollar in the future due to its earning capacity.
                  <br/><br/>
                  The formula for calculating NPV is:
                  <br/><br/>
                  NPV = ∑ [Ct / (1+r)^t] - C0
                  <br/><br/>
                  Where:
                  <br/><br/>
                  - Ct = net cash inflow during the period t<br/>
                  - r = discount rate, or the rate of return required from the investment<br/>
                  - t = number of time periods<br/>
                  - C0 = initial investment<br/>
                  <br/>
                  If the NPV of a prospective project is positive, it would be considered a good investment. If negative, the project would be deemed a bad investment. If the NPV is zero, the project is expected to add no monetary value.
                  <br/><br/>
                  Let's consider an example:
                  <br/><br/>
                  Suppose you're considering an investment that will cost $1,000 (C0) today, and is expected to yield $500 at the end of the first year (C1) and $600 at the end of the second year (C2). We'll use a discount rate (r) of 5%.
                  <br/><br/>
                  The NPV of the investment would be calculated as follows:
                  <br/><br/>
                  NPV = [$500 / (1+0.05)^1] + [$600 / (1+0.05)^2] - $1,000
                  <br/><br/>
                  = $476.19 + $541.17 - $1,000
                  <br/><br/>
                  = $17.36
                  <br/><br/>
                  Since the NPV is positive, this would be considered a good investment according to NPV analysis. The investment is expected to generate $17.36 more than the cost adjusted for the time value of money.
              </p>
            </div>
          </div>
        </div>

    </main>
  )
}