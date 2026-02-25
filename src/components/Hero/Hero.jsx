import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  const heroImageSrc = '/images/hero-img.jpg'

  return (
    <Wrapper>
      <picture>
        <source
          type='image/avif'
          srcSet={`${heroImageSrc.replace('.jpg', '.avif')} 1x,
            ${heroImageSrc.replace('.jpg', '@2x.avif')} 2x,
            ${heroImageSrc.replace('.jpg', '@3x.avif')} 3x
          `}
        />
        <source
          type='image/jpeg'
          srcSet={`${heroImageSrc} 1x,
            ${heroImageSrc.replace('.jpg', '@2x.jpg')} 2x,
            ${heroImageSrc.replace('.jpg', '@3x.jpg')} 3x
          `}
        />
        <HeroImage
          src={heroImageSrc.replace('.jpg', '.avif')}
          alt='Free high-quality animal photos for everyone (cat on black background sample)'
        />
      </picture>
      <Swoop alt='' src='/swoop.svg' />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`

export default Hero
