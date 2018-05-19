import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'

import SlideHeroRow from './SlideHeroRow'
import SlideHeaderRow from './SlideHeaderRow'

const Slide = ({ hero, text, image }) => (
  <Grid id="slide--grid" stretched padded>
    <SlideHeaderRow text={text} image={image} />
    <SlideHeroRow hero={hero} />
  </Grid>
)

Slide.propTypes = {
  hero: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Slide
