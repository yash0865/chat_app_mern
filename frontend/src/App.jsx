
import './App.css'
import { useAuthContext } from './context/AuthContext'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  const { authUser } = useAuthContext();
  return (
    <div className={`h-screen w-full flex`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to={"/"} /> : <SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


// function App() {
//   const { authUser } = useAuthContext();

//   return (
//     <div className='p-6 h-screen flex items-center justify-center'>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
//           <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login />} />
//           <Route path='/signup' element={authUser ? <Navigate to={"/"} /> : <SignUp />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App