// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



// Your code goes here!
const row;
const col

//color input
function makeGrid () {
  $('table').on('click','td' function () {
      const spectrum=$('#colorPicker').val();
      $(this).css(spectrum);
    });
//size input
const table=document.getElementById('#pixel_canvas');

tbl.innerHTML='';

const row=$('#input_height').val();
const col=$('#input_width').val();

const row ='<tr></tr>'
    for(let i=0;i<row;i++) {
      $('#pixel_canvas').append(i);
      const j=0;
      while (j<col) {
        $('#pixel_canvas','tr').append(j);
      };
    };
  }
  document.getElementById('sizePicker').addEventListener('submit', function (evt) {
    evt.preventDefault();
    makeGrid();
  });
