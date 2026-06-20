import MainLayout from '../layouts/MainLayout'
import './App.css'
import { RouterProvider } from 'react-router/dom'
import { router } from '../router/Router'

import Preloader from '../shared/ui/preloader/Preloader'

function App() {
  
  return (
    <>
      <Preloader />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
