import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'semantic-ui-react'

const PrevSlideButton = ({ onClick }) => (
  <Button
    className="left-arrow"
    size="mini"
    secondary
    icon="chevron left"
    onClick={onClick}
  />
)
PrevSlideButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default PrevSlideButton
