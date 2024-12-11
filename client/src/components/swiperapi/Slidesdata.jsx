import imgOne from '../../assets/images/swiper/one.jpg'
import twoOne from '../../assets/images/swiper/two.jpg'
import threeOne from '../../assets/images/swiper/three.jpg'
import Watchswiper from '../Watchswiper'
const ParentComponent = () => {
  // Define the slides data
  const slidesData = [
    {
      image: imgOne,
      altText: 'Slide 1',
      category: 'Fashion',
      title: 'Some Content 1',
      buttonText: 'See Videos'
    },
    {
      image: twoOne,
      altText: 'Slide 2',
      category: 'Technology',
      title: 'Some Content 2',
      buttonText: 'See More'
    },
    {
      image: threeOne,
      altText: 'Slide 3',
      category: 'Travel',
      title: 'Some Content 3',
      buttonText: 'Learn More'
    }
  ]

  return <Watchswiper slides={slidesData} />
}

export default ParentComponent
