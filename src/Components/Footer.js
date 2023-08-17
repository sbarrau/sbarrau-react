import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

function Footer(){
    return(
        <footer className="fixed bottom-0 bg-black text-white  text-xs p-3  w-full">
        <div className="flex content-between">  
            <div className="flex-1">
                <FontAwesomeIcon icon={faEnvelope} className='pr-2' style={{color: "#ffffff"}}/>
                sebas.barrau@hotmail.com
            </div>
            <div className=" justify-items-end">
                <a href="https://www.linkedin.com/in/sebasti%C3%A1n-barrau-76a07692">
                <FontAwesomeIcon icon={faLinkedin} className='pr-2' style={{color: "#ffffff"}} />
                </a>
                <a href="https://wa.me/54291154186714?text=I'm%20interested%20in%20your%20work">
                <FontAwesomeIcon icon={faWhatsapp} className='pr-2' style={{color: "#ffffff"}} />
                </a>
            </div>
        </div> 
        </footer>
    )
}

export default Footer