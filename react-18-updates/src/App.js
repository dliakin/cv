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
  const [isPending, startTransition] = useTransition();
  const items = filterItems(filter);

  const changeHandler = (event) => {
    // Mark any state updates inside as transitions
    startTransition(() => {
      // Transition: Show the results
      setFilter(event.target.value);
    });
  };

  return (
    <div className="container">
      <input type="text" onChange={changeHandler} />
      {isPending && <h2>changing state...</h2>}
      <List items={items} />
    </div>
  );
}

export default App;
