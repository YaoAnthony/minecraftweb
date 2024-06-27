
// Import the useState hook from React
import { useState } from 'react';

//antd
import { Image, Rate } from 'antd';

//style
import { pagePadding } from '../../style';

//react
import React, { useEffect } from 'react';

import { week1 } from '../../../asset';

//icon
import { diamond_sword } from '../../../asset';

//hoc
import withHeader from '../../hoc/SectionWrapper';


const Adventure = ({ adventure }) => {

    if (!adventure) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className={`mt-16 w-full flex flex-col gap-12 text-white font-minecraft ${pagePadding}`}>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl flex gap-3 items-end '>{adventure.title}<p className='text-sm '>V{adventure.version} </p></h1>
                <p 
                    className='text-lg flex gap-3 items-center '>
                    难度 
                    <Rate character={<img className='w-8 h-8' src={diamond_sword.img}/>} disabled count={adventure.difficulty} defaultValue={adventure.difficulty} />
                </p>
            </div>


            <div className='w-full flex flex-col md:flex-row gap-32'>
                <Image src={week1} alt='week1' className='w-full h-96 object-cover rounded-lg' />
                <div className='w-full flex flex-col gap-6'>
                    <p className='text-md '>{adventure.description}</p>
                    <p >合照时间: 2024-06-08 </p>
                </div>
            </div>
        </div>
    );
}

export default withHeader(Adventure, 'adventure');