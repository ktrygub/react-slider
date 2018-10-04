import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Grid } from 'semantic-ui-react'

import SlideHeroRow from './SlideHeroRow'
import SlideHeaderRow from './SlideHeaderRow'
import ArrowButton from '../ArrowButton'
import DotsPanel from '../DotsPanel'

const Slide = ({
  hero,
  text,
  image,
  transparent,
  hoverable,
  main,
  currentSlideIndex,
  slides,
  setCurrentSlideByID,
  gotoNthSlideFromCurrent
}) => {
  const slideClass = classNames({
    slide__transparent: transparent,
    slide__hoverable: hoverable
  })
  return (
    <div className={slideClass}>
      <Grid id="slide--grid" stretched padded>
        <SlideHeaderRow text={text} image={image} />
        <SlideHeroRow hero={hero} />
        {main && (
        <React.Fragment>
          <ArrowButton type="prev-button" onClick={() => gotoNthSlideFromCurrent(-1)} />

          <ArrowButton type="next-button" onClick={() => gotoNthSlideFromCurrent(1)} />

          <DotsPanel
            currentIndex={currentSlideIndex}
            total={slides.length}
            onDotClick={id => setCurrentSlideByID(id)}
          />
        </React.Fragment>
      )}
      </Grid>
     
    </div>
  )
}

Slide.propTypes = {
  hero: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  currentSlideIndex: PropTypes.number,
  slides: PropTypes.arrayOf(PropTypes.shape({})),
  transparent: PropTypes.bool,
  hoverable: PropTypes.bool,
  main: PropTypes.bool,
  setCurrentSlideByID: PropTypes.func,
  gotoNthSlideFromCurrent: PropTypes.func
}
Slide.defaultProps = {
  transparent: false,
  hoverable: false,
  currentSlideIndex: NaN,
  slides: [],
  main: false,
  setCurrentSlideByID: () => {},
  gotoNthSlideFromCurrent: () => {}
}

export default Slide
