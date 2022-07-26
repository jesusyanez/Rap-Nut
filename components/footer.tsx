import { BsFillSpeakerFill, BsGithub } from "react-icons/bs";

import { AiFillHeart } from "react-icons/ai";
const Footer =() => {
    return (
      <div>

        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
          <div className="items-center grid-flow-col">
            <BsFillSpeakerFill className="text-2xl"/>
            <p>Rap Geek - YouTube Rap Beat Randomizer <br /><a href="https://twitter.com/_aesap">Made by Jesus Yanez</a></p>
          </div> 
        </footer>
      </div>
    );
  }
  

export default Footer
