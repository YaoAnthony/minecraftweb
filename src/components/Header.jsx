//router
import { Link, NavLink } from 'react-router-dom';

//react
import { useState, useEffect } from 'react';

//style
import { pagePadding } from '../style';

//image
import { minecraft_logo } from '../../asset';

//motion
import { motion } from 'framer-motion';

//navLinks
import { navLinks,MainPageNavLinks } from '../constants';

//icon
import { menu,close } from '../../asset';

//antd
import { Drawer,Divider } from 'antd';

//router
import { useLocation } from 'react-router-dom';



//create header which fix on the top of the page
const Header = ({currentpage, setCurrentPage}) => {

    //get current url, if it is main page, then show the mainage navlinks
    const location = useLocation();

    const path = location.pathname;
    const [isMainPage, setIsMainPage] = useState(true);

    useEffect(() => {
        if (path === '/') {
            setIsMainPage(true);
        } else if (path === '/journal') {
            setIsMainPage(false);
        }
    }, [path, setCurrentPage]);

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

    //mobile menu
    const [ open , setOpen ] = useState(false);

    const shwoDrawer = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }



    return (
        <header className={` ${scrolled ? "bg-gray-800 text-white" : "text-white" } duration-500 transition-colors z-10 py-12 ${pagePadding} fixed top-0 w-full flex justify-between items-center`}>
            <div className='flex gap-12 items-center'>
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-2xl cursor-pointer">
                    <img src={minecraft_logo} className='w-48' alt='Our adventure' />
                </motion.div>

                {isMainPage && (
                        <ul className='hidden md:flex flex-row gap-5'>
                            {MainPageNavLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    onClick={() => setCurrentPage(nav.id)}
                                    className={`${
                                        currentpage === nav.id ? "text-white" : " text-gray-500 hover:text-white "
                                    } text-xl font-medium font-minecraft cursor-pointer`}
                                >
                                    <a href={nav.to}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
            <ul className='hidden md:flex flex-row gap-2 lg:gap-5'>
                {navLinks.map((nav) => (
                    <NavLink
                        to={nav.url}
                        key={nav.url}
                        className={`${path === nav.url ? "text-white" : "text-gray-500 hover:text-white"} text-xl font-medium font-minecraft cursor-pointer`}
                    >
                        <span>{nav.title}</span>
                    </NavLink>
                ))}
            </ul>

            <nav className='block md:hidden'>
                <img onClick={shwoDrawer} src={menu} className='w-8' alt='menu' />
            </nav>

            <Drawer
                closable={true}
                onClose={onClose}
                open={open}
                closeIcon={<img src={close} className='w-8' alt='close' />}
            >
                {isMainPage && (
                        <ul className='flex flex-col gap-6'>
                            {MainPageNavLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    onClick={() => setCurrentPage(nav.id)}
                                    className={`text-black text-xl py-2 shadow-product roudned-md font-medium font-minecraft w-full flex justify-center`}
                                >
                                    <span>{nav.title}</span>
                                </li>
                            ))}
                        </ul>
                )}
                <Divider />
                <ul className='flex flex-col gap-6'>
                    {navLinks.map((nav) => {

                        return (
                            <NavLink
                                to={nav.url}
                                key={nav.url}
                                className={`${path === nav.url ? "text-white" : "text-black hover:text-white"} text-xl py-2 shadow-product roudned-md font-medium font-minecraft w-full flex justify-center cursor-pointer`}
                            >
                                <span>{nav.title}</span>
                            </NavLink>
                        )
                    })}
                </ul>
            </Drawer>
            
        </header>
    );
}


export default Header;
