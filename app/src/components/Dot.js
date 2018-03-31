import React from 'react'
import PropTypes from 'prop-types'

import { Checkbox } from 'semantic-ui-react'

const Dot = ({ id, checked, onClick }) => (
  <Checkbox radio checked={checked} onClick={() => onClick(id)} />
)
Dot.propTypes = {
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Dot
