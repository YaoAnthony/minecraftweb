
//motion
import { motion } from 'framer-motion';

//timeline
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

//utils
import { MultiLineText } from '../utils';

//antd
import { Image } from 'antd';

//image
import nether from './Nether.png';
import ship_night from './ship_night.png';
import ship_day from './ship-day.png';
import door from './door.png';
import week2 from './week2.png';

const notes = {
    title: "航海日记 - 其二",
    weather: "晴",
    date: "2023-06-15",
}

const Note = () => {
    return (
        <Image.PreviewGroup>
            <div className='flex justify-between items-center'>
                <h1 className='font-minecraft text-3xl text-black'>{notes.title}</h1>
                <div className='font-minecraft text-2xl text-black'>{notes.weather}</div>
            </div>
            <div className='font-minecraft text-xl text-black'>经过了一段时间的发育，我们在一个村庄附近建起了我们自己的第一个据点 - <span className='font-medium'>新手村</span></div>
            <div className='font-minecraft text-xl text-black'>我们在这里造起了我们的农场，牧场，收集物资，最终在今天搭建起了我们的第一艘船！</div>
            
                <div className='flex justify-between gap-2'>
                    <Image className='rounded-md' src={ship_day} alt='ship_day' />
                    <Image className='rounded-md' src={ship_night} alt='ship_night' />
                </div>
            
            <div className='font-minecraft text-xl text-black'>随后我们打开了地狱之门...</div>
            <Image className='rounded-md' src={door} />
            <div className='font-minecraft text-xl text-black'>来到地狱后，一股恶寒涌上心头，这地方绝对不能久留，我想着</div>
            <Image className='rounded-md' src={nether} />
        </Image.PreviewGroup> 
    )

}


const Day2 = () => {

    return(
        <VerticalTimelineElement
            date={notes.date}
            dateClassName='font-minecraft'
            iconStyle={{ background: 'black', color: '#000000' }}
        >
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col gap-3'
            >
                <Note />
            </motion.div>
        </VerticalTimelineElement>
    )

}

export default Day2;