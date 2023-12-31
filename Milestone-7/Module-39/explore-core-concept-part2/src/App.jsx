import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button two clicked')
  }

  const addToFive = (num) =>{
    alert(num + 2);
  }

  return (
    <>
      <h3>React Core Concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click Me 2</button>

      <button onClick={() => { alert('Button third Clicked') }}>Click Me 3</button>

      <button onClick={() => addToFive(3)}>Click Me 3</button>
    </>
  )
}

export default App
