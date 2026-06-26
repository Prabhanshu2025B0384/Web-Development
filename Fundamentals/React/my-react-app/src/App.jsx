import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Student from './student.jsx';
import List from './List.jsx'
import Button from './Button.jsx';
function App() {
    //  {/* const fruits = [{id: 1, name: "apple", calories: 95}, 
    //                          {id: 2, name: "orange", calories: 45}, 
    //                          {id: 3, name: "banana", calories: 105}, 
    //                          {id: 4, name: "coconut", calories: 159}, 
    //                          {id: 5, name: "pineapple", calories: 37}];

    // const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
    //                                    {id: 7, name: "celery", calories: 15}, 
    //                                    {id: 8, name: "carrots", calories: 25}, 
    //                                    {id: 9, name: "corn", calories: 63}, 
    //     
      //  {/* return( <>
      //               {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      //               {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
      //           </>); */}                               {id: 10, name: "broccoli", calories: 50}];
  return(
    <>
    <Header/>
<Food/>
<Food/>
<Student name="Prabhanshu Saena" age={18} student={false}/>
<Student name="Gujjar Badmash" age={18} student={true}/>
<Button/>
<Student/>

    <Footer/>




  
    </>
  );
  
}

export default App
