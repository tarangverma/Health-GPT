import React, { useEffect, useState } from "react";
import bg from "../assets/bg.png";
import chat from "../assets/chat.png";
import trash from "../assets/trash.png";
import send from "../assets/send.png";
import Chats from "./Chats";
import axios from "axios";

function ChatSection() {
  const [sender, setSender] = useState("user");
  const [message, setMessage] = useState("");
  const [Delete, setDelete] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState("");
  const [DeleteReq, setDeleteReq] = useState(false);

  const postMessage = {
    sender: sender,
    message: message,
  };

  const sendMessage = async () => {
    await axios({
      method: "post",
      url: "http://localhost:3005/sendMessage",
      data: postMessage,
    }).then((response) => {
      if (response.status === 200) {
        console.log("success");
        console.log(response.data);
        setMessage("");
      } else {
        console.log("error");
      }
    });
  };

  const deleteChat = async () => {
    await axios({
      method: "delete",
      url: "http://localhost:3005/deleteChats",
    }).then((response) => {
      if (response.status === 200) {
        console.log("success");
        setDelete(true);
        console.log(response.data.message);
        setDeleteMsg(response.data.message);
      } else {
        console.log("error");
      }
    });
  };

  useEffect(() => {}, [message, Delete]);

  return (
        <div className="h-[100%] w-[100%] p-[20px]">
      <div
        style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(153, 153, 153, 0.25) 100% )',
          boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.08)",
          borderRadius: 32,
          backdropFilter: "blur(50px)",
          "-webkit-backdrop-filter": "blur(50px)",
        }}
        className="flex overflow-hidden  p-[20px] flex-col h-[100%] w-[100%]"
      >
         
          <div className="flex justify-end">
            <img onClick={() => { setDelete(true); deleteChat()}} className="cursor-pointer" src={trash} alt="no" />
          </div>
          <div className="flex flex-col overflow-y-auto  no-scrollbar grow  mt-[20px]">
            <Chats message={message} Delete={Delete} />
          </div>
          <div>
            <div className="flex bg-[#0F0F0F] items-center rounded-xl  py-[16px] px-[20px]  flex-row justify-between">
              <input
                type="text"
                placeholder="Ask GPT... "
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className=" outline-none bg-[#0F0F0F] w-full border-none text-[#fff]"
              ></input>
              <div>
                <img
                  onClick={sendMessage}
                  className="h-[20px] cursor-pointer w-[25px]"
                  src={send}
                  alt="no-img"
                ></img>
              </div>
            </div>
          </div>
        </div>
        </div>
     
  );
}

export default ChatSection;

//   <div className="flex relative w-[100%] ">
//     <div style={{boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.08)', borderRadius: 32, backdropFilter:'blur(50px)', '-webkit-backdrop-filter':'blur(50px)'}}
//     className=' py-[5vh] flex opacity-[0.25] relative w-[100%] h-[700px] bg-[#FFFFFF] rounded-xl my-[4vh]'   />
//         <div className=' absolute justify-between top-[66px] left-[30px]'>
//             <div className='flex  flex-row'>
//                 <img className=' mr-[10px] cursor-pointer  ' height={20} width={40} src={chat} alt='no-img'></img>
//                 <p className='text-[#000000] text-[25px]'>Chat</p>
//             </div>
//         </div>
//         <div className='flex absolute right-[30px] top-[66px]'>
//             <div onClick={() => {setDelete(true); deleteChat()} } className='flex border-[4px] cursor-pointer items-center border-[#000000] p-[10px] rounded-[30px] flex-row'>
//                 <img className=' mr-[10px] h-[25px] w-[20px] '  src={trash} alt='no-img'></img>
//                 <p className='text-[#000000]  text-[20px]'>Clear Chat</p>
//             </div>
//         </div>

//         {/* Delete Chat section */}

//         {Delete ?
//             <div className='flex bg-[#fff] z-10 flex-col absolute h-[20vh] items-center justify-center py-[10px] rounded-xl w-[50vh] left-[50vh]  top-[40vh]'>
//                 <p>{deleteMsg}</p>
//                 <button onClick={() => setDelete(false)} className='bg-[red] mt-[15px] cursor-pointer  py-[3px] px-[10px] rounded-xl'>close</button>
//             </div> : "" }

//         {DeleteReq ?
//             <div className='flex bg-[#fff] absolute h-[10vh] w-[30vh] top-[10vh]'>
//                 <p>{setDeleteReq}</p>
//             </div> : ""
//         }

//         {/* Chat section */}

//         <div className='flex absolute overflow-y-auto no-scrollbar h-[400px]  w-full top-[20vh] '>
//             <Chats message={message} delete={Delete}/>
//         </div>

//          {/* Input section  */}

//         <div className='absolute bottom-[10vh]  px-[4vh] w-full'>
//             <div className='flex bg-[#0F0F0F] items-center rounded-xl  py-[16px] px-[20px]  flex-row justify-between'>
//                 <input type='text' placeholder="Ask GPT... " value={message} onChange={(e) => {setMessage(e.target.value); }} className=' outline-none bg-[#0F0F0F] w-full border-none text-[#fff]'></input>
//                 <div><img onClick={sendMessage}   className='h-[20px] cursor-pointer w-[25px]'  src={send} alt='no-img'></img></div>
//             </div>

//         </div>
// </div>
