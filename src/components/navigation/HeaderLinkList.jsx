import { useState } from "react"

const HeaderLinkList = () => {
    const [activeTab, setActiveTab] = useState('home');
    const activeLink = 'uppercase text-white';
    const inactiveLink = 'uppercase text-gray-500';

    function activeLinkHandler(e){
        setActiveTab(e.target.textContent.toLowerCase());
    }

    return (
        <ul className='flex items-center gap-7 font-medium'>
            <li><a onClick={activeLinkHandler} className={activeTab === 'Home'.toLowerCase()? activeLink : inactiveLink} href={'#main'}>Home</a></li>
            <li><a onClick={activeLinkHandler} className={activeTab === 'features'.toLowerCase()? activeLink : inactiveLink} href={'#features'}>features</a></li>
            <li><a onClick={activeLinkHandler} className={activeTab === 'projects'.toLowerCase()? activeLink : inactiveLink} href={'#projects'}>projects</a></li>
            <li><a onClick={activeLinkHandler} className={activeTab === 'pricing'.toLowerCase()? activeLink : inactiveLink} href={'#pricing'}>pricing</a></li>
            <li><a onClick={activeLinkHandler} className={activeTab === 'team'.toLowerCase()? activeLink : inactiveLink} href={'#team'}>team</a></li>
            <li><a onClick={activeLinkHandler} className={activeTab === 'news'.toLowerCase()? activeLink : inactiveLink} href={'#news'}>news</a></li>
            <li><a onClick={activeLinkHandler} className={activeTab === 'contact'.toLowerCase()? activeLink : inactiveLink} href={'#contact'}>contact</a></li>
        </ul>
    )
}

export default HeaderLinkList