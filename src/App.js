import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './components/pages/Dashboard'
import Users from './components/pages/Users'
import CreateUsers from './components/pages/CreateUsers'
import UpdateUsers from './components/pages/UpdateUsers';
import CreatePost from './components/pages/CreatePost';
import Post from './components/pages/Post';
import UpdatePost from './components/pages/UpdatePost';
import Tag from './components/pages/Tag';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import ImgurProvider from "./components/Context/ImgurContext";

function App() {

  return (
    <div className="App">
      <ImgurProvider>
         <BrowserRouter>
          <Routes>
               <Route path='/dasboard' element={<Dashboard/>}/>
               <Route path='/post' element={<Post/>}/>
               <Route path='/tag' element={<Tag/>}/>
               <Route path='/users' element={<Users/>}/>
               <Route path='/createUsers' element={<CreateUsers/>}/>
               <Route path='/createPost' element={<CreatePost/>}/>
               <Route path='/updateUsers/:_id' element={<UpdateUsers/>}/>
               <Route path='/updatePost/:_id' element={<UpdatePost/>}/>
               <Route path='/' element={<Signin/>}/>
               <Route path='/signup' element={<Signup/>}/>
          </Routes>
      </BrowserRouter>
      </ImgurProvider>
         
    </div>
  );
}

export default App;
