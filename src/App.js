import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProductDetail from './components/ProductDetail/ProductDetail'
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageInventory from './components/ManageInventory/ManageInventory';
import AddInventory from './components/AddInventory/AddInventory';
import MyItems from './components/MyItems/MyItems';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth><ProductDetail></ProductDetail></RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth><ManageInventory></ManageInventory></RequireAuth>
        }></Route>
        <Route path='/add' element={
          <RequireAuth><AddInventory></AddInventory></RequireAuth>
        }></Route>
        <Route path='/myItem' element={
          <RequireAuth><MyItems></MyItems></RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
