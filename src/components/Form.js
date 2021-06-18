import React, { useState } from "react";

function Form({ handleFirstNameChange, handleLastNameChange, firstName, lastName}) {
  const [newsetter, setNewSetter] = useState(false);


  function handleNewsletterChange(event) {
    setNewSetter(event.target.checked);
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsetter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
