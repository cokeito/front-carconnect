import React from 'react'
import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 0,
  contain: true,
  cellAlign: 'left',
  prevNextButtons: false,
  pageDots: false
}

const Hero = () => {
  return (
    <section id="oa-banner" className="position-relative">
      <div className="hero-slides">

        <Flickity
          className={''} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >

          <div
            className="hero-slide"
            style={{
              background: `url("/assets/images/banner_car.webp")`,
              backgroundPosition: 'center bottom 50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              left: 0,
            }}
          />

          <div
            className="hero-slide"
            style={{
              background: `url("/assets/images/banner_car_2.webp")`,
              backgroundPosition: 'right 50% center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              left: 0,
            }}
          />







        </Flickity>


      </div >
    </section>
  )
}

export default Hero