import Image from "next/image"
import Link from "next/link"
import { BsFillSpeakerFill } from "react-icons/bs";
import logo from "../public/logo.png"

const Navbar =() => {
    return (
      <div>
       <div className="navbar bg-neutral">
          <div className="flex-1">
            <Link href="/">
              <a className="btn btn-ghost normal-case text-2xl">
                <BsFillSpeakerFill className="text-2xl"/> 
                <p className="ml-2">Rap Geek</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
export default Navbar

function handleClick(arg0: string): void {
  throw new Error("Function not implemented.");
}
