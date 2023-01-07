import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Community from '../Pages/Community'
import Console from '../Pages/Console'

import Home from '../Pages/Home'
import LifeStyles from '../Pages/LifeStyles'
import Mobile from '../Pages/Mobile'
import Pc from '../Pages/Pc'
import Services from '../Pages/Services'
import Store from '../Pages/Store'
import Support from '../Pages/Support'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pc" element={<Pc />}></Route>
        <Route path="/console" element={<Console />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/mobile" element={<Mobile />}></Route>
        <Route path="/lifestyle" element={<LifeStyles />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/product" element={<Home />}></Route>
        <Route path="/test" element={<Home />}></Route>
        <Route path="*" element={<h1>Hello</h1>}></Route>

    </Routes>
  )
}

export default AllRoutes