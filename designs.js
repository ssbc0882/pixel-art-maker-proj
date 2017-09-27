// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



// Your code goes here!


function makeGrid () {

//size input

const height= $('#input_height').val();
const width= $('#input_width').val();

const table=document.getElementById('pixel_canvas');

table.innerHTML='';

for (let i=0;i<height;i++) {
  const row=table.insertRow(i);
  $('pixel_canvas').append(row);

  for (let j=0;j<width;j++) {
    const cols=table.insertCell(j);
    $('pixel_canvas').append(cols);

//color picker
    table.addEventListener('click',function () {
      const changeColor=document.getElementById('colorpicker').val();
      $(this).css('backgroundColor',changeColor);
    });
  };
};
return false;
};
document.getElementById('sizePicker').addEventListener('submit', function (evt) {
  evt.preventDefault();
  makeGrid();
  });
