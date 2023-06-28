
import { auth,provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
function Signin() {

  // const navigate = useNavigate()
  const [state,dispatch] = useStateValue()

   const signinwithGoogle =()=>{
    signInWithPopup(auth, provider).then((result)=>{
      // const user = result.user;
          dispatch({type:actionTypes.SET_USER, user: result.user})
        //  navigate('/home')
         
     })
   }
  return (
    
    <div className='login-container'>
      <h2 >Sign-in with Google To Containe</h2>
       <div className='button button--flex' onClick={signinwithGoogle}  >
          <span>Sign In With Google</span>
       </div>
    
    </div>
  )
}

export default Signin
