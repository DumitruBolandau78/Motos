import { useContext } from "react";
import { UtilsContext } from "../../Context/ContextProvider";

// eslint-disable-next-line react/prop-types
const HeaderLinkList = ({ direction, gap, setIsNavOpen }) => {
  const { setIsModalOpenContact } = useContext(UtilsContext);

  function mobileNavHandler() {
    if(setIsNavOpen) setIsNavOpen(false);
  }

  return (
    <>
      <ul className={'font-medium flex ' + direction + ' ' + gap}>
        <li><a onClick={mobileNavHandler} className="uppercase text-white" href={'#main'}>Home</a></li>
        <li><a onClick={mobileNavHandler} className="uppercase text-white" href={'#features'}>features</a></li>
        <li><a onClick={mobileNavHandler} className="uppercase text-white" href={'#projects'}>projects</a></li>
        <li><a onClick={mobileNavHandler} className="uppercase text-white" href={'#pricing'}>pricing</a></li>
        <li><a onClick={mobileNavHandler} className="uppercase text-white" href={'#team'}>team</a></li>
        <li><a onClick={mobileNavHandler} className="uppercase text-white" href={'#news'}>news</a></li>
        <li onClick={() => {setIsModalOpenContact(true); if(setIsNavOpen) setIsNavOpen(false)}} className="uppercase text-white cursor-pointer border-l-2 ps-3">contact</li>
      </ul>

    </>
  )
}

export default HeaderLinkList