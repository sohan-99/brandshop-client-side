import { useContext } from "react"
import { AuthContext } from "./Provider/AuthProvider"

function App() {
const {user} =useContext(AuthContext)
console.log(user);

  return (
    <>

      <h1 className='text-center text-6xl'
      >Device dazzelle</h1>

    </>
  )
}

export default App
