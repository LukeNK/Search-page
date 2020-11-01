let GREET;
//Clock
function clock() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  
  //Greet
  let greet = '';
  if (h < 6) greet = 'Good early morning'
  else if (h < 12) greet = 'Good morning'
  else if (h < 18) greet = 'Good afternoon'
  else if (h < 22) greet = 'Good evening'
  else greet = 'Goodnight';
  GREET = greet;

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('clock').innerHTML = 
  "Time: " + h + ":" + m + ":" + s + ' | &#32;'; 

  let t = setTimeout(clock, 500)
} 
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
function extraClock()
{
  let today = new Date();
  let d = today.getDate(); 
  let mo = today.getMonth() + 1; 
  let y = today.getFullYear();
  d = checkTime(d); 
  mo = checkTime(mo); 
  y = checkTime(y)
  document.getElementById('clockExtra').onmouseover = function ()
  {
    document.getElementById('clockExtra').innerHTML = `Date: ${d}/${mo}/${y}` ;
  }
  document.getElementById('clockExtra').onmouseout = function ()
  {
    document.getElementById('clockExtra').innerHTML = GREET ;
  }
};

function onLoadCaller()
{
  clock();
  document.getElementById('clockExtra').innerHTML = GREET;
  extraClock();

  var searchBox = document.getElementById('searchBox');
  searchBox.addEventListener("keyup", function(event) 
  {
    if (event.key === 'Enter') {
      let inp = document.getElementById('searchBox').value;
      let end =  "http://www.google.com/search?q=" + inp;
      if (inp.indexOf('$') == 0)
      {
        inp = inp.split(/ (.+)/); inp[0] = inp[0].replace('$', '')
        let keywords = 
        {
          'wiki' : `https://en.wikipedia.org/w/index.php?search=${inp[1]}`,
          'trans' : `https://translate.google.com/?hl=en&sl=auto&tl=en&text=&op=translate${inp[1]}`,
          'yt' : `https://www.youtube.com/results?search_query=${inp[1]}&page&utm_source=opensearch`
        };

        (inp[0] in keywords)? end = keywords[inp[0]] : {};
      }
      document.location = end; //redirect
    }
  });  
};