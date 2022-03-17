import React from 'react'
import { Impress, Step } from 'react-impressjs'
import { storyLines } from './transription-un-annex-story'
import 'react-impressjs/styles/react-impressjs.css'
import styled from 'styled-components'

const CenteredImage = styled.img`
  width: 100%;
`

const Levels = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    flex: 1;
  }
`

const Button = styled.button`
  border-radius: 35%;
  padding: 0.5rem 1rem;
  border: grey 1px solid;
`

const CaptionsComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content;
  height: 60vh;
  justify-items: center;
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
        <Step id="overview" data={{ x: -1000, y: 3000, scale: 20 }} />
        <Step id="two-paths" data={{ x: 1000, y: 2000 }} className="active">
          <CenteredImage
            src="/images/two-paths.jpg"
            alt="Two Paths"
            height={1000}
          />
        </Step>
        <Step id="atlantis" data={{ x: 1000, y: 5000 }}>
          <CenteredImage src="/images/pleasant-path.jpg" alt="Pleasant Path" />
        </Step>
        <Step id="yoga-retreat" data={{ x: -1000, y: 5000 }}>
          <CenteredImage src="/images/good-path.jpg" alt="Pleasant Path" />
        </Step>
        <Step id="two-paths-repeat" data={{ x: 1000, y: 2000 }} />
        <Step id="churchill" data={{ x: -500, y: 2000, rotateY: -90 }}>
          <CenteredImage
            src="/images/winston-churchill-cigar.jpg"
            alt="Winston Churchill"
          />
        </Step>
        <Step id="levels-of-mind" data={{ x: -1000, y: 9000, scale: 8 }}>
          <h3>Levels of the Mind</h3>
          <Levels>
            <p>Intuition</p>
            <p>Intellect</p>
            <p>Instinct</p>
          </Levels>
        </Step>
        <Step
          id="subconscious-mind"
          data={{ x: -1000, y: 11000, z: -10000, scale: 2 }}
        >
          <h3>Subconscious Mind</h3>
          <Levels>
            <p>Protective Instinct</p>
            <p>Herd Instinct</p>
            <p>Forming Habits</p>
          </Levels>
        </Step>
        <Step id="story-captions" data={{ x: 8000, y: 9000, scale: 3 }}>
          <ClosedCaptions />
        </Step>
      </Impress>
    </div>
  )
}

function ClosedCaptions() {
  const [line, setLine] = React.useState(0)

  return (
    <CaptionsComponent>
      <p>{storyLines[line]}</p>
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
      </div>{' '}
    </CaptionsComponent>
  )
}
export default App
