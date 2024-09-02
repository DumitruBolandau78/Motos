// eslint-disable-next-line react/prop-types
const Modal = ({ children, closeModalHandler }) => {
    return (
        <div onClick={(e) => e.stopPropagation()}>
            <div className="modal-for-video fixed top-0 left-0 w-full h-full flex items-center justify-center cursor-auto"
                onClick={closeModalHandler}
                style={{ backgroundColor: 'rgba(0, 0, 0, .7)' }}>
                <div className="modal-content flex flex-col items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 cursor-pointer text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;