
import {useState} from 'react';

import Button from './Button';
import projectObjectService from "../services/projectObject"
import DropDownButton from './DropDownButton/DropDownButton';



const NewProjectDialog = ({projects, setProjects})=> {
    const [open, setOpen] = useState(false);
    const [newName, setNewName] = useState('')
    const [newDesc, setNewDesc] = useState('')
    
    const handleClickOpen = () => {
        if(open) {
            setNewName('')
            setNewDesc('')
        }
        setOpen(!open)
    }



    const handleNewName = (event) => {
        setNewName(event.target.value)
    }
    const handleNewDesc = (event) => {
        setNewDesc(event.target.value)
    }
    

    const handleClickCreate = () => {
    
        const newProjectObject = {id:  Math.floor(Math.random()*9999999), name: newName, description: newDesc.length > 0 ? newDesc : "Tämä lisättiin popupin kautta"}
        const existsAlready = projects.filter(eachProject => eachProject.name === newProjectObject.name)

        if (existsAlready.length > 0){
           alert('This project name is already in use')
        }
        else{  
            projectObjectService
                .create(newProjectObject)
                .then(returnedObject => {
                    setProjects(projects.concat(returnedObject))
                    setOpen(false)
                    setNewName('')
            })
        }

    }
    return (
        <>
            <Button text = "New Project" handleClick={handleClickOpen}/>
            <dialog open={open} onClose={handleClickOpen}>
                <>
                    <h1>Create a new project</h1>
                    <div>
                        Name: 
                        <input onChange = {handleNewName} value={newName} />
                    </div>
                    <div>
                        Description: 
                        <input onChange = {handleNewDesc} value={newDesc} />
                    </div>
                    <DropDownButton/>
                    <div>
                        <Button handleClick={handleClickOpen} text="cancel"/>
                        <Button text = "Create" handleClick={handleClickCreate}/>
                    </div>
                </>
            </dialog>
        </>
    )
}


export default NewProjectDialog