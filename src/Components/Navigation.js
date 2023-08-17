import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import {  Link } from "react-router-dom";
import '../index.css';


function Navigation(){
const [ShowMenu, setShowMenu]=useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };


let menu = <div className='fixed bg-white top-0 left-0 w-0 h-full z-50 shadow '> </div>
let menuMask = <div className='bg-gray-300 bg-opacity-75 fixed top-0 left-0 h-full w-0 z-50 transition-all duration-500'></div>


if(ShowMenu){

    menu= 
    <div 
    className='fixed bg-white top-0 left-0 w-1/5 min-h-screen z-50 shadow transition-all duration-500 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-100 '    
    >
    <h1 className= "h-8 m-8 font-bold text-black py-3" >Menu</h1>

    <div className=''> 

    <ul className= "h-4 m-4 ">
        <li onClick={ () => setShowMenu(false) }>
        <Link to={`/`}
        className="text-gray-400 py-3 border-b border-t block"
        >Home</Link>
        </li>
        <li onClick={ () => setShowMenu(false) }>
        <Link to={`/about`}
        className="text-gray-400 py-3 border-b border-t block"
        >About</Link>
        </li>
        <li onClick={ () => setShowMenu(false) }>
        <Link to={`/pokemon`}
        className="text-gray-400 py-3 border-b border-t block"
        >Pokedex</Link>
        </li>
        <li onClick={ () => setShowMenu(false) }>
        <Link to={`/contact`}
        className="text-gray-400 py-3 border-b border-t block"
        >Contact</Link>
        </li>
        <li onClick={ () => setShowMenu(false) }>
        <Link to={`/contact`}
        className="text-gray-400 py-3 border-b border-t block"
        >Contact</Link>
        </li>
        <li className="text-gray-400 py-3 border-b border-t" >
        <span onClick={toggleCollapsible}>FreeCodeCamp</span>
        
          <ul 
            className={`transition-all duration-500 ease-in-out ${
            isOpen ? 'h-auto opacity-100  m-4' : 'h-0 opacity-0'
            }`}
          >
            <li>
                <Link to={`/pomodoro`}
                className="text-gray-400 py-3 border-b border-t block">
                Pomodoro</Link>
            </li>
            <li>
                <Link to={`/drum`}
                className="text-gray-400 py-3 border-b border-t block">
                Drum machine</Link>
            </li>
            <li>Sub-item 3</li>
          </ul>
        </li>

        
    </ul>
    </div> {/* modificado */}
    </div>

    menuMask= 
    <div 
    onClick={ () => setShowMenu(false)}
    className='bg-gray-300 bg-opacity-75 fixed top-0 left-0 h-full w-full z-50 transition-all duration-500'    
    ></div>
}

    return(
        <nav className="">
            <span className='text-xl'>
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={ () => setShowMenu(!ShowMenu)}
                />
                {menuMask}
                {menu}
            </span>
        </nav>
    )   
}

export default Navigation