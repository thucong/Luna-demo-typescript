import { ChangeEvent, useState, useEffect } from "react";
import Header from "./Header";
import Product from "./Product";

const Index = () => {
  const [name, setName] = useState<string>("Sneaker");

  const onChangeName = (event: ChangeEvent<{ value: unknown }>) => {
    setName(event.target.value as string);
  };

  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="group">
      <div className="container">
        <div className="header-title">
          <Header name={name} />
          <select value={name} onChange={onChangeName}>
            <option value="Sneaker">Sneaker</option>
            <option value="Shirt">Shirt</option>
            <option value="Jean">Jean</option>
          </select>
        </div>
        <div className="time">Time: {time.toUTCString()}</div>
        <hr />
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
};
export default Index;
