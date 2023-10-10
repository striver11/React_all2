import React, { useState } from "react";

const FormOnSubmit = () => {
  let [state, setState] = useState({ name: "i", age: "j" });
  let [newstate,setNewState]=useState(state)

  function handleChange(e) {
    setState((prevState) => {
      if (e.target.name === "name") {
        return { ...prevState, name: e.target.value };//...prevState is nothing but spread opreator


        
      } else if (e.target.name === "age") {
        return { ...prevState, age: e.target.value };
      }
      
    })
   
  }
  function handleSubmit(e){
    setNewState(state)
    e.preventDefault()
}
  return (
    <>
      <form className="reg-form" onSubmit={handleSubmit}>
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
              submit    
            </button>
          </div>
        </div>
      </form>

      <h1>Name: {newstate.name}</h1>
      <h1>Age: {newstate.age}</h1>
    </>
  );
};

export default FormOnSubmit;
