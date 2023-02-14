
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage"
import AddNewRecipe from './pages/AddNewRecipe'
import RecipeSearch from './pages/RecipeSearch'
import GroceryList from './pages/GroceryList'
import SignUp from './pages/SignUp'
import UserProfile from './pages/UserProfile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/grocerylist' element={<GroceryList/>} />
        <Route path='/newrecipe' element={<AddNewRecipe/>} />
        <Route path='/search' element={<RecipeSearch/>} />

        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/profile' element={<UserProfile/>} />
      </Routes>
    </Router>
  )
}

export default App