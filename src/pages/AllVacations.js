// Responsible for all the vacations we have

import { useState, useEffect } from "react";
//useEffect is a hook that allows you to run some code under some conditions - so it doesnt allow run

import VacationList from "../components/vacations/VacationList";

function AllVacationsPage() {
  //whenever we visit this page, we want fetch the data

  const [isLoading, setIsLoading] = useState(true); //start in the loading start then set to false once we have the data
  const [loadedVacations, setLoadedVacations] = useState([]); //initially it's empty, but we will overwrite it when we get the data in the backend

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-511-default-rtdb.firebaseio.com/vacations.json")
      .then((response) => {
        //return a promise from the actual response that we request from the database
        return response.json();
      })
      .then((data) => {
        //get the data and extract it

        const vacations = [];
        for (const key in data) {
          const vacation = {
            id: key,
            ...data[key],
          };

          vacations.push(vacation);
        }
        setIsLoading(false);
        setLoadedVacations(vacations);
      });
  }, []);
  //react will check the 2nd argument, if none then it will only run this component if vacation is rendered for the first time
  // you want to add an external dependencies into the 2nd argument
  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  //use state when we have a response data

  return (
    <section>
      <h1>All Vacations</h1>
      {/* In jsx you can render array */}
      {/* 
      {[<li>Item1</li>, <li>Item2</li>]} 
      <ul>
        {DUMMY_DATA.map((vacation) => {
          return <li key={vacation.id}>{vacation.title}</li>;
        })}
      </ul>
      */}

      <VacationList vacations={loadedVacations} />
    </section>
  );
}

export default AllVacationsPage;
