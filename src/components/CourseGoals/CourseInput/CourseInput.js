import { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trimEnd().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  const validColor = !isValid ? "red" : "black";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: validColor }}>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{
            borderColor: validColor,
            backgroundColor: !isValid ? "salmon" : "transparent"
          }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
