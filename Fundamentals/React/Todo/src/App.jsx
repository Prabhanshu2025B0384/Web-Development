import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './todo'


function App() {
  

  return (
    <>
    <Todo/>
      
    </>
  )
}

export default App






// import React, {useState, useEffect} from "react";

// function MyComponent() {

//     const [width, setWidth] = useState(window.innerWidth);
//     const [height, setHeight] = useState(window.innerHeight);

//     useEffect(() => {
//         window.addEventListener("resize", handleResize);
//         console.log("EVENT LISTENER ADDED");

//         return () => {
//             window.removeEventListener("resize", handleResize);
//             console.log("EVENT LISTENER REMOVED");
//         }
//     }, []);

//     useEffect(() => {
//         document.title = `Size: ${width} x ${height}`;
//     }, [width, height]);

//     function handleResize(){
//         setWidth(window.innerWidth);
//         setHeight(window.innerHeight);
//     }

//     return (<>
//         <p>Window Width: {width}px</p>
//         <p>Window Height: {height}px</p>
//     </>);
// }

// export default MyComponent;





// useContext() = React Hook that allows you to share values
//                            between multiple levels of components
//                            without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//		<Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//     import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);