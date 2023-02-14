import Button from "./Button"
const ProjectBox = ({name, description}) => {
    const groceryClick = () => {
      alert("Grocery list opens")
    }
    const mealPlanClick = () => {
      alert("Meal plan opens")
    }
    const newPlanClick = () => {
      alert("New planing page opens")
    }
    return (
      <li className="grid-item">
        <article>
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <div>
              <Button handleClick = {groceryClick} text = "Grocery list"/>
            </div>
            <div>
              <Button handleClick = {mealPlanClick} text = "Meal planing"/>
            </div>
            <div>
              <Button handleClick = {newPlanClick} text = "New meal plan"/>
            </div>
          </div>
          </article>
      </li>
    )
  }

  
export default ProjectBox