import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Popup } from 'semantic-ui-react'

class SlideHeaderRow extends React.Component {
  state = {
    slideTextRef: React.createRef(),
    overflow: false
  }

  componentDidMount() {
    const slideTextNode = this.state.slideTextRef.current
    this.setState({ overflow: this.isOverflowActive(slideTextNode) }) // eslint-disable-line
  }

  componentDidUpdate(prevProps, prevState) {
    const slideTextNode = this.state.slideTextRef.current
    if (prevState.overflow !== this.isOverflowActive(slideTextNode)) {
      this.setState({ overflow: this.isOverflowActive(slideTextNode) }) // eslint-disable-line
    }
  }

  isOverflowActive = node => node.offsetWidth < node.scrollWidth

  render() {
    const { image, text } = this.props
    return (
      <Popup
        inverted
        flowing
        size="tiny"
        position="top center"
        verticalOffset={4}
        style={{
          border: '0.2em solid #2980b9',
          opacity: `${this.state.overflow ? 1 : 0}`
        }}
        trigger={
          <Grid.Row color="black">
            <Grid.Column
              width={2}
              id="slide--image"
              style={{
                backgroundImage: `url(${image})`
              }}
            />
            <Grid.Column width={14} verticalAlign="middle">
              <h3 id="slide--text" ref={this.state.slideTextRef}>
                {text}
              </h3>
            </Grid.Column>
          </Grid.Row>
        }
        content={text}
      />
    )
  }
}

SlideHeaderRow.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default SlideHeaderRow
