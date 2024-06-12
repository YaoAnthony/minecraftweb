//react
import { useState,useEffect } from 'react';

//router
import { BrowserRouter } from 'react-router-dom';

//style
import { pagePadding } from './style';

//image
import { background } from '../asset';

//motion
import { motion,AnimatePresence } from 'framer-motion';

//component
import Header from './Header';
import Adventure from './Adventure';
import ModList from './ModList';
import PeopleList from './People';
import History from './History';

//page
import ReactFullpage from '@fullpage/react-fullpage';

// Define the Adventure data
import { adventureList } from './constants';

const pages = [
    { id: 0, content: <Adventure adventure={adventureList[adventureList.length - 1]} /> },
    { id: 1, content: <ModList mods={adventureList[adventureList.length - 1].mods} /> },
    { id: 2, content: <History /> },
    { id: 3, content: <PeopleList />}
];

const Content = ({setCurrentPage, pages}) => {
    return (
        <ReactFullpage
            // 这里是全屏滚动的配置项
            archors={pages.map((page) => page.id)}
            scrollingSpeed={1000} /* 滚动速度，单位为毫秒 */
            licenseKey='TMBK7-NYHHH-KPQKH-2G8J9-LYKSJ' 
            afterLoad={(origin, destination, direction) => {
                setCurrentPage(destination.index);
            }}
            credits={false}
            render={({ state, fullpageApi }) => {
                return (
                <ReactFullpage.Wrapper>
                    {pages.map((page) => (
                    <div 
                        data-anchor={page.id}
                        key={page.id} 
                        className={`section glass w-full h-screen py-16 ${pagePadding} flex justify-center items-center`}>
                        <div className='w-full h-full min-h-[80vh]'>
                            {page.content}
                        </div>
                    </div>
                    ))}
                </ReactFullpage.Wrapper>
                );
          }}
        />
      );
}

const App = () => {
    const [ currentpage, setCurrentPage ] = useState(0);
    
    return (
        <BrowserRouter>
            <AnimatePresence>
                <div className='relative w-full h-screen overflow-hidden bg-black'>
                    <Header currentpage={currentpage} setCurrentPage={setCurrentPage}/>
                    <img src={background} alt="background" className='absolute top-0 w-full h-screen object-cover' />
                    <Content setCurrentPage={setCurrentPage} pages={pages}/>
                </div>
            </AnimatePresence>
        </BrowserRouter>
    );
}


export default App;