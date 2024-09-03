import NewsCardItem from "./NewsCardItem";

const NewsList = () => {
  const newsListCards = [
    {
      imgUrl: "./src/images/news/news-1.jpg",
      title: 'Building Your Corporate Identity from Motos',
      desc: 'The most well-known dummy text is the Lorem Ipsum, in the 16th century.',
      path: '/news/corporate-identity'
    },
    {
      imgUrl: "./src/images/news/news-2.jpg",
      title: 'The Dark Side of Overnight Success',
      desc: 'The most well-known dummy text is the Lorem Ipsum, in the 16th century.',
      path: '/news/overnight-success'
    },
    {
      imgUrl: "./src/images/news/news-3.jpg",
      title: 'The Right Hand of Business IT World',
      desc: 'The most well-known dummy text is the Lorem Ipsum, in the 16th century.',
      path: '/news/business-iT'
    }
  ]
  return newsListCards.map((item, i) => <NewsCardItem key={i} {...item} />);
}

export default NewsList