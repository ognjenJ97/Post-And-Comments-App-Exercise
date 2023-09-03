import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Posts from './Posts';
import { Navigate } from 'react-router-dom';
import SinglePost from './SinglePost';

function App() {

  const message : string = 'Hello world';

  console.log(`${message}-App component`)

  return (

    <div className="App">
      <Routes>
       <Route path="/" element={<Navigate to="/posts" />} />
       <Route path="/posts" element={<Posts message={message} />} />
       <Route path="/post/:id" element={<SinglePost message={message} />} />
      </Routes>
    </div>
  );
}

export default App;
