import gsap from 'gsap';
import { useEffect } from 'react';
import Banner from './components/banner';
import Cases from './components/cases';
import Header from './components/header';
import IntroOverlay from './components/introOverlay';
import './styles/App.scss';

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    gsap.to('body', {css: {visibility: 'visible'}, duration: 0})

    // timeline
    const tl = gsap.timeline()

    tl.from('.main .line span',{
      y:100,
      delay: 1,
      skewY: 7,
      duration: 1,
      stagger: {
        amount: .3
      }
    }).to('.overlay-top', {
      height: 0,
      ease: 'expo2.inOut',
      stagger: {
        amount: .5
      },
      delay: 0,
      duration: 1.2
    }).to('.overlay-bottom', {
      width: 0,
      ease: 'expo2.inOut',
      stagger: {
        amount: .5
      },
      delay: -.5,
      duration: 1.2
    }).to('.intro-overlay', {
      pointerEvents: 'none',
      duration: 0
    })

  },[])

  return (
    <div className='App'>
      <IntroOverlay/>
      <Header/>
      <Banner/>
      <Cases/>
    </div>
  )
}

export default App
