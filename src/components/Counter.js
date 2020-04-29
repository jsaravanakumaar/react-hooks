import React, {useState, useEffect} from 'react';

function Counter() {
  const [limit, setLimit] = useState(100);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.info("called once, replacement of componentDidMount");
  }, []);

  useEffect(() => {
    console.info("called always,");
  });

  useEffect(() => {
    console.info("Called only when limit changes.  limit: " + limit + ", counter: " + counter);
  }, [limit]);

  useEffect(() => {
    console.info("Called only when counter changes.  limit: " + limit + ", counter: " + counter);
  }, [counter]);

  let increaseCounter = function () {
    setCounter(counter + 1);
    if (counter % 5 === 0)
      setLimit(limit + 1);
  }

  let decreaseCounter = function () {
    setCounter(counter - 1);
    if (counter % 5 === 0)
      setLimit(limit - 1);
  }

  return (
    <div className="counter">
      <h3>Counter: {counter}</h3>
      <h3>New limit: {limit}</h3>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
}

export default Counter;
