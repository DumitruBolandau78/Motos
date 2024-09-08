import { useContext } from "react";
import { UtilsContext } from "../Context/ContextProvider";

const BtnGetStarted = () => {
  const { setIsModalOpenContact } = useContext(UtilsContext);

  return <button onClick={() => setIsModalOpenContact(true)} className='bg-green-500 text-white py-2 px-7 text-xl rounded-md pb-3'>Get Started</button>
}

export default BtnGetStarted;