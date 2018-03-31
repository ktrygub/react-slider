import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'semantic-ui-react'

const NextSlideButton = ({ onClick }) => (
  <Button
    className="right-arrow"
    size="mini"
    secondary
    icon="chevron right"
    onClick={onClick}
  />
)
NextSlideButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NextSlideButton
