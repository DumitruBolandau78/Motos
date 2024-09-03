import GalleryItem from "./GalleryItem";

// eslint-disable-next-line react/prop-types
const GalleryList = ({ setIsModalOpenImage }) => {
    const galleryItems = [
        {
            title: 'Mockup Collection',
            desc: 'Branding',
            dir: './images/gallery/gallery-1.jpg'
        },
        {
            title: 'Mockup Collection',
            desc: 'Designing',
            dir: './images/gallery/gallery-2.jpg'
        },
        {
            title: 'Abstract Images',
            desc: 'Abstract',
            dir: './images/gallery/gallery-3.jpg'
        },
        {
            title: 'Yellow bg with Books',
            desc: 'Books',
            dir: './images/gallery/gallery-4.jpg'
        },
        {
            title: 'Company V-card',
            desc: 'V-card',
            dir: './images/gallery/gallery-5.jpg'
        },
        {
            title: 'Mockup box with paints',
            desc: 'Photography',
            dir: './images/gallery/gallery-6.jpg'
        },
        {
            title: 'Coffee cup',
            desc: 'Cups',
            dir: './images/gallery/gallery-7.jpg'
        },
        {
            title: 'Pen and article',
            desc: 'Article',
            dir: './src/images/gallery/gallery-8.jpg'
        }
    ];
  return (
    <div className="gallery mt-[50px]">
        { galleryItems.map((item, idx) => <GalleryItem dir={item.dir} setIsModalOpenImage={setIsModalOpenImage} key={idx} title={item.title} desc={item.desc} />) }
    </div>
  )
}

export default GalleryList