import './App.css'
import ChatSection from './Components/ChatSection'
import Suggestion from './Components/Suggestion'

function App() {
  

  return (
    <div className='flex h-[100vh] w-[100%] flex-row bg-gradient-to-r from-[#00011E] to-[#014754]'>
      <Suggestion />
      <ChatSection />
    </div>
  )
}

export default App
