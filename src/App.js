import SearchForm from "./components/SearchForm";
import "./components/wrapper.css";
import { useState } from "react";

const App = () => {
  const [list, updateList] = useState([]);
  const passItem = (item) => {
    updateList([...list, item]);
    console.log(list);
  };
  const deleteItem = (index) => {
    const newList = list.filter((_, i) => {
      return i !== index;
    });
    updateList(newList);
  };
  return (
    <div className="wrapper">
      <SearchForm onFinished={passItem} />
      <div>
        {list.map(function (item, index) {
          return (
            <div className="list-row">
              <span key={index}>{item}</span>
              <button onClick={() => deleteItem(index)} className="delete-btn">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
