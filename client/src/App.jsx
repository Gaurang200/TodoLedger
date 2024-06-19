
import './App.css'
import CreateTask from './pages/CreateTask'
import DeleteTask from './pages/DeleteTask'
import UpdateTask from './pages/UpdateTask'
import ViewAllTask from './pages/ViewAllTask'
import Wallet from './pages/Wallet'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import ViewTask from './pages/ViewTask'

function App() {
  const [state , setState ] = useState({web3:null,contract:null,account:null})

  const saveState = ({web3,contract,account}) =>{
    setState({web3:web3,contract:contract,account:account})
  }
  const router = createBrowserRouter([
    {path:'/',element:<Wallet saveState={saveState} />},
    {path:'/view-all-task',element:<ViewAllTask/>},
    {path:'/view-task',element:<ViewTask/>},
    {path:'/create-task',element:<CreateTask state={state} />},
    {path:'/delete-task',element:<DeleteTask state={state} />},
    {path:'/update-task',element:<UpdateTask state={state} />},



  ])

  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App
