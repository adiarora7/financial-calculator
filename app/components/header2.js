import Link from "next/link";

export default function Header2(){
    return(
        <header className="header2">
            <div className="header__bg2"></div>
            <div className="resize">
                <Link href="/"><h1>Mage.</h1></Link>
                <h3>Financial Calculator</h3>
            </div> 
        </header>
    );
}