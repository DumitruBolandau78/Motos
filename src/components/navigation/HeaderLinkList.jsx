import { useState, useContext } from "react";
import { UtilsContext } from "../../Context/ContextProvider";

// eslint-disable-next-line react/prop-types
const HeaderLinkList = ({ direction, gap }) => {
  const [activeTab, setActiveTab] = useState('home');
  const activeLink = 'uppercase text-white';
  const inactiveLink = 'uppercase text-gray-500';
  const { setIsModalOpenContact } = useContext(UtilsContext);

  function activeLinkHandler(e) {
    setActiveTab(e.target.textContent.toLowerCase());
  }

  return (
    <>
      <ul className={'font-medium flex ' + direction + ' ' + gap}>
        <li><a onClick={activeLinkHandler} className={activeTab === 'Home'.toLowerCase() ? activeLink : inactiveLink} href={'#main'}>Home</a></li>
        <li><a onClick={activeLinkHandler} className={activeTab === 'features'.toLowerCase() ? activeLink : inactiveLink} href={'#features'}>features</a></li>
        <li><a onClick={activeLinkHandler} className={activeTab === 'projects'.toLowerCase() ? activeLink : inactiveLink} href={'#projects'}>projects</a></li>
        <li><a onClick={activeLinkHandler} className={activeTab === 'pricing'.toLowerCase() ? activeLink : inactiveLink} href={'#pricing'}>pricing</a></li>
        <li><a onClick={activeLinkHandler} className={activeTab === 'team'.toLowerCase() ? activeLink : inactiveLink} href={'#team'}>team</a></li>
        <li><a onClick={activeLinkHandler} className={activeTab === 'news'.toLowerCase() ? activeLink : inactiveLink} href={'#news'}>news</a></li>
        <li onClick={() => setIsModalOpenContact(true)} className="uppercase text-white cursor-pointer border-l-2 ps-3">contact</li>
      </ul>

    </>
  )
}

export default HeaderLinkList