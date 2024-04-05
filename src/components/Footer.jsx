import logo from "../images/logo.png"
import {AiFillInstagram} from "react-icons/ai";

function Footer() {
    return (
        <footer
            className="footer items-center p-4 bg-[#76885B] text-neutral-content bottom-0 -z-10">
            <aside className="items-center grid-flow-col">
                <img src={logo} className="w-11"/>
                <p><strong>Kansa</strong> © 2024 - All rights reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://www.instagram.com/naupl_/">
                   <AiFillInstagram size={35}/>
                </a>
            </nav>
        </footer>
    )
}

export default Footer
