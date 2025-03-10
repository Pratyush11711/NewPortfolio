import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";

export default function Footer(){
    return(
        <footer className=" w-full mb-[100px] md:mb-5 pb-10" id="contact">
        <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Ready to take <span className="text-purple">your</span> digital presence to next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let's discuss how I can help you achieve your goals.</p>
        <a href="mailto:pratyush.epi.spn117@gmail.com"><MagicButton title="Let's get in touch" icon={<FaLocationArrow/>} position="right"/></a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Pratyush Gupta</p>
        <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((profile)=>(
            <a href={profile.link} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300" key={profile.id}>
            <img src={profile.img} alt=""
            width={20} height={20}/>
            </a>
        ))}
        </div>
        </div>
        </footer>
    )
}