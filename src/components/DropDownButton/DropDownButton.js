import { useState, cloneElement, useEffect } from "react";
import './DropDownButton.css';
import CheckList from "../CheckList/CheckList";
//import userService from "../../services/Users";

const DropDownButton = () => {
  
  /* Tässä ajatuksena on luoda käyttäjän kavereista lista projektin jäsenien lisäämiseksi dropdown listaan
    Keskeneräistä on myös valittujen nollaaminen 
  const [user, setUser] = useState()
  const [allUsers, setAllUsers] = useState()
  const id = 1


  useEffect(() => {
    userService
      .getAll()
      .then(result => {
        setAllUsers(result)
        setUser(result.filter(user => user.id === id)[0])

      })
  }, [])
  console.log("antin kavereita ovat ", user.friends)
*/
  const participants = ['Antti','Moona','Terhi', 'Minna']

  const [checked, setChecked] = useState([])
  return (
    <Dropdown
      trigger={<button>Add participants</button>}
      participants={participants}
      checked={checked} 
      setChecked={setChecked}
    />
  );
};

const Dropdown = ({ trigger, participants,checked, setChecked}) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="dropdown">
      {cloneElement(
        trigger, 
        { onClick: handleOpen}
      )}
      {open ? <CheckList participants={participants} checked={checked} setChecked={setChecked} /> : null}
    </div>
  )
}

export default DropDownButton