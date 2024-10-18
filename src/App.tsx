import { FormEvent, useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName'
import Resource from './components/Resource/Resource'
function App() {
const [Megacredit, setMegacredit] = useState(0)
const [MegacreditProduction, setMegacreditProduction] = useState(0)

const handleIncrement = (increment: number, resource: number, setResource: (value: number) => void) => {
  setResource(resource + increment);
};

const handlSubmit2=(e:FormEvent)=>{
    e.preventDefault()
    setMegacredit(Megacredit+MegacreditProduction)
}

  return (
    <form onSubmit={handlSubmit2} className="container">
        <PlayerName></PlayerName>
        <Resource 
        name='Megacredit' 
        amount={Megacredit} 
        onchange={(increment: number) => handleIncrement(increment, Megacredit, setMegacredit)}
       
        production={MegacreditProduction}
        onchangeProductivity={(increment: number) => handleIncrement(increment, MegacreditProduction, setMegacreditProduction)}
        ></Resource>
       <button type='submit' className='NextRound'>Next Round</button>
    </form>
  )
}

export default App
