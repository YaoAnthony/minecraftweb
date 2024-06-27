// src/AudioPlayer.js
import React, { useRef, useState } from 'react';

//motion
import { motion } from 'framer-motion';

//iamge
import { musicDisc } from '../../asset';

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="audio-player">
        <audio ref={audioRef} src={src} />
        <button
            onClick={togglePlayPause}
            className="flex justify-center items-center"
        >
            <motion.img 
                //如果正在播放，则旋转
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{
                    duration: 1,
                    repeat: isPlaying ? Infinity : 0,
                    repeatType: 'loop',
                }}
                className="w-16 h-16"
                src={musicDisc.img} 
                alt={isPlaying ? '暂停' : '播放'} 
            />
        </button>
        </div>
    );
};

export default AudioPlayer;
