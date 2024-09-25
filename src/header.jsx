import {useRef,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
const Header = (props) =>{
    const [appear,setAppear] = useState(false);
    const[active,setActive] = useState("Home");
    const sidebarRef = useRef(null);
    const showSidebar = ()=> {
        if(!appear) {
            sidebarRef.current.classList.add('show');
            setAppear(true);
        }
        else {
            sidebarRef.current.classList.remove('show');
            setAppear(false);
        }
    }
    const handleClick =(e)=>{
        setActive(e.target.textContent);
    }

    return (
        <div onClick={handleClick} className="header z-10 fixed top-0 w-full py-3 px-7 bg-gray-900">
            <div className="header-wrapper flex items-center justify-between">
            <Link to="/"><div className="header-left flex items-center gap-2">
                    <img src="	https://flowbite.com/docs/images/logo.svg" alt="" />
                    <p className="text-white text-2xl">GeekFoods</p>
                </div>
            </Link>    
                <div className="header-right flex w-2/3 justify-end md:justify-between gap-4">
                    <div className="header-comp hidden items-center gap-5 md:flex">
                       <Link to="/"><p onClick={handleClick} id="1" className={`text-white ${active === "Home" ? 'active-page' : ''}`}>Home</p></Link>
                       <Link to="/Quote"><p id="2" onClick={handleClick} className={`text-white ${active === "Quote" ? 'active-page' : ''}`}>Quote</p></Link>
                       <Link to="/Restaurants"><p id="3" onClick={handleClick} className={`text-white ${active === "Restaurants" ? 'active-page' : ''}`}>Restaurants</p></Link>
                        <p className={`text-white ${active === "Foods" ? 'active-page' : ''}`} onClick={handleClick} id="4">Foods</p>
                        <Link to="/Contact"><p id="5" onClick={handleClick} className={`text-white ${active === "Contact" ? 'active-page' : ''}`}>Contact</p></Link>
                    </div>
                    <div className="header-btn flex items-center gap-5">
                        <button className="text-white bg-sky-600 py-2 px-3 rounded-md hover:bg-sky-700 md:w-36">Get started</button>
                        <svg onClick={showSidebar} className="hover:cursor-pointer w-5 text-white block h-5 md:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"></path></svg>
                    </div>
                </div>
            </div>
            <div ref={sidebarRef} className="header-list absolute sidebar rounded-r left-0 w-56 bg-gray-800 ">
                    <ul className="text-cyan-300 pl-4 py-8">
                        <Link to="/"><li className="hover:cursor-pointer text-xl hover:bg-gray-800 hover:text-white">Home</li></Link>
                        <Link to="/Quote"><li className="hover:cursor-pointer text-xl hover:bg-gray-800 hover:text-white">Quote</li></Link>
                        <Link to="/Restaurants"><li className="hover:cursor-pointer text-xl hover:bg-gray-800 hover:text-white">Restaurants</li></Link>
                        <li className="hover:cursor-pointer text-xl hover:bg-gray-800 hover:text-white">Foods</li>
                        <Link to="/Contact"><li className="hover:cursor-pointer text-xl hover:bg-gray-800 hover:text-white">Contact</li></Link>
                    </ul>
                </div>
        </div>
    )
}

export default Header;