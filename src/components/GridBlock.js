import React from 'react'
import styled from 'styled-components'

// @NOTE 2.0 will deprecate gridSections in favor of manual input
const DisplayGrid = styled.div`
  display: grid;
  grid-template-columns: ${state => state.gridColumnRepeat ?
    `repeat(${state.gridColumnRepeat}, 1fr)` :
    state.gridTemplateColumns !== 'auto'?
      state.gridTemplateColumns :
      `repeat(${state.gridSections}, 1fr)`};
  grid-template-rows: ${state => state.gridRowRepeat ?
    `repeat(${state.gridRowRepeat}, 1fr)` :
    state.gridTemplateRows ?
      state.gridTemplateRows :
      'auto'};

  grid-gap: ${state => state.gridGap ? state.gridGap : 0};
`

class GridBlock extends React.Component {
  constructor() {
    super()

    this.state = {
      gridTemplateColumns: 'auto',
      gridTemplateRows: 'auto',
      gridColumnRepeat: null,
      gridRowRepeat: null,
      gridSections: 12
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const updatedProps = {}

    nextProps = nextProps.gridStyles ? nextProps.gridStyles : nextProps

    for (let prop in nextProps) {
      // Only update the properties that have changed and add those properties
      // to our updatedProps object.
      if (nextProps[prop] !== prevState[prop]) {
        updatedProps[prop] = nextProps[prop]
      }
    }

    if (!updatedProps) { return null }

    return updatedProps
  }

  render() {
    return (
      <DisplayGrid className={this.props.className} {...this.state}>
        {this.props.children}
      </DisplayGrid>
    )
  }
}

export default GridBlock
