import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
}

export default Meals;
