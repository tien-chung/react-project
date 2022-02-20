import VacationItem from "./VacationItem";
import styles from "./VacationList.module.css";

function VacationList(props) {
  return (
    <ul className={styles.list}>
      {props.vacations.map((vacation) => (
        <VacationItem
          key={vacation.id}
          id={vacation.id}
          image={vacation.image}
          title={vacation.title}
          address={vacation.address}
          description={vacation.description}
        />
      ))}
    </ul>
  );
}

export default VacationList;
