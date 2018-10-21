# React Nav Grid

This component renders a grid with equaly high and wide tiles.
You can zoom and navigate on the grid. Have a look at the self explanatory demo.

## Code
```jsx harmony
import { Grid, Row } from 'react-nav-grid';

<Grid
  x={0}         // y position of the view of the grid
  y={0}         // x position of the view of the grid 
  z={1}         // the amount of zoom of the grid
  width={500}   // The width of the grid and every element in the grid
  height={500}  // The height of the grid and every element in the grid
  onClick={function(x,y,event) {}} // is called on click on a slide. This gets passed the x,y coordinate of the tile and the original event
>
    <Row>
      <div></div> // you can use whatever component you like
      <div></div> // the components will be wrapped by the Grid component
      <div><div>Nested div</div></div>
    </Row>
    <Row>
      <div></div>
      <div></div>
      <div></div>
    </Row>
</Grid>
```

The above example will render a 2 x 3 grid.
