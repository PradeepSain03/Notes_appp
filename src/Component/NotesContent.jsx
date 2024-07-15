import React, { useEffect, useRef } from "react";
import { CreateContext } from '../store/createContext';
import EditModal from "./editModal";
import { useContext, useState } from 'react';
export default function NotesContent({item,id1}) {
  
    const { Arr, input, product, sortInput ,fav,edit1} = useContext(CreateContext);
    const data = useContext(CreateContext);
    const[color1,setColor]=useState(false)
    const [id, setId] = useState(null)

    let dialog = useRef()
    function opemModal() {
        edit1(id1)
        dialog.current.open();
       
    }
    function handleColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        let color = `bg-[${bgColor}]`
        return color;

    }
    let ourColor = '';
    let content;
    
    let option;


function handleStar(){
    setColor((prev)=>!prev)
}

    
return (<>
   

   <EditModal ref={dialog} id={id} />
        
            <div className={option=handleColor()}>
                <div className="p-3">
                    <button onClick={() => { setId(id1); opemModal() }}><i class="fa-solid fa-pen-to-square md:ms-48 text-2xl"></i></button>
                    <h1 className="text-2xl">{item.heading}</h1>
                    <p className="text-lg">{item.description}</p>
                    <p className="text-lg">{item.date}</p>
                    <button onClick={ handleStar}>{color1 ?<i class="fa-solid fa-star  md:ms-48 text-2xl text-yellow-200 "></i> :<i class="fa-solid fa-star md:ms-48 text-2xl"></i> }</button>
                </div>
              
            </div>
        


</>)

}