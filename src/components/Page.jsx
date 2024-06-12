import React, { useState, useEffect } from 'react';

//style
import { pagePadding } from '../style';

//motion
import { motion,AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const pageVariants = (direction) => ({
    initial: { opacity: 0, y: direction > 0 ? 100 : -100 },
    in: { opacity: 1, y: 0 },
    out: {  y: direction > 0 ? 100 : -100 },
});

const pageTransition = {
    duration: 0.6,
    ease: 'easeInOut',
};

const Page = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleScroll = (e) => {
        if (e.deltaY > 0 && currentPage < React.Children.count(children) - 1) {
            setDirection(1);
            setCurrentPage(currentPage + 1);
        } else if (e.deltaY < 0 && currentPage > 0) {
            setDirection(-1);
            setCurrentPage(currentPage - 1);
        }
  };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentPage]);

  return (
    <div className="h-screen overflow-hidden">
        <AnimatePresence >
            <motion.div
                key={currentPage}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants(direction)}
                transition={pageTransition}
                className={`relative pt-32 ${pagePadding} flex flex-col items-center`}>
                
                {React.Children.toArray(children)[currentPage]}
            </motion.div>
        </AnimatePresence>
        
    </div>
  );
};

export default Page;
