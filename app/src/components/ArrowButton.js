import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'semantic-ui-react'

const ArrowButton = ({ onClick, type = 'next-button' }) => (
  <Button
    className={type}
    size="mini"
    secondary
    icon={type === 'next-button' ? 'chevron right' : 'chevron left'}
    onClick={onClick}
  />
)

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default ArrowButton
