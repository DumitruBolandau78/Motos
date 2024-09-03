import { useRef, useState } from "react";
import Modal from "../components/Modal";
import VideoPlayer from "../components/VideoPlayer";
import BtnGetStarted from "../components/BtnGetStarted";
import Header from "../components/navigation/Header";
import GalleryList from '../components/gallery/GalleryList'
import { useContext } from "react";
import { UtilsContext } from "../Context/ContextProvider";
import PricingCardsList from "../components/PricingCardsList";
import EmployeeList from "../components/EmployeeList";
import NewsList from "../components/NewsList";
import Footer from "../components/navigation/Footer";

const HomePage = () => {
  const [isModalOpenPlayer, setIsModalOpenPlayer] = useState(false);
  const [isModalOpenImage, setIsModalOpenImage] = useState(false);
  const { url } = useContext(UtilsContext);

  const childRef = useRef(null);

  function closeModalHandler(event) {
    if (childRef.current && !childRef.current.contains(event.target)) {
      setIsModalOpenPlayer(false);
      setIsModalOpenImage(false);
    }
  }

  return (
    <div>
      <Header />
      <section id="main" className="bg-main flex items-center">
        <div className="max-w-screen-xl mx-auto w-full">
          <h2 className="text-5xl mb-10 text-white font-medium leading-[4rem]">
            Bluid your audiance <br /> and sale more
          </h2>
          <p className="text-2xl text-gray-400 leading-10">
            Launch your campaign and benefit from our expertise on designing{" "}
            <br /> and managing conversion centered tailwindcss html page.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <BtnGetStarted />
            <div
              className="flex items-center gap-4 text-gray-400 cursor-pointer"
              onClick={() => setIsModalOpenPlayer(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12 bg-green-500 p-2 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <p className="uppercase">watch now</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-main-secondary max-w-screen-xl mx-auto grid grid-cols-5 py-[6rem] gap-3">
        <div className="col-span-2 relative">
          <svg
            onClick={() => setIsModalOpenPlayer(true)}
            className="size-20 cursor-pointer text-green-500 -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] absolute rounded-full p-1 ps-3 bg-white flex items-center justify-center"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          <img
            className="max-h-[600px] object-cover object-center"
            src="./images/main-section-womens.jpg"
            alt="womens"
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center p-12">
          <h2 className="font-medium text-4xl mb-8 leading-[3.5rem]">
            Right Solutions Give You A <br />
            Hassle Free Business
          </h2>
          <p className="text-pretty mb-8 text-xl leading-8 text-gray-600">
            This prevents repetitive patterns from impairing the overall visual
            impression and facilitates the comparison of different typefaces.
            Furthermore, it is advantageous when the dummy text is relatively
            realistic so that the layout impression of the final publication is
            not compromised.
          </p>
          <ul className="">
            <li className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Beautiful and easy to understand animations</p>
            </li>
            <li className="flex gap-3 my-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Our Talented & Experienced Marketing Agency</p>
            </li>
            <li className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Beautiful and easy to understand animations</p>
            </li>
          </ul>
          <div className="flex gap-3 items-center mt-7 border-t-[1px] border-solid border-gray-200 pt-4 cursor-pointer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div>
              <p>Need More Help?</p>
              <p className="font-bold">Ask us your question</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100" id="features">
        <div className="grid grid-cols-2 items-center">
          <div className="p-10">
            <h2 className="font-medium text-3xl mb-4">Our Features</h2>
            <p className="text-xl text-gray-600">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered tailwindcss html page.
            </p>
            <div className="grid gap-10 grid-cols-2 mt-10 ">
              <div className="feature">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[70px] p-5 shadow-md text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                  />
                </svg>
                <h3 className="text-xl font-medium my-4">Financial Planning</h3>
                <p className="text-lg text-gray-500">
                  Horem ipsum dolor consectetuer Lorem simply dummy orem commo.
                </p>
              </div>
              <div className="feature">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[70px] p-5 shadow-md text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <h3 className="text-xl font-medium my-4">Quality Resourcing</h3>
                <p className="text-lg text-gray-500">
                  When an unknown printer took a galley of type and scrambled
                  it.
                </p>
              </div>
              <div className="feature">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[70px] p-5 shadow-md text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
                <h3 className="text-xl font-medium my-4">Business Services</h3>
                <p className="text-lg text-gray-500">
                  It has survived not only five centuries but leap in
                  typesetting.
                </p>
              </div>
              <div className="feature">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[70px] p-5 shadow-md text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
                <h3 className="text-xl font-medium my-4">
                  Software And Research
                </h3>
                <p className="text-lg text-gray-500">
                  It has survived not only five centuries but leap in
                  typesetting.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover object-center min-h-[100vh]"
              src="./images/section-features-collective.jpg"
              alt="collective people"
            />
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="max-w-screen-2xl mx-auto py-[80px] font-medium"
      >
        <h2 className="text-center text-4xl">Our Works & Projects</h2>
        <p className="text-lg text-center text-gray-500 mt-8 font-normal">
          Launch your campaign and benefit from our expertise on designing and
          managing <br /> conversion centered tailwindcss html page.
        </p>
        <GalleryList setIsModalOpenImage={setIsModalOpenImage} />
      </section>
      <section id="pricing" className="bg-gray-100 py-[80px]">
        <h2 className="text-center text-4xl font-medium">Pricing Plans</h2>
        <p className="text-lg text-center text-gray-500 mt-8 font-normal">
          Launch your campaign and benefit from our expertise on designing and
          managing <br /> conversion centered tailwindcss html page.
        </p>
        <PricingCardsList />
      </section>
      <div className="bg-team py-28 flex flex-col justify-center items-center text-center gap-5">
        <h2 className="text-4xl text-white font-medium">
          Ready to start your next web project now?
        </h2>
        <div className="text-gray-400 text-lg">
          Launch your campaign and benefit from our expertise on designing and
          managing <br /> conversion centered tailwindcss html page.
        </div>
        <BtnGetStarted />
      </div>
      <section id="team" className="text-center py-24 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-medium">Our Mind Power</h2>
        <p className="text-gray-500 mt-5 text-lg">
          Launch your campaign and benefit from our expertise on designing and
          managing <br /> conversion centered tailwindcss html page.
        </p>
        <EmployeeList />
      </section>
      <section id="news" className="text-center py-24 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-medium">Latest News</h2>
          <p className="text-gray-500 mt-5 text-lg">
            Launch your campaign and benefit from our expertise on designing and
            managing <br /> conversion centered tailwindcss html page.
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto mt-20 grid grid-cols-3 gap-8 text-start">
          <NewsList />
        </div>
      </section>
      <Footer />
      {isModalOpenPlayer && (<Modal closeModalHandler={closeModalHandler}><VideoPlayer childRef={childRef} /></Modal>)}
      {isModalOpenImage && (<Modal closeModalHandler={closeModalHandler}><img className='max-w-[700px] w-full' ref={childRef} src={url} alt="gallery-image" /></Modal>)}
    </div>
  );
};

export default HomePage;
