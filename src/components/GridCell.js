import React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
  grid-column: ${state => state.gridColumnSpan !== 'auto' ?
    `span ${state.gridColumnSpan}` :
    state.gridColumn};
  grid-row: ${state => state.gridRowSpan  !== 'auto' ?
    `span ${state.gridRowSpan}` :
    state.gridRow};
  align-self: ${state => state.vAlignCell};
  justify-self: ${state => state.alignCell};
`

class GridCell extends React.Component {
  constructor() {
    super()
    this.state = {
      alignCell: 'auto',
      gridColumn: 'auto',
      gridColumnSpan: 'auto',
      gridRow: 'auto',
      gridRowSpan: 'auto',
      vAlignCell: 'auto'
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
      <Cell className={this.props.className} {...this.state}>
        {this.props.children}
      </Cell>
    )
  }
}

export default GridCell
