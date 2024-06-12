//icon
import { DownOutlined } from "@ant-design/icons";

//motion
import { motion } from "framer-motion";

//react
import { useState } from "react";




const NextPageButton = ({sectionIndex}) => {

  const [isHovering, setIsHovering] = useState(false);

  const moveToSection = () => {
    console.log(sectionIndex)
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(sectionIndex + 1);
    }
};
  return(
          <motion.div
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              onClick={moveToSection}
              animate={{ 
                  y: ["0%", "10%", "0%"] 
              }}
              whileHover={{ y: "60%" }}
              className='flex justify-center mt-8 cursor-pointer'
              transition={
                isHovering ? 
                {
                  duration: 0.5,
                  ease: "easeInOut"
                }
                : 
                {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1,
                    ease: "easeInOut"
                }}
              >
              <DownOutlined style={{ fontSize: '28px' }} />
          </motion.div>
  )
}

export default NextPageButton