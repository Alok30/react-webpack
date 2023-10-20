import React, { useState } from "react";

const InputSearch = () => {
  const [inputSearch, setInputSearch] = useState("");

  const debounce = (fn, delay) => {
    console.log(delay)
    let timer;
    return function(...args){
        console.log(args)
        if(timer) clearTimeout(timer);
        timer=setTimeout(()=>{
            fn(...args);
        },delay)
    }
  };

  const setInputText = (e) => {
    debounce(setInputSearch(e.target.value),1000);
  };

  return (
    <input
      placeholder="Hey Search Something"
      value={inputSearch}
      onChange={(e) => setInputText(e)}
    />
  );
};

export default InputSearch;
