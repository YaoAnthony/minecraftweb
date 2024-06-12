//router
import { NavLink } from "react-router-dom";

//antd
import { Modal } from "antd";

//react
import { useState,useEffect } from "react";

//image
import { book } from "../asset";

//motion
import { motion,AnimatePresence } from "framer-motion";

const ModDetail = ({ mod }) => {

  return (
    <div className="flex flex-col gap-6">
      <img src={mod.img[0]} alt={mod.name} className="w-96 h-96 object-cover" />
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl">{mod.name}</h2>
        <h3 className="text-lg">{mod.orginalName}</h3>
        <p className="text-lg">{mod.description}</p>
        <div className="flex gap-6">
          {mod.img.map((img) => (
            <img src={img} alt={mod.name} className="w-32 h-32 object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
}

const ModList = ({ mods }) => {

  //Select mod
  const [selectedMod, setSelectedMod] = useState(mods[0]);
  const [isVisibleMod, setIsVisibleMod] = useState(true);

  const handleSelectMod = (mod) => {
    setIsVisibleMod(false);
    setSelectedMod(mod);
    //set time out 500ms
    // setTimeout(() => {
    //   setSelectedMod(mod);
    //   setIsVisibleMod(true);
    //   console.log("open",isVisibleMod)
    // }, 500);
  };

  useEffect(() => {
    if (setSelectedMod){
      const timer = setTimeout(() => {
        setIsVisibleMod(true);
      },500);
      return () => clearTimeout(timer);
    }
  },[isVisibleMod]);

  return (
    <>
      <div className="w-full pt-16">
        <div className="flex justify-start gap-6 ">
          <div className="flex-1 h-full">
            <div className="flex-1 flex flex-wrap justify-start items-start gap-6 pt-12 pl-3">
              {mods.map((mod) => (
                <motion.section 
                  key={mod.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleSelectMod(mod)}
                  className="shadow-box bg-yellow-100 rounded-lg p-2 cursor-pointer" >
                  <img src={mod.img[0]} alt={mod.name} className="w-24 h-24 object-cover" />
                </motion.section>
              ))}
            </div>
          </div>
          <div className="relative w-[600px]">
            <img src={book} className="z-0 w-full object-cover" />
            <AnimatePresence
              mode='wait'
            >
              {
              isVisibleMod && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                exit={{ opacity: 0 }}
                className="absolute top-28 left-32 right-32 bottom-28 overflow-scroll font-minecraft">
                <div className="w-full h-full flex flex-col gap-2">
                  <div className="flex gap-3">
                    <img src={selectedMod.img[0]} className="w-28 h-28 object-cover rounded-md"/>
                    <div className="w-full flex flex-col justify-start items-start">
                      <h2 className="text-lg">{selectedMod.name}</h2>
                      <h3 className="text-sm">{selectedMod.orginalName}</h3>
                      <h3 className="text-xs text-gray-500">{selectedMod.version}</h3>
                    </div>
                  </div>

                  <p className="mt-3">{selectedMod.description}</p>
                  <h2 className="text-lg text-red-600">具体攻略介绍：</h2>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default ModList