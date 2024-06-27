import React, { useState,useRef, useEffect } from 'react';

//hoc
import withHeader from '../../hoc/SectionWrapper';

//texture
import MemberRender from './MemberRender';

//motion
import { motion } from 'framer-motion';

//style
import { pagePadding } from '../../style';

//data
import { members } from '../../constants'

const MultiLineText = ({ text }) => {
  const lines = text.split('\n');
  return (
    <div>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index !== lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};

const Member = () => {

  const [ model, setModel ] = useState(null);

  const [ member, setMember ] = useState(members[1]);

  return (
    <div className={`${pagePadding} flex flex-col gap-6 `}>
      <h1 className='text-4xl font-minecraft text-center'>船员们 !</h1>

      <motion.div className='w-full flex flex-wrap justify-between gap-5'>
        {members.map((member) => (
          <div 
            onClick={() => setMember(member)}
            key={member.id} 
            className='flex flex-col justify-center gap-6 items-center'
          >
            <img src={member.avatar} alt={member.name} className='w-16 md:w-32 h-16 md:h-32 object-cover rounded-full' />
            <div className='flex flex-col gap-2'>
              <p className='text-xl md:text-3xl font-minecraft text-center'>{member.name}</p>
              <p className='text-xs font-minecraft text-center'>{member.role}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className='flex flex-col md:flex-row gap-32'>
        <div className='flex justify-center self-center w-64 h-[400px]'>
          <MemberRender isMobile={false} />
        </div>

        <div className='flex flex-col gap-12 md:pt-16 items-center md:items-start'>
          <p className='text-3xl font-minecraft'>成员: {member.name}</p>
          <div className='text-lg font-minecraft'><MultiLineText text={member.signature} /></div>
        </div>
      </div>
    </div>
  )
}

export default withHeader(Member, 'member');