import PricingCard from "./PricingCard"

const PricingCardsList = () => {
    const servicesPricing = [
        {
            type: 'Free',
            desc: 'For individuals looking for a simple Startups solution',
            price: '$0',
            howLong: 'mo',
            domains: '1 Domains',
            fileUpload: '1 GB File upload',
            storage: '2 GB Secure storage',
            bandwidth: 'Unlimited bandwidth',
            isUnlimitedBandwidth: false
        },
        {
            type: 'Startups',
            desc: 'For individuals looking for a simple Startups solution',
            price: '$9',
            howLong: 'mo',
            domains: '5 Domains',
            fileUpload: '2 GB File upload',
            storage: '20 GB Secure storage',
            bandwidth: 'Unlimited bandwidth',
            isUnlimitedBandwidth: false
        },
        {
            type: 'Business',
            desc: 'For individuals looking for a simple Startups solution',
            price: '$39',
            howLong: 'mo',
            domains: '10 Domains',
            fileUpload: '5 GB File upload',
            storage: '50 GB Secure storage',
            bandwidth: 'Unlimited bandwidth',
            isUnlimitedBandwidth: false
        },
        {
            type: 'Premium',
            desc: 'For individuals looking for a simple Startups solution',
            price: '$99',
            howLong: 'mo',
            domains: '50 Domains',
            fileUpload: '10 GB File upload',
            storage: '200 GB Secure storage',
            bandwidth: 'Unlimited bandwidth',
            isUnlimitedBandwidth: true
        }
    ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto mt-20">
        { servicesPricing.map((serv, i) => <PricingCard key={i} {...serv} />) }
    </div>
  )
}

export default PricingCardsList