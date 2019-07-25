let block = document.querySelector('.block');
let circle = document.querySelector('.progress__circle'),
       radius = circle.r.baseVal.value,
       length = 2 * Math.PI * radius;
   circle.style.strokeDasharray = `${length} ${length}`;
   circle.style.strokeDashoffset = length;
block.addEventListener('click', (e) => {
   block.style.pointerEvents = 'none';
   let width = 0;
   let handler = setInterval(() => { 
      let offset = length - width / 100 * length;
      circle.style.strokeDashoffset = offset; 
      if (width > 99.9) {
         clearInterval(handler);
         block.style.pointerEvents = "auto"
      } else {
         width = (width * 10 + 0.1 * 10) / 10;
         console.log(width);
      }   
   },5);
});
