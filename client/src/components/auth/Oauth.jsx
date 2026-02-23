 import { GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { app } from './firebase';
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../../store/UserSlice';
import { useNavigate } from 'react-router'

const Oauth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const provider = new GoogleAuthProvider()
  const auth = getAuth(app)

  const handleGoogleClick = async() => {

    try{

      const result = await signInWithPopup(auth, provider)
      const res = await fetch('/api/auth/google', {
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL
        })
      })

      const data = await res.json()
      dispatch(signInSuccess(data))
      navigate('/')

    }catch(error) {
      console.log("could not sign in with google", error)
    }
  }

  return (
    <button
    onClick={handleGoogleClick}
      type="button" 
      className="w-full text-white h-10 mt-2 py-2 px-4 text-sm font-medium bg-green-400 border shadow border-gray-300  pr-8 rounded-xl outline-none "
    > Continue with google  </button>
  );
};

export default Oauth;
