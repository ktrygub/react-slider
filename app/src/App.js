import React from 'react'
import { Divider } from 'semantic-ui-react'

import Slider from './components/Slider'

const App = () => (
  <React.Fragment>
    <Divider section horizontal>
      Slider
    </Divider>

    <Slider />

    <Divider section horizontal>
      Slider
    </Divider>
  </React.Fragment>
)

export default App
