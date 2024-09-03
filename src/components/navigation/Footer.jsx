const Footer = () => {
  return (
    <footer className="bg-[#202942]">
      <ul className="grid grid-cols-6 max-w-screen-xl mx-auto gap-36 py-14">
        <li><img src="./images/companies/google.svg" alt="google" /></li>
        <li><img src="./images/companies/amazon.svg" alt="amazon" /></li>
        <li><img src="./images/companies/shopify.svg" alt="shopify" /></li>
        <li><img src="./images/companies/lenovo.svg" alt="lenovo" /></li>
        <li><img src="./images/companies/paypal.svg" alt="paypal" /></li>
        <li><img src="./images/companies/spotify.svg" alt="spotify" /></li>
      </ul>
      <hr className="border-gray-700" />
      <div className="max-w-screen-xl mx-auto text-center text-white py-5">2024 Motos. Design with &#10084; by Shreethemes.</div>
    </footer>
  )
}

export default Footer