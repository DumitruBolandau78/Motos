const Footer = () => {
  return (
    <footer className="bg-[#202942]">
      <ul className="grid grid-cols-6 max-w-screen-xl mx-auto gap-7 py-14 items-center">
        <li className="justify-self-center"><img className="max-w-28 w-full" src="./images/companies/google.svg" alt="google" /></li>
        <li className="justify-self-center"><img className="max-w-28 w-full" src="./images/companies/amazon.svg" alt="amazon" /></li>
        <li className="justify-self-center"><img className="max-w-28 w-full" src="./images/companies/shopify.svg" alt="shopify" /></li>
        <li className="justify-self-center"><img className="max-w-28 w-full" src="./images/companies/lenovo.svg" alt="lenovo" /></li>
        <li className="justify-self-center"><img className="max-w-28 w-full" src="./images/companies/paypal.svg" alt="paypal" /></li>
        <li className="justify-self-center"><img className="max-w-28 w-full" src="./images/companies/spotify.svg" alt="spotify" /></li>
      </ul>
      <hr className="border-gray-700" />
      <div className="max-w-screen-xl mx-auto text-center text-white py-5">2024 Motos. Design with &#10084; by Shreethemes.</div>
    </footer>
  )
}

export default Footer