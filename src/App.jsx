window.global = window;
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
// import login from "./pages/login"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import AdminEditor from "./pages/AdminEditor";
import { UnloginProtectedRoute,LoginedProtectedRoute } from "./components/ProtectedRoute"
import AuthProvider from "./Context/AuthProvider"
import { ACCESS_TOKEN, REFRESH_TOKEN, } from "./constants";
import { useContext,createContext,useState } from "react"
import { AuthContext } from "./Context/AuthProvider"
// import { AlertContext } from "./Context/AlertProvider"
import Post from "./pages/Post";
import 'antd/dist/reset.css';
import Category from "./pages/Category";

function Logout(){
  const {_,setIsAuthed} = useContext(AuthContext);
  localStorage.removeItem(REFRESH_TOKEN)
  localStorage.removeItem(ACCESS_TOKEN)
  setIsAuthed(false)
  return <Navigate to={'/login'}/>
}

export const AlertContext = createContext(null);

function App() {

  // const [showAlert,setShowAlert] = useState(false)
  const [alert, setAlert] = useState({ show: false, variant: '', content: '' });

  // useParam: /page/2
  // useSearchParam: /?page=2

  return (
    <AuthProvider>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      <AlertContext.Provider value={{alert, setAlert}}>
        <BrowserRouter>
          <Routes>
            <Route 
              path={"/:tag?/:p?"}
              element={
                // <UnloginProtectedRoute>
                <Home />
                // </UnloginProtectedRoute>
              } />
            <Route 
              path={`/post/:postId`}
              element={
                <Post/>
              } />
            <Route 
              path="/category"
              element={
                  <Category />
              } />
            <Route 
              path="/admin/:p?"
              element={
                // <UnloginProtectedRoute>
                  <Admin />
                // </UnloginProtectedRoute>
              } />
            <Route 
              path="/admin/editor/:postId"
              element={
                // <UnloginProtectedRoute>
                <AdminEditor />
                // </UnloginProtectedRoute>
              } />
            <Route 
              path="/admin/editor"
              element={
                // <UnloginProtectedRoute>
                <AdminEditor />
                // </UnloginProtectedRoute>
              } />
            <Route 
              path="/login"
              element={
                <LoginedProtectedRoute>
                  <Login />
                </LoginedProtectedRoute>
              } />
            <Route 
              path="/signup"
              element={
                <LoginedProtectedRoute>
                  <Signup />
                </LoginedProtectedRoute>
              } />
            <Route 
              path="/logout"
              element={
                <Logout />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </AlertContext.Provider>
    </AuthProvider>
  )
}

export default App
