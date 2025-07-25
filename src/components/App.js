
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   const [input,setInput]=useState('');
//   const onAdd=(e)=>{
//     const value=e.target.value;
//     setInput(value);
//   }
//   const onClear=()=>{
//     setInput('');
//   }
//   return (
//     <div>
//        <p>Enter your name:</p>
//         <input value={input} onChange={onAdd} />
//        {!!input.length && <p>Hello {input}!</p>}
//         <button onClick={onClear}>Clear</button>
//     </div>
//   )
// }

// export default App


  import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [input,setInput] = useState('');
  const onInput = (e)=>{
      const {value} = e.target
    setInput(value)
  }
  const onClear = ()=>{
    setInput('')
  }
  
  return (
    <div>
      <p>Enter your name:</p>
    <input value={input} onChange={onInput} />
    {!!input.length&&<p>Hello {input}!</p>}
    <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default App
