import Link from "next/link";

export default function Header(){
    return(
        <header>
            <div className="header__bg"></div>
            <div className="resize">
                <Link href="/"><h1>Mage.</h1></Link>
                <h3>Financial Calculator</h3>
                <p>Your one-stop destination for a collection of calculators designed to assist you in various areas of your life. Whether you need help with financial planning, scientific calculations, culinary endeavors, or everyday tasks, we've got you covered. Discover the power of precision with our wide range of calculators.</p>
            </div> 
        </header>
    );
}