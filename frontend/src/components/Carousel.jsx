import React, { useEffect, useRef, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
     loop: true,
     align: 'center',
     skipSnaps: false,   

    }, [Autoplay({ 
      delay: 3000 ,
      stopOnInteraction: false,  // ✅ This prevents stopping autoplay on interaction
      stopOnMouseEnter: false     // (Optional) Allows autoplay even when hovered
    })])
  const tweenFactor = useRef(0)

  const setTweenFactor = useCallback((api) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback((api) => {
    const engine = api.internalEngine()
    const scrollProgress = api.scrollProgress()
    const slidesInView = api.slidesInView()

    api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (!slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0.3, 1).toString()
        api.slideNodes()[slideIndex].style.opacity = opacity
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)

    emblaApi
      .on('reInit', () => {
        setTweenFactor(emblaApi)
        tweenOpacity(emblaApi)
      })
      .on('scroll', () => tweenOpacity(emblaApi))
      .on('slideFocus', () => tweenOpacity(emblaApi))
  }, [emblaApi, setTweenFactor, tweenOpacity])

  return (
    <div>
    {/* <div className='embla '>
      <div className="embla__viewport mx-auto mt-12 max-w-lg" ref={emblaRef}>
        <div className="embla__container">

          <div className="embla__slide flex items-center justify-center">
            <img src="Video_call.png" alt="Slide 1" />
          </div>

          <div className="embla__slide">
            <img src="Chat bot-amico.png" alt="Slide 2" />
          </div>

          <div className="embla__slide"><img src="Translator-amico.png" alt="Slide3" /></div>
          <div className="embla__slide"><img src="messaging.png" alt="Slide4" /></div>
          <div className="embla__slide"><img src="Palette-amico.png" alt="Slide5" /></div>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default Carousel
