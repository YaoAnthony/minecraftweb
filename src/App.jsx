//react
import { useState,useEffect } from 'react';

//router
import { BrowserRouter,Routes, Route } from 'react-router-dom';

//motion
import { AnimatePresence } from 'framer-motion';

//component
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import MainPage from './pages/MainPage';
import JournalPage from './pages/JournalPage';

const App = () => {
    const [ currentpage, setCurrentPage ] = useState(0);
    
    return (
        <BrowserRouter>
            <AnimatePresence>
                <div className='relative w-full min-h-screen bg-black minecraft-font overflow-hidden'>
                    <Header currentpage={currentpage} setCurrentPage={setCurrentPage}/>

                    <main className='pt-36 h-full'>
                        <Routes>
                            <Route path='*' element={<MainPage />} />
                            <Route path='/' element={<MainPage />} />
                            <Route path='/minecraftweb/journal' element={<JournalPage />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </AnimatePresence>
        </BrowserRouter>
    );
}


export default App;