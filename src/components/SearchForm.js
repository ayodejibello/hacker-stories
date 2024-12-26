import { useState } from "react";
import "./form.css";
const SearchForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  //
  const getInputValue = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  //
  const getItem = () => {
    if (inputValue.trim()) {
      let listItem = inputValue;
      console.log("this is a list Item" + listItem);
      setInputValue("");
      props.onFinished(listItem);
    }
  };
  //
  return (
    <div className="form">
      <input onChange={getInputValue} value={inputValue} />
      <button onClick={getItem}>Add to list</button>
    </div>
  );
};
export default SearchForm;
