import React, { useState, useEffect } from 'react';
import Heading from './components/heading.jsx';
import Loader from './components/loader.jsx';
import Post from './components/post.jsx';

function App() {

  const [ images, setImages ] = useState([]);

  const apiUrl = "https://api.unsplash.com/photos/?client_id=";
  const accessKey = process.env.REACT_APP_ACCESSKEY;


  fetch(`${apiUrl}${accessKey}`)
    .then(response => response.json())
    .then(data => setImages(data))
 

  return (
    <div className="App">
      <Heading />
      <Loader />
      <Post images={images}/>
    </div>
  );
}

export default App;
