import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'

const Slide = ({ hero, text, image }) => (
  <Grid id="slide--grid" stretched padded>
    <Grid.Row color="black">
      <Grid.Column
        id="slide--image"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <Grid.Column id="slide--text" width={14} verticalAlign="middle">
        <h3>{text}</h3>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row
      id="slide--hero"
      style={{
        backgroundImage: `url(${hero})`
      }}
    />
  </Grid>
)

Slide.propTypes = {
  hero: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Slide
