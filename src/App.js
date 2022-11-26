import logo from './logo.svg';
import './App.css';

//importamos componentes
import CompShowUsers from './users/users';
import CompCreateUser from './users/createUser';
import CompEditUser from './users/editUser';
import CompShowBlogs from './blog/showBlog';
import CompCreateBlog from './blog/createBlog';
import CompEditBlog from './blog/editBlog';
//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        {/* <button className='btn btn-primary'>Crear <i className="fa-solid fa-calendar-days"></i></button> */}
      
      </header>

      <BrowserRouter>
      <Routes>
        <Route path ='/' element = {<CompShowUsers/>} />
        <Route path ='/createuser' element = {<CompCreateUser/>} />
        <Route path ='/edituser/:id' element = {<CompEditUser/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
