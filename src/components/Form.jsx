import React, { useState } from "react";

const Form = () => {
  let [state, setState] = useState({ name: "i", age: "j" });

  function handleChange(e) {
    setState((prevState) => {
      if (e.target.name === "name") {
        return { ...prevState, name: e.target.value };//...prevState is nothing but spread opreator


        
      } else if (e.target.name === "age") {
        return { ...prevState, age: e.target.value };
      }
      return prevState;
    });
  }

  return (
    <>
      <form className="reg-form">
        <div>
          <div>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="age"
              name="age"
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="reg-btm" type="submit">
              Register
            </button>
          </div>
        </div>
      </form>

      <h1>Name: {state.name}</h1>
      <h1>Age: {state.age}</h1>
    </>
  );
};

export default Form;
