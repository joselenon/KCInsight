import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import { Body } from '@/styles/GlobalStyles';
import { useSideBarContext } from '@/contexts/SideBarContext';

export default function MyRoutes() {
  const { sideBars } = useSideBarContext();

  const leftSideBarWidth = sideBars.left.width;
  const rightSideBarWidth = sideBars.right.width;

  return (
    <Body $sideBarWidths={{ left: leftSideBarWidth, right: rightSideBarWidth }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Body>
  );
}
