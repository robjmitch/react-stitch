import React from 'react'
import styled from 'styled-components'

const DisplayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${props => props.gridGap ? props.gridGap : 0};
`

class GridBlock extends React.Component {
  render() {
    return (
      <DisplayGrid {...this.props}>
        {this.props.children}
      </DisplayGrid>
    )
  }
}

export default GridBlock
