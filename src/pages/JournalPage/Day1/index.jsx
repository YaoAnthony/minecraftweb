
//motion
import { motion } from 'framer-motion';

//timeline
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

//utils
import { MultiLineText } from '../utils';

//antd
import { Divider, Image } from 'antd';

//image
import week1 from './week1.jpg';

const notes = {
    title: "航海日记 - (前传)",
    weather: "晴",
    date: "2023-06-10",
    description2: "这是我们的团队",
    memeber: "我，老道，kouta，大侄子，小雪，米诺，野菜"
}


const Day1 = () => {

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
                <div className='flex justify-between items-center'>
                    <h1 className='font-minecraft text-3xl text-black'>{notes.title}</h1>
                    <div className='font-minecraft text-2xl text-black'>{notes.weather}</div>
                </div>
                <div className='font-minecraft text-xl text-black '>
                    <pre className='pre-wrap'>"我们来到了这个世界，我们的目标是星辰大海，在此之前我们需要准备好物资，我们的船只。"</pre>
                </div>
                <div className='flex justify-center'>
                    <Image src={week1} />
                </div>
                <Divider />
                <div className='font-minecraft text-md text-black'>队伍成员:   {notes.memeber}</div>
            </motion.div>
        </VerticalTimelineElement>
    )

}

export default Day1;