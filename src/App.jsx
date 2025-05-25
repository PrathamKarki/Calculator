import { useState } from "react";

const Calculator = () =>{
  const symbols = ['+', '-', '*', '/', '.', '%'];

  const [result, setResult] = useState('');

  const buttons = [
    
    ['C','(', ')', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '%', '⌦'],
    ['=']
  ]

  const bracketsAndClear = ['C', '(', ')']

  
  return(
      <section className="main_container border-1 w-[450px] p-5  bg-[#32161F] text-white" >
        <div className="input_container  border-1 p-5 mb-3 bg-[#F0FFFF] mx-auto w-[394px]">
          <div className="inputField text-4xl text-right mr-2 text-black">0</div>
          </div>
          <div className="flex_calculator_container  p-2 mb-3 flex flex-wrap w-[100%] gap-[5px] text-black " >
            {buttons.map((item, id)=>{
              return item.map((value,idx)=>{
                return (
                <button className={` text-2xl w-[90px] h-[50px] grow border-white text-[#eee]   }
                 ${value === '=' ? 'bg-[#F13F3F]': value === '⌦' ? 'bg-[#1E90FF]': bracketsAndClear.includes(value) ? 'bg-[#1E90FF]' : symbols.includes(value) ? 'bg-[#FF8F1F]': 'bg-[#217C7E]' }`} key={idx}>{value}</button>
              )
              })
            })}
          </div>
        
      </section>

  )
}
export default Calculator;