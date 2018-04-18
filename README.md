# React stitch

React stitch is a sweet React component based css-grid library.

# Dependencies

In your main application, you will want to ensure you have:

- React (`npm install react`)
- React DOM (`npm install react-dom`)
- Styled components (`npm install styled-components`)

# Installation & Usage

NPM or Yarn:
- `npm install react-stitch`

In your application you can import your grid components from the module:

```Javascript
import { GridBlock, GridCell } from 'react-stitch'

const SomeApp = () => {
  return (
    <GridBlock>
      <GridCell>
        This is your first Cell
      </GridCell>
    </GridBlock>
  )
}

export default SomeApp
```

# Browser support
- https://caniuse.com/#feat=css-grid

# GridBlock
The grid block is defaulted to a 12 section grid and has an option to
add a gap width between each section by passing in a `gridGap` prop. GridBlock
can be modified to have a specific grid quantity by passing in a `gridSections`
property as well.

`<GridBlock gridGap="10px" gridSections="4"></GridBlock>`

> The `gridSections` prop is planned for deprecation come 2.0
> Please use `gridTemplateColumns` or `gridColumnRepeat` and/or its row
> equivalent to prevent any issues when upgrading.

`<GridBlock gridGap="10px" gridColumnRepeat="4"></GridBlock>`

You can add in some custom grid sizing using the `gridTemplateColumns` or
`gridTemplateRows` property.

```Javascript
  <GridBlock gridTemplateRows="70vh 30vh">
    <GridCell gridColumnSpan={12}>
      Your first cell will end up taking the top 70vh of the view.
    </GridCell>
    <GridCell gridColumnSpan={12}>
      Your second cell will take the remaining 30vh of the view here.
    </GridCell>
  </GridBlock>
```

The `GridBlock` component can also accept a `GridStyles` object property.

```Javascript
const App = () => {
  const gridBlockStyles = {
    gridColumnRepeat: 4,
    gridRowRepeat: 2
  }

  return (
    <GridBlock gridStyles={gridBlockStyles}>
      Now you have a sweet custom grid
    </GridBlock>
  )
}
```

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
  <GridCell gridColumnSpan={3}>
    Will span 3 grid sections starting at where the last grid left off
  </GridCell>
</GridBlock>
```

Aligning a cell is also very simple. Using `vAlignCell` and `alignCell` props,
you can specify any assortment available to justification and alignment
properties. (https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)

```Javascript
<GridBlock>
  <GridCell vAlignCell="center" alignCell="center">
    The contents of this cell will be vertically and laterally centered.
  </GridCell>
</GridBlock>
```

For multiple styles, a `GridCell` component can accept a `gridStyles` object
prop.

```Javascript
const App = () => {
  const gridCellStyles = {
    gridColumnSpan:4,
    alignCell:"center",
    vAlignCell:"center"
  }

  return (
    <GridBlock>
      <GridCell gridStyles={gridCellStyles}>
        Styles applied here!
      </GridCell>
    </GridBlock>
  )
}

export default App
```

# Nesting Grids
A `GridBlock` component can be nested inside of a `GridCell` component and
modified `GridBlock` properties above. However, new `GridBlock` components will
inherit the parent's alignment and vertical alignment of its parent `GridCell`.

```Javascript
// App.js

import { GridBlock, GridCell } from 'react-stitch'

const SomeApp = () => {
  <GridBlock>
    <GridCell vAlignCell="center" alignCell="center">
      <GridBlock>
        <GridCell>
          Contents here inherit the center cell alignments of the parent cell.
        </GridCell>
      </GridBlock>
    </GridCell>
  </GridBlock>
}
```

# Issue Reporting
Please report any issues you encounter via [GitHub issues page](https://github.com/Cishkash/react-stitch/issues).
