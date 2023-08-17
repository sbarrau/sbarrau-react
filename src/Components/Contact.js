import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFreeCodeCamp, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"


function Contact(){
    return(
      <div className="contact">
        <section class="py-3">
          <div class="container px-4 mx-auto">
          <div class="relative p-6 text-center bg-gray-500 rounded-xl">
          <img class="block mx-auto mb-5 w-28 h-28 rounded-full" src="https://media.licdn.com/dms/image/C4D03AQGoUS-uiPI1CA/profile-displayphoto-shrink_800_800/0/1660571351008?e=2147483647&v=beta&t=etCP7pYfwhcSndGCFB5b8yNjKNiYwVzeZGn9W7kXha4" alt="profile pic" />
          <h4 class="text-xl text-white font-bold mb-3">Sebastián Barrau</h4>
          <p class="text-gray-300 mb-3">Front-end Developer</p>
          <span class="inline-block px-2 py-1 mb-6 text-xs text-green-500 font-medium bg-teal-900 rounded-full">Engineer</span>

          <div class="flex flex-wrap items-center -mx-2">

          <div class="w-full sm:w-1/2 px-2 py-2 mb-2 sm:mb-0">
            <a class="flex px-2 py-3 items-center justify-center bg-gray-600 hover:bg-gray-700 text-sm leading-6 font-bold text-white rounded-xl transition duration-200"
               href="https://www.linkedin.com/in/sebasti%C3%A1n-barrau-76a07692">
              <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff"}} />
              <span class="ml-3">Linkedin</span>
            </a>
          </div>

          <div class="w-full sm:w-1/2 px-2 py-2 sm:mb-0">
            <a class="flex px-2 py-3 items-center justify-center bg-gray-600 hover:bg-gray-700 text-sm leading-6 font-bold text-white rounded-xl transition duration-200"
              href="https://www.freecodecamp.org/sebas-barrau">
              <FontAwesomeIcon icon={faFreeCodeCamp} style={{color: "#ffffff",}}/>  
              <span class="ml-3">Certifications</span>
            </a>
          </div>

          <div class="w-full sm:w-1/2 px-2 py-2 sm:mb-0">
            <a class="flex px-2 py-3 items-center justify-center bg-gray-600 hover:bg-gray-700 text-sm leading-6 font-bold text-white rounded-xl transition duration-200"
              href="mailto:sebas.barrau@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
              <span class="ml-3">sebas.barrau@hotmail.com</span>
            </a>
          </div>

          <div class="w-full sm:w-1/2 px-2 py-2 sm:mb-0">
            <a class="flex px-2 py-3 items-center justify-center bg-gray-600 hover:bg-gray-700 text-sm leading-6 font-bold text-white rounded-xl transition duration-200"
              href="https://wa.me/54291154186714?text=I'm%20interested%20in%20your%20work">
            
            <FontAwesomeIcon icon={faWhatsapp} />
              <span class="ml-3">Text me</span>
            </a>
          </div>

          <div class="w-full  px-2 py-2 sm:mb-0">
            <a class="flex px-2 py-3 items-center justify-center bg-gray-600 hover:bg-gray-700 text-sm leading-6 font-bold text-white rounded-xl transition duration-200"
              href="https://github.com/sbarrau">
            
              <FontAwesomeIcon icon={faGithub} />
              <span class="ml-3">Some of my projects (so far)</span>
            </a>
          </div>

        </div>
        </div>
        </div>
        </section>
            
      </div>
    )
}

export default Contact