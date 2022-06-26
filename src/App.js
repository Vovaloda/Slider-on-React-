import Slider from "./components/Slider";
import firstPng from './slides/1.png'
import secondPng from './slides/2.png'
import thirdPng from './slides/3.png'

function App() {

  const slides = [
    {
        img: firstPng,
        text: 'Caption Text 1'
    },
    {
        img: secondPng,
        text: 'Caption Text 2'
    },
    {
        img: thirdPng,
        text: 'Caption Text 3'
    },
  ];

  return (
    <Slider 
      slides={slides} 
      pagination={true}
      auto={true}
      delay={1500}
      loop={true}
      stopMouseHover={true}
    />
  );
}

export default App;
