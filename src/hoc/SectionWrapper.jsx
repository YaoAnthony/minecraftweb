import { motion } from "framer-motion";
//import { pageSetting } from "../style";
import { staggerContainer } from "../utils/motion";

//antd
import { Divider } from "antd";

const SectionWrapper = (Component, idName) =>

function HOC(props) {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='w-full flex flex-col justify-start'
        >
            <span className='hash-span' id={idName}><Divider/>&nbsp;</span>
            <Component {...props}/>
        </motion.section>
    );
};

export default SectionWrapper;