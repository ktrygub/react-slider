import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import Slide from './Slide'
import ArrowButton from './ArrowButton'
import DotsPanel from './DotsPanel'

import mockData from '../mockData'

class Slider extends React.Component {
  state = {
    currentSlideIndex: 0,
    slides: mockData.slider,
    timer: null
  }

  componentWillMount() {
    const timer = this.startTimer()
    this.setState({ timer })
  }

  componentWillUnmount() {
    this.stopTimer(this.state.timer)
  }

  getPrevSlideIndex = () => {
    const { currentSlideIndex, slides } = this.state
    const finalSlideIndex = slides.length - 1
    return currentSlideIndex === 0 ? finalSlideIndex : currentSlideIndex - 1
  }

  getNextSlideIndex = () => {
    const { currentSlideIndex, slides } = this.state
    const finalSlideIndex = slides.length - 1
    return currentSlideIndex === finalSlideIndex ? 0 : currentSlideIndex + 1
  }

  setCurrentSlideByID = id => this.setState({ currentSlideIndex: id })

  startTimer = () =>
    setTimeout(() => {
      this.gotoNextSlide()
      this.setState({ timer: this.startTimer() })
    }, 5000)

  stopTimer = timer => clearTimeout(timer)

  gotoPrevSlide = () =>
    this.setState({
      currentSlideIndex: this.getPrevSlideIndex()
    })

  gotoNextSlide = () =>
    this.setState({
      currentSlideIndex: this.getNextSlideIndex()
    })

  render() {
    const { timer, currentSlideIndex, slides } = this.state
    const currentSlide = slides[currentSlideIndex]
    const prevSlide = slides[this.getPrevSlideIndex()]
    const nextSlide = slides[this.getNextSlideIndex()]

    return (
      <Container className="slider">
        <Grid id="slider--grid" padded stretched>
          <Grid.Row>
            <Grid.Column
              id="slide__transparent"
              width={5}
              verticalAlign="middle"
              onClick={() => this.gotoPrevSlide()}
            >
              <Slide {...prevSlide} />
            </Grid.Column>

            <Grid.Column
              id="slide__hoverable"
              width={6}
              verticalAlign="middle"
              onFocus={() => this.stopTimer(timer)}
              onMouseOver={() => this.stopTimer(timer)}
              onMouseLeave={() => this.setState({ timer: this.startTimer() })}
            >
              <Slide {...currentSlide} />

              <ArrowButton
                type="prev-button"
                onClick={() => this.gotoPrevSlide()}
              />

              <ArrowButton
                type="next-button"
                onClick={() => this.gotoNextSlide()}
              />

              <DotsPanel
                currentIndex={currentSlideIndex}
                total={slides.length}
                onDotClick={id => this.setCurrentSlideByID(id)}
              />
            </Grid.Column>

            <Grid.Column
              id="slide__transparent"
              width={5}
              verticalAlign="middle"
              onClick={() => this.gotoNextSlide()}
            >
              <Slide {...nextSlide} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Slider
