import { useRef } from "react";

import Card from "../ui/Card";
import styles from "./NewVacationForm.module.css";

function NewVacationForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    //default: send request to the server
    //we want to prevent the default and run our own javascript logic
    //we want to send the request behind the scene so the page won't load
    event.preventDefault(); //this is vanilla js that react accept

    //need to read in the entered value
    const enteredTitle = titleInputRef.current.value; //for reading then use ref //for changing then use state
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    //creating a new object
    const vacationData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    //console.log(vacationData);
    props.onAddVacation(vacationData);
  }

  return (
    <Card>
      {/* Listen to the form by using onsubmit button  */}
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Vacation Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="image">Vacation Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={styles.actions}>
          {/* This button will submit this form */}
          <button>Add Vacation</button>
        </div>
      </form>
    </Card>
  );
}

export default NewVacationForm;
