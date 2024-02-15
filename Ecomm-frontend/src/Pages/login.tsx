import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [gender, setgender] = useState("");
    const [date,setDate]= useState("");
  return (
    <div className='login'>
        <main>
            <h1 className='heading'>
                Login
            </h1>

            <div>
                <label >Gender</label>
                <select value={gender} onChange={(e)=>setgender(e.target.value)}>
                    <option value="">
                        Select Gender
                    </option> <option value="Male">
                        Select Gender
                    </option> <option value="Female">
                        Select Gender
                    </option>
                </select>
            </div>
            <div>
                <label>Date of birth</label>
                <input type="date" 
                value={date}  
                onChange={(e)=>setDate(e.target.value)} />
            </div>

            <div>
                <p>Already Signed In once</p>
                <button><FcGoogle/><span>Sign in with google</span></button>
            </div>
        </main>
    </div>
  )
}

export default Login