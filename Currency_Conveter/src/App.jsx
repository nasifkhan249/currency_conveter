import axios from "axios";
import { useEffect, useState } from "react";
import InputField from "./components/inputField/InputField";


const App = () => {
  const[amount,setAmount]=useState(1);
  const[toCur,setToCur]=useState("EUR");
  const[fromCur,setFromCur]=useState("USD");
  const[converted,setConverted]=useState("");
  const[isLoading,setIsLoading]=useState(false);

  const convert = async ()=>{
    setIsLoading(true);
    const {data} = await axios.get(`https://api.frankfurter.app/latest?amount=${amount}&to=${toCur}&from=${fromCur}`);
    console.log(data);
    setConverted(data.rates[toCur]);
    setIsLoading(false);
  }


  useEffect(
    ()=>{
      if(fromCur===toCur){
        return setConverted(amount);
      }
      convert();
  },
  [amount,toCur,fromCur]
);
  return (
    <div>
        <InputField amount={amount} onSetAmount={setAmount}
        toCur={toCur} onSetToCur={setToCur} fromCur={fromCur} onSetfromCur={setFromCur} converted={converted} isLoading={isLoading}/>
    </div>
  );
};

export default App;