import React from 'react'

//timeline
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//motion
import { motion } from 'framer-motion';


//data
import { timelineElements } from '../../constants';

//music
import { journeyAudio } from '../../../asset';
import AudioPlayer from '../../components/Audio';

//antd
import { Image } from 'antd';

//components
import Day1 from './Day1';
import Day2 from './Day2';


//utils
import { MultiLineText } from './utils';




const VerticalTimelineComponent = () => {
    return (
        <VerticalTimeline>
            <Day1 />
            <Day2 />
        </VerticalTimeline>
    );
};

const JournalPage = () => {
    return (
        <div className='text-white flex flex-col gap-16 md:gap-32'>
            <div className='flex gap-4 justify-center items-center'>
                <h1 className='text-3xl font-minecraft text-center'>我们的航海日记</h1>
                <AudioPlayer src={journeyAudio} />
            </div>
            <VerticalTimelineComponent />
        </div>
    )
}

export default JournalPage