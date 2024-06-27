import React from 'react'

//react
import { useState,useEffect } from 'react';

//router
import { NavLink } from 'react-router-dom';

//data
import { adventureList } from '../../constants'

//component
import ActiveAdv from './ActiveAdv';
import ActiveDetail from './ActiveDetail';
import ModList from './ModList';
import Member from './Member';
import VersionIntroduction from '../../components/VersionIntroduction';

const MainPage = () => {
    const adventure = adventureList[adventureList.length - 1];

    return (
        <div className='text-white flex flex-col gap-16 md:gap-32'>
            <ActiveAdv/>
            <ActiveDetail/>
            <VersionIntroduction/>
            <ModList mods={adventure.mods}/>
            <Member/>
        </div>
    )
}

export default MainPage