import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'

import { container, fallbackImgContainer, lazyFade } from './lazyload.style'

/**
 *
 * @references https://codesandbox.io/s/react-intersection-observer-ud2vo?fontsize=14&hidenavigation=1&theme=dark&file=/src/elements/ScrollWrapper.tsx
 * @param {string} alt Image title for improving SEO
 * @param {string} containerClassName Image wrapper external class attributes
 * @param {object} containerStyle Image wrapper external styles CSS properties
 * @param {string} className Img tag class attributes
 * @param {string} style Img tag styles CSS properties
 * @param {function} onClick typical javascript onClick function
 * @param {React.Node} children react component
 * @param {string} src image url e.g. https://mola.tv/mola.png
 * @param {string} errorImgClassName custom error for fallback image, incase of failed to load (e.g. class that has own custom background / custom background-image url)
 * @param {string} fallbackImageUri Default image to be displayed before real image is being loaded (recommended size < 50kb)
 *
 */
const LazyLoad = ({
  alt,
  containerClassName,
  containerStyle,
  className,
  style,
  onClick,
  children,
  src,
  onHoverBorder,
  errorImgClassName,
  fallbackImageUri,
  handleCallback
}) => {
  const [isError, setIsError] = useState(false)
  const [sources, setSources] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const ref = useRef();
  const [inViewRef, inView] = useInView({
    threshold: [0, 0.5, 0.75, 1.0],
  })
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node)
    },
    [inViewRef],
  )

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   if (handleCallback) {
  //     handleCallback(false)
  //   }
  // }, []);

  // const callback = (status) => {
  //   if (handleCallback) {
  //     handleCallback(status)
  //   }
  // }

  useEffect(() => {
    if (inView && !sources) {
      loadImage(global.webpSupport && webp)
    }
  }, [inView]);

  const loadImage = (isWebP = false) => {
    const imageUrl = src
    const image = new window.Image()
    let error = false
    image.onload = () => {
      if (ref.current && !sources) {
        setSources(imageUrl)
        setIsError(false)
        setIsLoaded(true)
      }
    }

    image.onerror = () => {
      setIsError(true)
      setIsLoaded(false)
    }
    image.src = imageUrl
  }


  // get imageWebPUrl() {
  //   return `${this.props.src}.webp`
  // }


  return (
    <>
      {children &&
        <div
          className={`${containerClassName || ''} ${container} ${lazyFade}`}
          style={{
            ...containerStyle
          }}
          onClick={onClick}
        >
          {children}
        </div>
      }
      {fallbackImageUri && <img src={fallbackImageUri} className={`${fallbackImgContainer} fallbackImg fadeIn`} style={{ opacity: isLoaded ? 0 : 1 }} />}
      {!children &&
        <div
          className={`${containerClassName || ''} ${container} imageWrapper ${isLoaded ? 'loaded' : ''}`}
          style={{
            ...containerStyle,
            position: fallbackImageUri ? 'absolute' : 'relative',
            top: 0,
            left: 0
          }}
          onClick={onClick}
        >
          {onHoverBorder && <div className={'imageBorder'}></div>}
          <img
            ref={setRefs}
            className={`${className || ''} fadeIn`}
            style={{
              ...style,
              opacity: inView && isLoaded ? 1 : 0,
            }}
            src={sources}
            alt={alt}
          // onError={() => {
          //   setIsError(true)
          //   setIsLoaded(false)
          //   // callback(false)
          // }}
          // onLoad={() => {
          //   setIsError(false)
          //   setIsLoaded(true)
          //   // callback(true)
          // }}
          />
          {isError && <div className={`errorBackground ${errorImgClassName || ''}`} />}
        </div>
      }
    </>
  )
}

export default LazyLoad
