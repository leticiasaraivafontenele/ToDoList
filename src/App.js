import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/container';
import Home from './pages/Home'
import NewTodo from './pages/NewTodo'
import EditTodo from './pages/EditTodo'
import MyTodos from './pages/MyTodos'
import Footer from './components/Footer/Footer'

import { useStoreActions } from './services/store/hooks';
import { useEffect } from 'react';

function App() {

  const fetchTodo = useStoreActions((actions)=>actions.fetchTodos)
  useEffect(()=>{
      fetchTodo()
  },[fetchTodo])

  return (
    <HashRouter>
      <Navbar/>
      <Container customClass="minheight">
        <Routes>
          <Route exact path='/' element={<Home/>}>
          </Route>
          <Route path='/newtodo' element={<NewTodo/>}>
          </Route>
          <Route  path='/edittodo:id' element={<EditTodo/>}>
          </Route>
          <Route  path='/mytodos' element={<MyTodos/>}>
          </Route>
        </Routes>
      </Container>
      {/* <Footer/> */}
    </HashRouter>
  );
}

export default App;
