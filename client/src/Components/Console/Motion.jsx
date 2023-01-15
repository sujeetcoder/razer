import {   motion } from "framer-motion";

import React from 'react'

const motionn = () => {
  return (
    <>
      <motion.div
      
       whileInView="visible"
       viewport={{ once: true }}
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       duration={2000}
       className='middle_Lower_Heading'
      >
        <div as="h2" size="lg">Unleash the Pro-Gamer in You</div>
        <div>The Razer Wolverine V2 Pro is the ultimate controller for competitive gamers, featuring Razer SpeedFlex cables, customizable multi-function buttons, and more.</div>     </motion.div>
    </>
  )
}

export default motionn
