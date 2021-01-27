import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';

// function Janu(){
//   return <h1>HELLO mera name ahmed raza hai</h1>
// }
// ReactDOM.render(
//   <Janu/>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// function Love(){
//   return <div>
//     <strong className="head">Hello</strong>
//    <h1 className="name">Mera name ahmed raza hai</h1>
//    <ul className="res">
//    <li >me hostel me parhta hu</li>
//    <li >me hostel me parhta hu</li>
//    <li >me hostel me parhta hu</li>
//    <li >me hostel me parhta hu</li>
//    <li >me hostel me parhta hu</li>
//    </ul>
//   </div>
// }
//  ReactDOM.render(
//    <Love/>,
//    document.getElementById('root')
//  );

function Mediacard(property){
  return <div>
    <h2>{property.name}</h2>
    <p>{property.body}</p>
    <img src = {property.imageUrl}/>
  </div>
}
ReactDOM.render(<Mediacard name = "flower" body = "This photo was taken in saadabad palace in Tehran, Iran. we were actually going to take some photos of the buildings, but then we encountered these flowers which were full of butterflies and they were just amazing to look at. and we ended up spending about 1 hour around these taking all sorts of images. they were just beautiful." imageUrl = "https://images.all-free-download.com/images/graphicthumb/beautiful_scenery_04_hd_pictures_166258.jpg"/>,document.getElementById('root'))