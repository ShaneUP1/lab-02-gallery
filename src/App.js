import React from 'react';
import Header from './Header.js';
import ImageItem from './ImageItem.js'
import images from './data.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageItem url={images[0].url}
        title={images[0].title}
        description={images[0].description}
        keyword={images[0].keyword}
        horns={images[0].horns} />

    </div>
  );
}

export default App;
