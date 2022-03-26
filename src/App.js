import React from 'react'
import { Impress, Step } from 'react-impressjs'
import { storyLines } from './transription-un-annex-story'
import 'react-impressjs/styles/react-impressjs.css'
import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
from {
  opacity:1;
}

to {
  opacity:0;
}
`

const CenteredImage = styled.img`
  width: 100%;
`

const CenteredImageRoundedFadeIn = styled(CenteredImage)`
  border-radius: 50%;
`

const BlackFadingOutCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: black;
  top: 0;
  left: 0;

  .impress-enabled .step.present & {
    animation-name: ${fadeOut};
    animation-duration: 10s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
`

function FlatEarthAnimation() {
  return (
    <div style={{ position: 'relative' }}>
      <CenteredImageRoundedFadeIn src="/images/flat-earth" alt="Flat Earth" />
      <BlackFadingOutCircle />
    </div>
  )
}
const Levels = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    flex: 1;
  }
`

const Button = styled.button`
  border-radius: 35%;
  padding: 1rem 2rem;
  border: grey 1px solid;
  font-size: 2rem;
`

const CaptionsComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content;
  height: 60vh;
  justify-items: center;
`

const Item = styled.p`
  .impress-enabled .step.present &.delay-2s {
    transform: translateX(100px);
    transition: all 0.5s 2s;
  }
  .impress-enabled .step.present &.delay-2-5s {
    transform: translateX(100px);
    transition: all 0.5s 2.5s;
  }
  .impress-enabled .step.present &.delay-3s {
    transform: translateX(100px);
    transition: all 0.5s 3s;
  }
`

function App() {
  return (
    <div className="App">
      <Impress
        hintOn={false}
        fallbackMessage={
          <p>
            Sorry, your <b>device or browser</b> couldn't support well.
          </p>
        }
      >
        <Step id="overview" data={{ x: 0, y: 5000, scale: 10 }} />
        <Step id="two-paths" data={{ x: 1000, y: 2000 }} className="active">
          <CenteredImage
            src="/images/two-paths.jpg"
            alt="Two Paths"
            height={1000}
          />
        </Step>
        <Step id="atlantis" data={{ x: 2000, y: 3000 }}>
          <CenteredImage src="/images/pleasant-path.jpg" alt="Pleasant Path" />
        </Step>
        <Step id="yoga-retreat" data={{ x: 0, y: 3000 }}>
          <CenteredImage src="/images/good-path.jpg" alt="Pleasant Path" />
        </Step>
        <Step id="two-paths-repeat" data={{ x: 1000, y: 2000 }} />
        <Step id="levels-of-mind" data={{ x: -1000, y: 5000, scale: 8 }}>
          <h3>Levels of the Mind</h3>
          <Levels>
            <Item className="delay-3s">Intuition</Item>
            <Item className="delay-2-5s">Intellect</Item>
            <Item className="delay-2s">Instinct</Item>
          </Levels>
        </Step>
        <Step
          id="subconscious-mind"
          data={{ x: -1000, y: 7000, z: -1000, scale: 2 }}
          className="active"
        >
          <h3>Subconscious Mind</h3>
          <Levels>
            <p>1. Protective Instinct</p>
            <p>2. Herd Instinct</p>
            <p>3. Forming Positive Habits</p>
          </Levels>
        </Step>
        <Step id="churchill" data={{ x: -3000, y: 9000, z: -1000, scale: 0.5 }}>
          <CenteredImage
            src="/images/winston-churchill-cigar.jpg"
            alt="Winston Churchill"
          />
        </Step>
        <Step
          id="controlled-by-leader"
          data={{
            x: -1000,
            y: 9000,
            z: -1000,
            scale: 0.5
          }}
        >
          <CenteredImage
            src="/images/controlled-by-leader.jpg"
            alt="Pinocchio"
          />
        </Step>
        <Step
          id="flat-earth"
          data={{
            x: 1000,
            y: 9000,
            z: -1000,
            scale: 0.5
          }}
        >
          <FlatEarthAnimation />
        </Step>
        <Step
          id="god-as-an-object"
          data={{
            x: 3000,
            y: 9000,
            z: -1000,
            scale: 0.5
          }}
        >
          <CenteredImage
            src="/images/god-the-father.jpg"
            alt="God As the Father"
          />
        </Step>
        <Step
          id="subconscious-mind-repeat"
          data={{ x: -1000, y: 7000, z: -1000, scale: 2 }}
        />
        <Step id="story-captions" data={{ x: 3000, y: 5000, scale: 3 }}>
          <ClosedCaptions />
        </Step>
        <Step
          id="subconscious-mind-repeat-2"
          data={{ x: -1000, y: 7000, z: -1000, scale: 2 }}
        />
      </Impress>
    </div>
  )
}

function ClosedCaptions() {
  const [line, setLine] = React.useState(0)

  return (
    <CaptionsComponent>
      <p style={{ fontSize: '120%' }}>{storyLines[line]}</p>
      <div>
        <Button
          disabled={line === 0}
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            setLine(x => x - 1)
          }}
        >
          Previous
        </Button>
        <Button
          disabled={line >= storyLines.length - 1}
          onClick={e => {
            e.preventDefault()
            setLine(x => x + 1)
          }}
        >
          Next
        </Button>
      </div>
    </CaptionsComponent>
  )
}
export default App
