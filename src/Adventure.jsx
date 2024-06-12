
// Import the useState hook from React
import { useState } from 'react';

//antd
import { Image, Rate } from 'antd';

//hoc
import SectionWrapper from './hoc/SectionWrapper';

//react
import React, { useEffect } from 'react';

import { week1 } from '../asset';

//component
import NextPageButton from './components/NextPageButton';

const Adventure = ({ adventure }) => {

    if (!adventure) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className='mt-16 w-full flex flex-col gap-6 text-white font-minecraft'>
            <div className='w-full flex flex-col gap-4'>
                <h1 className='text-3xl flex gap-3 items-center '>
                    <p>{adventure.title}</p>
                    <Rate disabled defaultValue={adventure.difficulty} allowHalf />
                </h1>
                <p className='text-sm '>世界版本: {adventure.version} </p>
            </div>
            <div className='w-full flex flex-row gap-6 '>
                <Image src={week1} alt='week1' className='w-full h-96 object-cover rounded-lg' />
                <div className='w-full flex flex-col gap-6'>
                    <p className='text-md '>{adventure.description}</p>
                    <p >合照时间: 2024-06-08 </p>
                </div>
            </div>
            <NextPageButton sectionIndex={1} />
        </div>
    );
}

export default Adventure