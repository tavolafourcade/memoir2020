let colors = ["#F88F0D", "#04B4EC", "#F32628", "#04FB97"];

let randomColor = (colors) => {
  let rndNum = Math.floor(Math.random() * 6);
  let rndColor = colors[rndNum];
  return rndColor;
}

/****Applying Text Color to the HTML element****/
document.querySelectorAll(".random-color").forEach(item => {
  let txt = item.innerHTML; 
  html = "";
  for (let i = 0; i < txt.length; i++){
    let rndColor = randomColor(colors);

    if(i===17) html += `<br>`

    if(i>17) {
      html += `<span style="color:${rndColor}; font-weight: 800; font-size: 8rem;" class="crazy">${txt.charAt(i)}</span>`; 
    } else {
      html += `<span style="color:${rndColor}">${txt.charAt(i)}</span>`; 
      // html += "<span style=color:" + rndColor + ">" + txt.charAt(i) + "</span>"; 
    }
  }
  item.innerHTML = html; //set the html to each letter
}); 





/****Random Text Color****/
let colorTextChange = () => {
let text = document.getElementsByClassName("random-color")[0].childNodes;
text.forEach(letter => {
    letter.style.color = randomColor(colors);
});
}


/****Random Figure Color****/
figuresID = ["random-color-figure-1","random-color-figure-2"];
let colorDivChange = () => {
  for (id in figuresID){
    let figure = document.getElementById(figuresID[id]);
    figure.style.backgroundColor = randomColor(colors);
    }
  }

  /****Random Triangle Color****/
  let colorTriangleChange = () => {
      let figure = document.getElementById("random-color-figure-3");
      figure.style.borderBottom = `2rem solid ${randomColor(colors)}`;
    }
  //border-bottom: 2rem solid var(--earth_yellow);
/****Interval for reload****/
  setInterval(function(){
    colorTextChange();
    
  }, 800);

  setInterval(function(){
    colorDivChange();
    colorTriangleChange();
  }, 500);

  setInterval(function(){
    colorTriangleChange();
  }, 400);