import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCardItem = ({ imgUrl, title, desc, path }) => {
  return (
    <div className="shadow-sm bg-white">
      <div>
        <img src={imgUrl} alt="news" />
      </div>
      <div className="p-7">
        <h3 className="font-menium text-lg font-medium">{title}</h3>
        <p className="text-gray-500 my-3">{desc}</p>
        <Link className="flex gap-2 items-center" to={path}>Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        </Link>
      </div>
    </div>
  )
}

export default NewsCardItem