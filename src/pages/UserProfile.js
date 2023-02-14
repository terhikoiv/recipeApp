// this page opens to http://localhost:3000/profile
import { useState, useEffect } from 'react';
import avatarImage from '../pictures/avatar.png';
import logo from '../pictures/Feastful.png'
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import userService from "../services/Users";

const Profile = () => {
	const [password, setPassword] = useState("");
	const [passwordAgain, setPasswordAgain] = useState("")
	const [user, setUser] = useState([])
	const [showPasswordField, setShowPasswordField] = useState(false)
	const [showEditButton, setShowEditButton] = useState(true)
	const [showPasswordChanged, setPasswordChanged] = useState(false)
	const [showInvalidPassword, setInvalidPassword] = useState(false)


	console.log("haetaan käyttäjiä ddb.jsonista.....")

	useEffect(() => {
		userService
			.getAll()
			.then(result => {
				setUser(result)
			})
	}, [])

	console.log("käyttäjiä", user)

	const editPassword = () => {
		setShowEditButton(false)
		setShowPasswordField(true)
	}
	const readPasswordChange = (event) => {
		setPassword(event.target.value)
		console.log("new password kenttä:", password)
	}
	const readPasswordChangeAgain = (event) => {
		setPasswordAgain(event.target.value)
		console.log("password again kenttä:", password)
	}

	//tähän pitää vielä lisätä  uuden salasanan vieminen tietokantaan (tai jsontiedostoon > mutta voiko samaan (Users.js?) vaikö uusi tiedosto)
	const handleClickSaveButton = (event) => {
		event.preventDefault()
		if (password.length == 0 || password != passwordAgain) {
			console.log("salasana ei kelvannut")
			setInvalidPassword(true)
		} else {
			console.log("uusi salasana tallennettu", { password })
			setInvalidPassword(false)
			setPasswordChanged(true)
			setTimeout(() => {
				setPasswordChanged(false)
			}, 3000)
			setShowPasswordField(false)
			setShowEditButton(true)
		}

	}

	//tähän kanssa muokkaus sitten kun on kirjautumistiedot > haetaan kirjautuneen käyttäjän käyttäjänimi
	const username = user.map((user) => {
		if (user.username === 'Terhi') {
			return user.username
		}
	}
	)



	return (
		<div >
			<div>
				<img src={logo} alt="logo"></img>
			</div>
			<NavBar />
			<div >
				<form style={{ textAlign: "center", paddingTop: "5%" }}>
					<img src={avatarImage} alt="" style={{ width: "10%", borderRadius: "50%" }} />
					<div style={{ display: "grid", gridTemplateColumns: "15% 15%", justifyContent:"center"}}>
						<div><p>Username</p></div>
						<div><p>{username}</p></div>
						{showPasswordField ? <Password password={password} setPassword={setPassword} handleClickSaveButton={handleClickSaveButton} readPasswordChange={readPasswordChange} readPasswordChangeAgain={readPasswordChangeAgain} /> 
						: <p>Password</p>}
					</div>	
				</form>
				{showPasswordChanged ? <PasswordChanged password={password} /> : null}
				{showInvalidPassword ? <InvalidPassword /> : null}
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					{showEditButton && <Button text="Edit password" handleClick={editPassword} />}
				</div>
			</div>
		</div>
	)
}
//käytetty ylempänä valmista button komponenttia
//{showEditButton && <EditButton editPassword={editPassword} />}


const Password = (props) => {
	return (
		<div>
			<input
				type="text"
				placeholder='New password'
				//value={props.password}
				onChange={props.readPasswordChange}
			/>
			<br></br>

			<input
				type="text"
				placeholder='Password again'
				onChange={props.readPasswordChangeAgain}
			/>

			<br></br>
			<button onClick={props.handleClickSaveButton}>Save new password</button>
		</div>
	)
}

const EditButton = (props) => {
	return (
		<button onClick={props.editPassword}>Edit password</button>
	)
}

const PasswordChanged = (props) => {
	return (
		<p style={{ textAlign: "center" }}>Password changed! New password is {props.password}</p>
	)
}

const InvalidPassword = () => {
	return (
		<p style={{ textAlign: "center" }}>Password is invalid. Check that both fields have the same password.</p>
	)
}

export default Profile
