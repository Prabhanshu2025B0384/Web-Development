import Card from "./Card.jsx"
import Button from "./Buttons/button.jsx"
import Suka from "./Suka.jsx";
import Color from "./Color.jsx";
function App() {
  return(

  
  <>
  <Card></Card>
  <Card></Card>
  <Button></Button>
  <Suka/>
  <Color/>
  </>);
}

export default App

// import React, { useState } from 'react';

// function MyComponent(){

//     const [car, setCar] = useState({year: 2024, 
//                                                            make: "Ford", 
//                                                            model: "Mustang"});

//     function handleYearChange(event){

//         setCar(c => ({...c, year: event.target.value}));
//     }
//     function handleMakeChange(event){

//         setCar(c => ({...c, make: event.target.value}));
//     }
//     function handleModelChange(event){

//         setCar(c => ({...c, model: event.target.value}));
//     }
   
//     return (<div>
//                 <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
                
//                 <input type="number" value={car.year} onChange={handleYearChange}/><br/>
//                 <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
//                 <input type="text" value={car.model} onChange={handleModelChange}/><br/>
//             </div>);
// }
// export default MyComponent




// import React, { useState } from 'react';

// function MyComponent() {

//     const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

//     function handleAddFood(){

//         const newFood = document.getElementById("foodInput").value;
//         document.getElementById("foodInput").value = "";
        
//         setFoods(f => [...f, newFood]);
//     }

//     function handleRemoveFood(index){
        
//         setFoods(foods.filter((_, i) => i !== index));
//     }

//     return (<div>
//                 <h2>List of Food</h2>
//                 <ul>
//                     {foods.map((food, index) => 
//                     <li key={index} onClick={() => handleRemoveFood(index)}>
//                         {food}
//                     </li>)}
//                 </ul>
//                 <input type="text" id="foodInput" placeholder="Enter food name"/>
//                 <button onClick={handleAddFood}>Add Food</button>
//             </div>);
// }

// export default MyComponent;













// import React, { useState } from 'react';

// function MyComponent() {

//     const [cars, setCars] = useState([]);
//     const [carYear, setCarYear] = useState(new Date().getFullYear());
//     const [carMake, setCarMake] = useState("");
//     const [carModel, setCarModel] = useState("");

//     function handleAddCar(){

//         const newCar = {year: carYear, 
//                                       make: carMake, 
//                                       model: carModel};

//         setCars(c => [...c, newCar]);

//         setCarYear(new Date().getFullYear());
//         setCarMake("");
//         setCarModel("");
//     }

//     function handleRemoveCar(index){
//         setCars(c => c.filter((_, i) => i !== index));
//     }

//     function handleYearChange(event){
//         setCarYear(event.target.value);
//     }

//     function handleMakeChange(event){
//         setCarMake(event.target.value);
//     }

//     function handleModelChange(event){
//         setCarModel(event.target.value);
//     }

//     return (<div>
//                 <h2>List of Car Objects</h2>
//                 <ul>
//                     {cars.map((car, index) => 
//                         <li key={index} onClick={() => handleRemoveCar(index)}>
//                             {car.year} {car.make} {car.model}
//                         </li>)}
//                 </ul>

//                 <input type="number" value={carYear} onChange={handleYearChange}/><br/>
//                 <input type="text" value={carMake} onChange={handleMakeChange}
//                        placeholder="Enter car make"/><br/>
//                 <input type="text" value={carModel} onChange={handleModelChange}
//                        placeholder="Enter car model"/><br/>
//                 <button onClick={handleAddCar}>Add Car</button>
//             </div>);
// }

// export default MyComponent;