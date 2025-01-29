import Random from './components/Random';
import Tag from './components/Tag';
import './App.css'

function App() {

  return (
    <>
      <div className='w-full h-screen flex flex-col background overflow-y-auto items-center'>
        <h1 className='bg-white text-4xl font-bold rounded-lg  w-11/12 text-center mt-[40px] px-10'>RANDOM GIF</h1>
        <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
        </div>
      </div>
  
    </>
  )
}

export default App
