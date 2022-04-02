import { useState, useTransition } from "react";
import "./App.css";
import { List } from "./List";

const source = new Array(1200)
  .fill("")
  .map((_, i) => ({ id: i, name: `Item ${i + 1}` }));

const filterItems = (filter) => {
  return filter ? source.filter((i) => i.name.includes(filter)) : source;
};

function App() {
  console.log("render");
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0);

  const [isPending, startTransition] = useTransition();

  const items = filterItems(filter);

  //Only one render in sync mode in 18 and older versions
  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 2);
  };

  //Only on render in async mode in 18 React
  const handleClickAsync = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 2);
    }, 1000);
  };

  const changeHandler = (event) => {
    startTransition(() => {
      setFilter(event.target.value);
    });
    setFilter(event.target.value);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={handleClick}>Change count</button>
      <button onClick={handleClickAsync}>Change count Async</button>

      <input type="text" onChange={changeHandler} />
      {isPending && <h2>changing state...</h2>}
      <List items={items} />
    </div>
  );
}

export default App;
