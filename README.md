# React stitch

React stitch is a React component based css-grid library.

# Dependencies

In your main application, you will want to ensure you have:

- React (npm install react)
- React DOM (npm install react-dom)
- Styled components (npm install styled-components)

# Installation & Usage

NPM or Yarn:
- npm install react-stitch

In your application you can import your grid components from the module:

```Javascript
import { GridBlock, GridCell} from 'react-stitch'

const SomeApp = () => {
  return (
    <GridBlock>
      <GridCell>
        This is your first Cell
      </GridCell>
    </GridBlock>
  )
}
```

# GridBlock
The grid block is automatically set to a 12 section grid and has an option to
add a gap width between each section by passing in a `gridGap` prop.

`<GridBlock gridGap="10px"></GridBlock>`

# GridCell
The grid cell is defaulted to auto and will place each cell inline till it
a cell reaches the end of a grid block. Once reached, a new row will be created.
Grid cells can be modified to be individually placed using the `gridColumn` prop
or modified to span across several grids using the `gridColumnSpan` prop.

```Javascript
<GridBlock>
  <GridCell gridColumn="2/4">
    Will take up the area between section 2 and 4
  </GridCell>
  <GridCell gridColumnSpan="3">
    Will span 3 grid sections starting at where the last grid left off
  </GridCell>
</GridBlock>
```
