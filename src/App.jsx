import "./App.css";
import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/Home/HomePage";
import NotesWindow from "./pages/NotesWindow/NotesWindow";
import NotFound from "./pages/Error/NotFound";
function App() {
  //responsive layout toggle ie toggles a css classNames
  const [view, setView] = useState(false);
  //react router setup

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout view={view} setView={setView} />}>
        <Route index element={<HomePage setView={setView} />} />
        <Route path=':id' element={<NotesWindow setView={setView} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
