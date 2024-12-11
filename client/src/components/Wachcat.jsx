import Watchcatprops from './Watchcatprops'
import one from '../assets/images/watchcat/one.jpg'
import two from '../assets/images/watchcat/two.jpg'
const Wachcat = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-4xl font-semibold'>Browse by category</h1>

      <div className='grid mt-10 grid-cols-5 gap-6'>
        <Watchcatprops img={one} catTitle = "Icecream" />
        <Watchcatprops img={two} catTitle = "Icecream" />
        <Watchcatprops img={one} catTitle = "Icecream" />
        <Watchcatprops img={one} catTitle = "Icecream" />
        <Watchcatprops img={one} catTitle = "Icecream" />
        <Watchcatprops img={one} catTitle = "Icecream" />
        <Watchcatprops img={one} catTitle = "Icecream" />
        <Watchcatprops img={one} catTitle = "Icecream" />
        <Watchcatprops img={one} catTitle = "Icecream" />
        <Watchcatprops img={one} catTitle = "Icecream" />
      </div>
    </div>
  )
}

export default Wachcat
