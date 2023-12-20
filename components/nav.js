import {React,useEffect,useState} from "react";
import Image from "next/image";
import { BsFillMoonStarsFill, BsBrightnessHighFill } from "react-icons/bs";
import Logo from "../public/logo.png";


function Nav() {
    const [darkMode, setDarkMode] = useState(false);
  const [header,setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.screenY>30){
      setHeader(true)
    }else{
      setHeader(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', scrollHeader)
    return ()=>{
      window.addEventListener('scroll', scrollHeader)
    }
  },[])
    return(
        <div className={header ? "fixed w-[100%] bg-amber-500":"bg-transparent"} >
        <nav className="py-2 mb-12 flex justify-between dark:text-white">
            <Image src={Logo} height={50} width={50} />
            {/* <h1 className="font-burtons text-xl">Portfolio</h1> */}

            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsBrightnessHighFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li>

                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 dark:bg-gradient-to-r dark:from-violet-900 dark:to-indigo-400 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
    )
}
export default Nav