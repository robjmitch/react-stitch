import React from 'react'
import styled from 'styled-components'

const DisplayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

class Grid extends React.Component {
  render() {
    return (
      <DisplayGrid>
        {this.props.children}
      </DisplayGrid>
    )
  }
}

export default Grid
