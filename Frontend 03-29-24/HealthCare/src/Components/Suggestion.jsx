import React from 'react'

import heading from "../assets/Heading.png"
import boy from "../assets/boy.png"
import group from "../assets/Group.png"

let listSuggestion = [
  "Can you suggest beginner-friendly exercises for home workouts?" ,
  "What are some effective stress-relief techniques?",
  "How can I improve my sleep quality?",
  "What are some healthy meal ideas for busy weekdays?",
  "What are the benefits of regular physical activity?",
]


function Suggestion() {
  return (
    <div
    
    className='flex h-[100%] flex-col overflow-hidden pl-[20px] py-[20px] w-[400px]'>
        <div><img src={heading} className='h-[] w-[]' /></div>
        <p className='text-white font-semibold text-[14px] pl-[8px]'>Popular Searches</p>
        <div
         style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(153, 153, 153, 0.25) 100%)',
          boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.08)",
          borderRadius: '12px',
          backdropFilter: "blur(50px)",
          "-webkit-backdrop-filter": "blur(50px)",
        }}
        className='w-[100%] flex justify-center items-center flex-col p-[12px] my-[16px]' >
          <img src={boy} alt='no' className='max-h-[150px] max-w-[150px]' />
          <p className='text-white text-center text-[10px] px-[24px] pb-[6px] '>Discover new insights or ask our AI a question to populate popular searches!</p>
        </div>
        <p className='text-white font-semibold text-[14px] pl-[8px]'>Quick Suggestion</p>
        <div
         style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(153, 153, 153, 0.25) 100%)',
          boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.08)",
          borderRadius: '12px',
          backdropFilter: "blur(50px)",
          "-webkit-backdrop-filter": "blur(50px)",
        }}
        className='flex grow w-[100%] p-[12px] overflow-y-auto no-scrollbar  flex-col my-[16px] '>
          
            {listSuggestion.map((list, ind) => (
                  <div key={ind} style={{borderRadius: '8px', }} className=' mb-[12px] p-[12px] bg-[#232D3F] w-[100%]'>
                    <p className='text-white text-[12px]'>{list}</p>
                  </div> 
            ))

            }
          

        </div>
        <div
         style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(153, 153, 153, 0.25) 100%)',
          boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.08)",
          borderRadius: '12px',
          backdropFilter: "blur(50px)",
          "-webkit-backdrop-filter": "blur(50px)",
        }}
        className='h-[70px] flex items-center justify-between px-[16px] py-[12px] flex-row w-[100%]'>
          <div className='flex flex-row items-center'>
            <div className='h-[42px] w-[42px] rounded-full bg-[#fff]'></div>
            <p className='text-white font-semibold text-[16px] pl-[12px]'>Tarang</p>
          </div>
          <div> 
            <img src={group} alt='no'></img>
          </div>
        </div>
    </div>
  )
}

export default Suggestion






{/* <div className='flex flex-col'>
                <div className='flex mt-[30px] rounded-[30px] flex-row'>
                    <img className='h-[50px]'  src={heading} alt='no-img'></img>
                </div>
               <div className='mr-[10vh] mb-[10px] ml-[30px]'>
                    <h1 className='text-white text-[12px] items-center mb-[10px]'>Popular Searches</h1>
                <div className='flex flex-col h-min items-center rounded-xl  bg-gradient-to-r from-[#FFFFFF] to-[#999999] opacity-[0.5]' >
                    <img src={boy} className='h-[100px]  w-[100px]' alt='no-img' />
                    <p className='p-[15px]'>Uh oh! It looks like there are no popular searches yet. Why not explore some trending health topics or ask our AI 
                      a question to discover new insights and information? Don't hesitate to start the 
                      conversation and help us populate the popular searches!</p>
                </div>
              </div>

               <div className='mr-[10vh] mb-[20px] ml-[30px]'>
                    <h1 className='text-white items-center text-[12px] mb-[10px]'>Quick Suggestions</h1>
                <div
                style={{boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.08)', borderRadius: 32, backdropFilter:'blur(50px)', '-webkit-backdrop-filter':'blur(50px)'}}
                className='flex flex-col h-min items-center rounded-xl  bg-[#FFFFFF] opacity-[0.25]' >
                    <img src={boy} className='h-[100px]  w-[100px]' alt='no-img' />
                    <p className='p-[15px]'>Uh oh! It looks like there are no popular searches yet. Why not explore some trending health topics or ask our AI 
                      a question to discover new insights and information? Don't hesitate to start the 
                      conversation and help us populate the popular searches!</p>
                </div>
              </div>
               
               <div className='flex flex-row py-[15px] mr-[10vh] bg-gradient-to-r  from-[#FFFFFF] to-[#999999] opacity-[0.5] rounded-xl items-center  ml-[30px]'>
                    <div className='h-[35px] w-[35px] bg-[#0000] opacity-5 '></div>
                    <div>
                      <h1>Tarang</h1>
                      <img src={group} />
                    </div>
              </div>
            </div> */}