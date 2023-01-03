import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {
    const Button1Foo = (subscriber:string, age: number)=>{
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber:string, age: number)=>{
        console.log(subscriber, age)
    }
    const Button3Foo = ()=>{
        console.log("yes i am")
    }
    return (
        <div className="App">
            <Button name="MyYoutubeChanel-1" callBack={()=>Button1Foo("I am Vasya", 21)}/>
            <Button name="MyYoutubeChanel-2" callBack={()=>Button2Foo("i am Ivan",22)}/>
            <Button name="Are you stupid button?" callBack={Button3Foo}/>
        </div>
    )
}

export default App;
