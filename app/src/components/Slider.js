import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import Slide from './Slide/Slide'
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

  getNthSlideFromCurrent = n => {
    const { currentSlideIndex, slides } = this.state
    const newIndex = currentSlideIndex + n
    const mod = slides.length
    // Using (a % b) + b) % b to solve so-called "Javascript negative numbers modulus bug"
    return (newIndex % mod + mod) % mod
  }

  // getPrevSlideIndex = () => {
  //   const { currentSlideIndex, slides } = this.state
  //   const finalSlideIndex = slides.length - 1
  //   return currentSlideIndex === 0 ? finalSlideIndex : currentSlideIndex - 1
  // }

  // getNextSlideIndex = () => {
  //   const { currentSlideIndex, slides } = this.state
  //   const finalSlideIndex = slides.length - 1
  //   return currentSlideIndex === finalSlideIndex ? 0 : currentSlideIndex + 1
  // }

  setCurrentSlideByID = id => this.setState({ currentSlideIndex: id })

  startTimer = () =>
    setTimeout(() => {
      this.gotoNextSlide()
      this.setState({ timer: this.startTimer() })
    }, 5000)

  stopTimer = timer => clearTimeout(timer)

  gotoNthSlideFromCurrent = n =>
    this.setState({
      currentSlideIndex: this.getNthSlideFromCurrent(n)
    })

  gotoPrevSlide = () => this.gotoNthSlideFromCurrent(-1)

  gotoNextSlide = () => this.gotoNthSlideFromCurrent(1)

  render() {
    const { timer, currentSlideIndex, slides } = this.state
    const currentSlide = slides[currentSlideIndex]
    // const prevSlide = slides[this.getNthSlideFromCurrent(-1)]
    // const nextSlide = slides[this.getNthSlideFromCurrent(1)]

    return (
      <Container fluid>
        <Grid id="slider--grid" padded stretched>
          <Grid.Row>
            <Grid.Column
              className="slide__transparent slide__hoverable"
              width={3}
              verticalAlign="middle"
              onClick={() => this.gotoNthSlideFromCurrent(-2)}
            >
              <Slide {...slides[this.getNthSlideFromCurrent(-2)]} />
            </Grid.Column>

            <Grid.Column
              className="slide__transparent slide__hoverable"
              width={3}
              verticalAlign="middle"
              onClick={() => this.gotoNthSlideFromCurrent(-1)}
            >
              <Slide {...slides[this.getNthSlideFromCurrent(-1)]} />
            </Grid.Column>

            <Grid.Column
              className="slide__hoverable"
              width={4}
              verticalAlign="middle"
              onFocus={() => this.stopTimer(timer)}
              onMouseOver={() => this.stopTimer(timer)}
              onMouseLeave={() => this.setState({ timer: this.startTimer() })}
            >
              <Slide {...currentSlide} />

              <ArrowButton
                type="prev-button"
                onClick={() => this.gotoNthSlideFromCurrent(-1)}
              />

              <ArrowButton
                type="next-button"
                onClick={() => this.gotoNthSlideFromCurrent(1)}
              />

              <DotsPanel
                currentIndex={currentSlideIndex}
                total={slides.length}
                onDotClick={id => this.setCurrentSlideByID(id)}
              />
            </Grid.Column>

            <Grid.Column
              className="slide__transparent slide__hoverable"
              width={3}
              verticalAlign="middle"
              onClick={() => this.gotoNthSlideFromCurrent(1)}
            >
              <Slide {...slides[this.getNthSlideFromCurrent(1)]} />
            </Grid.Column>

            <Grid.Column
              className="slide__transparent slide__hoverable"
              width={3}
              verticalAlign="middle"
              onClick={() => this.gotoNthSlideFromCurrent(2)}
            >
              <Slide {...slides[this.getNthSlideFromCurrent(2)]} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Slider
