import MainLayout from '../layouts/MainLayout'
import './App.css'
import { RouterProvider } from 'react-router/dom'
import { router } from '../router/Router'

import { useDispatch } from 'react-redux'
import { login } from "../BLL/reducers/AuthReducer"
import { useEffect } from 'react'

import Preloader from '../shared/ui/preloader/Preloader'

function App() {

  const dispatch = useDispatch()

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        if (currentUser?.email) {
            dispatch(login({ email: currentUser.email }))
        }
    }, [])
  
  return (
    <>
      <Preloader />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
