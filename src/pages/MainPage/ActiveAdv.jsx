import React from 'react'

//router
import { NavLink } from 'react-router-dom';

//hoc
import withHeader from '../../hoc/SectionWrapper';

//style
import { pagePadding } from '../../style';

//img
import {
    background,
    ghast,
    down,
} from '../../../asset'

//motion
import { motion } from 'framer-motion';

const ActiveAdv = () => {
    return (
        <div className={`${pagePadding}`}>
            <div className='relative mx-6 md:mx-16 w-auto h-[300px] md:h-[550px] lg:h-[600px] xl:h-[700px] 2xl:h-[750px] 3xl:h-[800px] 4xl:h-[1000px] bg-cover bg-center' style={{backgroundImage: `url(${background})`}}>
                <motion.img
                    src={ghast}
                    animate={{ 
                        y: [0, -20, 20, -20, 20, -20, 20, 0],
                        opacity: [0, 0.7, 1,1,1, 1, 0.7, 0] 
                    }} // 上下飘动的关键帧
                    exit={{ opacity: 0.8  }} // 退出时消失
                    transition={{
                        duration: 8, // 动画总时长
                        repeat: Infinity, // 无限循环
                        repeatType: "loop", // 循环类型
                        ease: "easeInOut" // 缓动效果
                    }}
                    alt='ghast'
                    className='absolute w-1/3 md:w-1/4 -right-16 -top-16'
                    //animate={{x: 0, opacity: 1}}
                />
                
                <div className='w-full h-full bg-custom-gradient  bg-opacity-50 flex justify-start items-end'>
                    <div className='w-full text-left pb-16 pl-12 font-minecraft flex flex-col gap-5 justify-start'>
                        <motion.h1 
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0 }}
                            exit={{ x: -100, opacity: 0 }}
                            className='text-4xl'
                        >
                            V1.1 - 下界战役
                        </motion.h1>
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            className='text-lg'
                        >
                            驾驶我们的船只，在地狱里求得一线生机
                        </motion.p>
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                            exit={{ x: -100, opacity: 0 }}
                        >
                            开启时间: 2024/06/15 9:00pm...
                        </motion.p>
                    </div>
                </div>

                <div className='absolute bottom-12 w-full h-16 flex justify-center items-center'>
                    <a href='#activeDetail'>
                        <motion.img
                            src={down}
                            animate={{ 
                                y: [0, 50, 50, 0],
                                opacity: [0, 1,0, 0] 
                            }} // 上下飘动的关键帧
                            transition={{
                                delay: 3, // 延迟3秒后开始 
                                duration: 3, // 动画总时长
                                repeat: Infinity, // 无限循环
                                repeatType: "loop", // 确保循环而不逆向
                                repeatDelay: 1, // 循环之间的延迟
                                ease: "easeInOut" // 缓动效果
                                
                            }}
                            alt='down'
                            className='w-8 h-8 cursor-pointer'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default withHeader(ActiveAdv, 'active-adv');