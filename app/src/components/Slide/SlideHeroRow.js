import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'

const SlideHeroRow = ({ hero }) => (
  <Grid.Row
    id="slide--hero"
    style={{
      backgroundImage: `url(${hero})`
    }}
  />
)
SlideHeroRow.propTypes = {
  hero: PropTypes.string.isRequired
}

export default SlideHeroRow
