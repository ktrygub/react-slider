import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import Dot from './Dot'

const DotsPanel = ({ currentIndex, total, onDotClick }) => (
  <div className="dots-container">
    {[...Array(total)].map((el, i) => (
      <Dot
        key={uuid()}
        id={i}
        checked={currentIndex === i}
        onClick={onDotClick}
      />
    ))}
  </div>
)

DotsPanel.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onDotClick: PropTypes.func.isRequired
}
export default DotsPanel
