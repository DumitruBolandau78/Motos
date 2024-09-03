import HeaderLinkList from "./HeaderLinkList";

const Header = () => {
    return (
        <header className='fixed top-0 left-0 right-0 bg-gray-900 z-50'>
            <div className="flex justify-between items-center py-4 max-w-screen-xl mx-auto">
                <div className="logo">
                    <img src={'./images/logo.png'} alt="logo" />
                </div>
                <HeaderLinkList />
            </div>
        </header>
    )
}

export default Header