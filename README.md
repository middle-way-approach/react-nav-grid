# React Nav Grid

This component renders a grid on which you can zoom and navigate. Have a look at the self explanatory [demo](https://middle-way-approach.github.io/react-nav-grid/).

## Code

```jsx harmony
import { Grid, Row } from 'react-nav-grid';

<Grid
  x={0}         // y position of the view of the grid
  y={0}         // x position of the view of the grid 
  z={1}         // the amount of zoom
                // the higher the number the more elements are visible (1 is smallest)
  width={500}   // The width of the grid and every element in the grid
  height={500}  // The height of the grid and every element in the grid
  onClick={function(x,y,event) {}} // is called on click on a slide. 
  // This gets passed the x,y coordinate of the clicked tile and the original event
>
    <Row>           // the children of the Grid must be wrapped with the Row component
      <div>1</div>  // the children of the Row can be of any type
      <div>2</div> 
      <div>3</div>
    </Row>
    <Row>
      <div>4</div>
      <div>5</div>
    </Row>
</Grid>
```
