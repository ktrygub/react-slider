import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import Slide from './Slide'
import PrevSlideButton from './PrevSlideButton'
import NextSlideButton from './NextSlideButton'
import DotsPanel from './DotsPanel'

import mockData from '../mockData'

class Slider extends React.Component {
  state = {
    currentSlideIndex: 0,
    slides: mockData.slider
  }

  getPrevSlideIndex = () => {
    const { currentSlideIndex } = this.state
    const finalSlideIndex = this.state.slides.length - 1
    return currentSlideIndex === 0 ? finalSlideIndex : currentSlideIndex - 1
  }

  getNextSlideIndex = () => {
    const { currentSlideIndex } = this.state
    const finalSlideIndex = this.state.slides.length - 1
    return currentSlideIndex === finalSlideIndex ? 0 : currentSlideIndex + 1
  }

  setCurrentSlideByID = id => this.setState({ currentSlideIndex: id })

  startTimer = () => setTimeout(this.gotoNextSlide, 5000)

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
    let timer = this.startTimer()
    const currentSlide = this.state.slides[this.state.currentSlideIndex]
    const prevSlide = this.state.slides[this.getPrevSlideIndex()]
    const nextSlide = this.state.slides[this.getNextSlideIndex()]

    return (
      <Container
        className="slider"
        onFocus={() => this.stopTimer(timer)}
        onMouseOver={() => this.stopTimer(timer)}
        onBlur={() => {
          this.stopTimer(timer)
          timer = this.startTimer()
        }}
        onMouseLeave={() => {
          this.stopTimer(timer)
          timer = this.startTimer()
        }}
      >
        <Grid id="slider--grid" padded stretched>
          <Grid.Row>
            <Grid.Column
              id="slide__transparent"
              width={5}
              verticalAlign="middle"
            >
              <Slide {...prevSlide} />
            </Grid.Column>

            <Grid.Column width={6} verticalAlign="middle">
              <Slide {...currentSlide} />

              <PrevSlideButton
                onClick={() => {
                  this.stopTimer(timer)
                  this.gotoPrevSlide()
                }}
              />

              <NextSlideButton
                onClick={() => {
                  this.stopTimer(timer)
                  this.gotoNextSlide()
                }}
              />

              <DotsPanel
                currentIndex={this.state.currentSlideIndex}
                total={this.state.slides.length}
                onDotClick={id => {
                  this.stopTimer(timer)
                  this.setCurrentSlideByID(id)
                }}
              />
            </Grid.Column>

            <Grid.Column
              id="slide__transparent"
              width={5}
              verticalAlign="middle"
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
