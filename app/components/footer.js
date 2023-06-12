import Link from "next/link";

export default function Footer(){
    return(
        <div className="footer">
            <p>&copy;mage.</p>
            <p>Made for learning - Inspired by <a target="blank" href={"https://www.omnicalculator.com/"} style={{textDecoration:"underline"}}>OMNI Calculator</a></p>
            <p><Link href={""}>Github</Link></p>
        </div>
        )
}