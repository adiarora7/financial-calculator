import Link from "next/link";

export default function Header(){
    return(
        <header>
            <div className="header__bg">
                <span></span>
            </div>
            <div className="resize">
                <Link href="/"><h1>Mage.</h1></Link>
                <h3>Financial Calculator</h3>
                <p>Your one-stop destination for a collection of calculators designed to 
                    assist you in various areas of finance. From 
                    business planning & investments to taxes & mortgages,
                    we've got you covered. Discover the power of 
                    precision with our wide range of calculators.
                    <br/><br/>
                    Currently a work in progress; we're adding calculators daily!
                </p>
            </div> 
        </header>
    );
}