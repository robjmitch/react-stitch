import React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
  grid-column: ${props => props.gridColumn ?
    props.gridColumn :
    props.gridColumnSpan ?
      `span ${props.gridColumnSpan}` :
      'auto'}
  grid-row: ${props => props.gridRow ?
    props.gridRow :
    props.gridRowSpan ?
      `span ${props.gridRowSpan}` :
      'auto'}
`

class GridCell extends React.Component {
  render() {
    return (
      <Cell {...this.props}>
        {this.props.children}
      </Cell>
    )
  }
}

export default GridCell
