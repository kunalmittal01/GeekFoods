import {useRef,useState} from 'react';
import {Link} from 'react-router-dom';
const Header = () =>{
    const [appear,setAppear] = useState(false);
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
    return (
        <div className="header z-10 fixed top-0 w-full py-3 px-7 bg-gray-900">
            <div className="header-wrapper flex items-center justify-between">
            <Link to="/"><div className="header-left flex items-center gap-2">
                    <img src="	https://flowbite.com/docs/images/logo.svg" alt="" />
                    <p className="text-white text-2xl">GeekFoods</p>
                </div>
            </Link>    
                <div className="header-right flex w-2/3 justify-end md:justify-between gap-4">
                    <div className="header-comp hidden items-center gap-5 md:flex">
                       <Link to="/"><p className="text-white">Home</p></Link>
                       <Link to="/Quote"><p className="text-white">Quote</p></Link>
                       <Link to="/Restaurants"><p className="text-white">Restaurants</p></Link>
                        <p className="text-white">Foods</p>
                        <Link to="/Contact"><p className="text-white">Contact</p></Link>
                    </div>
                    <div className="header-btn flex items-center gap-5">
                        <button className="text-white bg-sky-600 md:w-36">Get started</button>
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