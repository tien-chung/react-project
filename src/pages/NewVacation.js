// list of all new vacations

import { useNavigate } from "react-router-dom";

import NewVacationForm from "../components/vacations/NewVacationForm";

function NewVacationPage() {
  const navigate = useNavigate();

  function addVacationHandler(vacationData) {
    //from firebase
    fetch("https://react-511-default-rtdb.firebaseio.com/vacations.json", {
      method: "POST", //get is the default
      body: JSON.stringify(vacationData), //json format array into a string
      headers: {
        "Content-Type": "application/json",
      },
    })
      //if fetching is successful then navigate back "home"
      .then(() => {
        navigate("/");
      });
  }

  return (
    <section>
      <h1>Add New Vacation</h1>
      <NewVacationForm onAddVacation={addVacationHandler} />
    </section>
  );
}

export default NewVacationPage;
