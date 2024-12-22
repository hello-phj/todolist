import { useState } from "react";

function Input() {
  const [textValue, setTextValue] = useState;

  function addtext(event) {
    event.preventdefault();
    setTextValue(event.target.inputtext.value);
    console.log(textValue);
  }
  return (
    <div>
      <form onSubmit={addtext}>
        <button>+</button>
        <input type="text" name="inputtext" />
      </form>
    </div>
  );
}

export default Input;
