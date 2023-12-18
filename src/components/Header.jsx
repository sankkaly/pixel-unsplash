import React from 'react'
import { useState, useRef } from 'react'
import {BsDisplay} from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import Main from './Main';

function Header() {
    const [orientation, setOrientation] = useState("");
    const [query, setQuery] = useState(null);
    const input = useRef();

    function handleSubmit (e) {
      if(e.key === 'Enter'){
        setQuery(input.current.value);
      }
    };

    function handleChange () {
      setQuery(input.current.value);
      console.log(query)
    };

  return (
    <>
        <div className='py-2 flex justify-between w-full shadow-md '>
          <h1 className='text-2xl pl-2 md:text-4xl font-bold'>PIXEL</h1>
          <div className='flex mr-4 md:mr-32 h-8 md:h-12 w-[250px] sm:w-[400px] md:w-[500px] lg:w-[700px] rounded-md border border-black bg-gray-100'>
            <button className='rounded-l-md px-2 flex justify-center items-center' onClick={handleChange} ><GoSearch className='w-7 h-6'/></button>
            <input type="text" placeholder='Search Images' className='bg-gray-100 outline-none w-full sm:w-[300px] md:w-[400px] lg:w-[600px]' ref={input} onKeyDown={handleSubmit}/>
            <div className='rounded-r-md px-4 gap-4  hidden md:flex'>
            <button onClick={()=>{setOrientation('portrait'); console.log(orientation)}} className='flex justify-center items-center'><CiMobile3 className='h-6 w-7'/></button>
            <button onClick={()=>{setOrientation('landscape')}} className='flex justify-center items-center'><BsDisplay className='h-6 w-7 '/></button>
            </div>
          </div>
        </div>
        <Main query={query} orientation={orientation} />

    </>
  )
}

export default Header