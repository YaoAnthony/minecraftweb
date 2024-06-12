//router
import { Link } from 'react-router-dom';

//react
import { useState, useEffect } from 'react';

//style
import { pagePadding } from './style';

//image
import { minecraft_logo } from '../asset';

//motion
import { motion } from 'framer-motion';

//navLinks
import { navLinks } from './constants';


//create header which fix on the top of the page
const Header = ({currentpage, setCurrentPage}) => {
    //scroll effect
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[]);


    //move to the section
    const moveToSection = (sectionIndex) => {
        if (window.fullpage_api) {
            window.fullpage_api.moveTo(sectionIndex + 1);
            setCurrentPage(sectionIndex);
        }else{
            console.log('fullpage_api is not ready');
        }
    };

    return (
        <nav className={` ${scrolled ? "bg-gray-800 text-white" : "text-white" } duration-500 transition-colors z-10 py-8 ${pagePadding} fixed top-0 w-full flex justify-between items-center`}>
            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    window.fullpage_api.moveTo(1);
                    setCurrentPage(0)
                }} 
                className="text-2xl cursor-pointer">
                <img src={minecraft_logo} className='w-48' alt='Our adventure' />
            </motion.div>
            <ul className='flex flex-row gap-5'>
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`${
                            currentpage === nav.id ? "text-white" : " text-gray-500"
                        } hover:text-white text-[15px] font-medium font-minecraft cursor-pointer`}
                        onClick={() => moveToSection(nav.id)}
                    >
                        <span>{nav.title}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}


export default Header;
