import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider, 
  Route, 
  createRoutesFromElements 
} from 'react-router-dom';
import Home from './pages/Home';
import SupportDefinition from './pages/SupportDefinition';
import SupportBasics from './pages/SupportBasics';
import NoblesseSupports from './pages/NoblesseSupports';
import UtilitySupports from './pages/UtilitySupports';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/definition" element={<SupportDefinition />} />
        <Route path="/basics" element={<SupportBasics />} />
        <Route path="/noblesse" element={<NoblesseSupports />} />
        <Route path="/utility" element={<UtilitySupports />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;