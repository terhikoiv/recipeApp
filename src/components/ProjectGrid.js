import ProjectBox from './ProjectBox'
const ProjectGrid = ({projectObjects}) =>{
  console.log('projectgrid', projectObjects)
    return(
      <ul className = 'grid' >
        {projectObjects.map(
          obj =>
              <ProjectBox name={obj.name} description ={obj.description} key={obj.id}/>
        )}
        </ul>
    )
  }
  export default ProjectGrid