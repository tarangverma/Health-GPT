import React, { useEffect, useState } from 'react'
import axios from 'axios'
import copy from "../assets/Copy.png"
import like from "../assets/Dislike.png"

function Chats(props) {

    
    const message = props.message;
    const Delete = props.delete;
    
    const getAllData = async () => {
        await axios({
            method: "get",
            url: "http://localhost:3005/getAllMessages",
        }).then((response) => {
            setChats(response.data);
            console.log(response.data);
        });
    };
    
    useEffect(() => {
        getAllData();
    }, [message, Delete]);


    const [chats, setChats] = useState([]);

    const chatData = chats.map((c) => {
        return c.message
    })

   
    
    return (
    <div className='flex flex-col  w-full'>
    { chats.map((c, ind) =>  (
       
        <div key={ind} className='flex flex-col  w-full'>
            <div className='flex justify-end  mb-[16px] mr-[20px]  w-full'>
                <div className='flex mr-[10px] h-max min-w-min max-w-[60vh] rounded-full text-[#fff] py-[5px] px-[12px] bg-[#010101] '>
                    <div className='text-center'><p>{c.message}</p></div>
                </div>
                <div className='rounded-full h-[32px] w-[32px] bg-[#fff]'></div>
            </div>
            <div 
            style={{background:'linear-gradient(90deg, rgba(1, 1, 1, 0.53) 0%, rgba(41.44, 36.95, 36.95, 0.53) 100%, rgba(103, 103, 103, 0.53) 100%)',
            boxShadow: '0px 0px 16.5px -8px rgba(0,0,0,0.25)',}}
            className='flex flex-col rounded-xl min-w-min max-w-[60vh] px-[15px] py-[12px] justify-start mb-[16px] mr-[20px]  w-full'>
                <div className='flex items-center flex-row'>
                <div className='rounded-full mr-[6px] h-[32px] w-[32px] bg-[#fff]'></div>
                <div className='flex  rounded-full text-[#fff] py-[5px] px-[12px] '>
                    <div className='text-center'><p>{c.reply}</p></div>
                </div>
                </div>
                <div className='flex mt-[6px] flex-row justify-between'>
                    <img src={like} className='pl-[50px] h-[20px] ' alt='no-img' />
                    <img src={copy} className=' h-[15px] ' alt='no-img' />
                </div>
            </div>
        </div>
    ))}
    </div>
    
    // <div className='flex justify-end mb-[30px] mr-[20px]  w-full'>
    //     <div className='flex mr-[10px] h-max min-w-min max-w-[60vh] rounded-full text-[#fff] py-[5px] px-[12px] bg-[#010101]'>
    //         <div className='text-center'><p>Hello what's your name? </p></div>
    //     </div>
    //     <div className='rounded-full h-[32px] w-[32px] bg-[#fff]'></div>
    // </div>
    // <div className='flex justify-start mb-[30px] mr-[20px]  w-full'>
    //     <div className='rounded-full mr-[10px] h-[32px] w-[32px] bg-[#fff]'></div>
    //     <div className='flex  rounded-full text-[#fff] py-[5px] px-[12px] bg-[#010101]'>
    //         <div className='text-center'><p>Sorry we are not live yet.</p></div>
    //     </div>
    // </div>
    // <div className='flex justify-end mb-[30px] mr-[20px]  w-full'>
    //     <div className='flex mr-[10px] h-max min-w-min max-w-[60vh] rounded-full text-[#fff] h-max w-[60vh] py-[5px] px-[30px] bg-[#010101]'>
    //         <div className='text-left'><p>an unknown printer took a galley of type and scrambled it to make a type specimen book</p></div>
    //     </div>
    //     <div className='rounded-full h-[32px] w-[32px] bg-[#fff]'></div>
    // </div>
    // <div className='flex justify-start mb-[30px] mr-[20px]  w-full'>
    //     <div className='rounded-full mr-[10px] h-[32px] w-[32px] bg-[#fff]'></div>
    //     <div className='flex  rounded-full text-[#fff] py-[5px] px-[12px] bg-[#010101]'>
    //         <div className='text-center'><p>Sorry we are not live yet.</p></div>
    //     </div>
    // </div>
    // <div className='flex justify-end mb-[30px] mr-[20px]  w-full'>
    //     <div className='flex mr-[10px] h-max min-w-min max-w-[60vh] rounded-full text-[#fff] py-[5px] px-[12px] bg-[#010101]'>
    //         <div className='text-center'><p>Hello</p></div>
    //     </div>
    //     <div className='rounded-full h-[32px] w-[32px] bg-[#fff]'></div>
    // </div>
    // <div className='flex justify-start mb-[30px] mr-[20px]  w-full'>
    //     <div className='rounded-full mr-[10px] h-[32px] w-[32px] bg-[#fff]'></div>
    //     <div className='flex  rounded-full text-[#fff] py-[5px] px-[12px] bg-[#010101]'>
    //         <div className='text-center'><p>Sorry we are not live yet.</p></div>
    //     </div>
    // </div>
    // <div className='flex justify-end mb-[30px] mr-[20px]  w-full'>
    //     <div className='flex mr-[10px] h-max min-w-min max-w-[60vh] rounded-full text-[#fff] py-[5px] px-[12px] bg-[#010101]'>
    //         <div className='text-center'><p>exact original form, accompanied 
    //             by English versions from the 1914 translation by H. Rackham.</p></div>
    //     </div>
    //     <div className='rounded-full h-[32px] w-[32px] bg-[#fff]'></div>
    // </div>
    // <div className='flex justify-start mb-[30px] mr-[20px]  w-full'>
    //     <div className='rounded-full mr-[10px] h-[32px] w-[32px] bg-[#fff]'></div>
    //     <div className='flex  rounded-full text-[#fff] py-[5px] px-[12px] bg-[#010101]'>
    //         <div className='text-center'><p>Sorry we are not live yet.</p></div>
    //     </div>
    // </div>
    // <div className='flex justify-end mb-[30px] mr-[20px]  w-full'>
    //     <div className='flex mr-[10px] h-max min-w-min max-w-[60vh] rounded-full text-[#fff] py-[5px] px-[12px] bg-[#010101]'>
    //         <div className='text-center'><p>Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are 
    //             also reproduced in their </p></div>
    //     </div>
    //     <div className='rounded-full h-[32px] w-[32px] bg-[#fff]'></div>
    // </div>
    // <div className='flex justify-start mb-[30px] mr-[20px]  w-full'>
    //     <div className='rounded-full mr-[10px] h-[32px] w-[32px] bg-[#fff]'></div>
    //     <div className='flex  rounded-full text-[#fff] py-[5px] px-[12px] bg-[#010101]'>
    //         <div className='text-center'><p>Sorry we are not live yet.</p></div>
    //     </div>
    // </div>
    // </div>
  )
}

export default Chats