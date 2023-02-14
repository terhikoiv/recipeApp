// this page opens to http://localhost:3000/

import Button from "../components/Button"
import ProjectGrid from "../components/ProjectGrid"
import NewProjectPopUp from "../components/NewProjectPopUp"
import ProjectObjectService from "../services/projectObject"
import logo from '../pictures/Feastful.png'

import { useState, useEffect } from "react"

const HomePage = () => {
  const [projects, setProjects] = useState([])

  // effect hook to get data from db.json in the beginning
  useEffect(() => {
    ProjectObjectService
      .getAll()
      .then(result => {
        setProjects(result)
      })
  }, [])




  const profileClick = () => {
    alert("profile")
  }
  const newRecipeClick = () => {
    alert("New recipe")
  }
  const SearchClick = () => {
    alert("Search page")
  }
  return (
    <>
      PlanApetit
      <div>
        <img src={logo} alt="logo"></img>
      </div>
      <NewProjectPopUp projects={projects} setProjects={setProjects} />
      <Button text="Profile" handleClick={profileClick} />
      <Button text="Add a new recipe" handleClick={newRecipeClick} />

      <Button text="Search for a recipe" handleClick={SearchClick} />


      <ProjectGrid projectObjects={projects} />



    </>
  )
}
//<h1>PlanApetit</h1>

export default HomePage

//