import React from 'react'

//motion
import { color, motion } from 'framer-motion';

//style
import { pagePadding } from '../../style';
import { Divider,Tooltip } from 'antd';

//hoc
import withHeader from '../../hoc/SectionWrapper';

//item
import { 
    emerald,
    oak_planks,
    chest,
    banner,
    bottle,
} from '../../../asset';

const detail = {
    title : '下界之旅',
    date : '06-15 21:00',
    difficulty : 1.5,
    require : [
        emerald,
        oak_planks,
    ],
    rule: [
        '不得自行进入下界',
        '飞船不允许放置水，床',
    ]

}

const ActiveDetail = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center mt-8 md:mt-32 '>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`w-full text-4xl font-minecraft flex items-center gap-12 ${pagePadding}`}>
                <div className="flex-1">
                    <Divider style={{ borderColor: '#fff' }} />
                </div>
                <span>{detail.title}</span>
                <div className="flex-1">
                    <Divider style={{ borderColor: '#fff' }} />
                </div>
            </motion.div>

            <p className='text-lg font-minecraft mt-2'>{detail.date}</p>

            <h3 className='text-xl font-minecraft mt-4'>难度：{detail.difficulty}</h3>

            <div className={`${pagePadding} mt-16`}>
                    <div className="flex flex-col md:flex-row justify-center items-end gap-32">
                        <motion.div
                            className="realtive w-80 h-80 p-5 rounded-md glass self-center"
                            initial={{ y: '-100px', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <img src={chest.img} alt={chest.name} className='absolute w-1/2 -top-1/4 -right-16'/>
                            <p className=' font-minecraft text-2xl text-center'>准备道具</p>
                            <div className='flex gap-4 mt-4'>
                                {detail.require.map((item,index) => (
                                    <Tooltip key={index} title={item.name} color='blue'>
                                        <div key={index} className='flex flex-col items-center shadow-inner border border-gray-500 p-1'>
                                            <img key={index} src={item.img} alt={item.name} className='w-12 h-12'/>
                                        </div>
                                    </Tooltip>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="realtive w-96 h-96 bg-green-500"
                            initial={{ y: '-100px', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0 }}
                        >   
                            <img src={bottle.img} alt={bottle.name} className='absolute -top-1/4  md:-right-16'/>
                        </motion.div>

                        <motion.div
                            className="realtive w-80 h-80 p-5 rounded-md glass self-center"
                            initial={{ y: '-100px', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <img src={banner.img} alt={banner.name} className='absolute w-1/2 -top-1/4 -right-16'/>
                            <p className=' font-minecraft text-2xl text-center'>活动要求</p>
                            <div className='flex flex-col gap-4 mt-4'>
                                {detail.rule.map((item,index) => (
                                    <div key={index} className='flex items-center gap-2'>
                                        <div className='w-4 h-4 rounded-full bg-green-700'></div>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        
                    </div>
                </div>
        </div>
    )
}

export default withHeader(ActiveDetail, 'activeDetail');