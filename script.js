const headImage = document.getElementById("top-image");
const bgInput = document.getElementById("dropdown");
const mainText = document.getElementById("text");
const topList = document.getElementById("list");
const topList2 = document.getElementById("list2");


bgInput.addEventListener("change", (e)=>{
   switch(e.target.value){
    case "otherside": 
        mainText.style.color = "#06659F";
        mainText.innerHTML = "OTHER<span>SIDE</span>";
        topList.innerHTML = "<li>O</li><li>T</li><li>H</li><li>E</li><li>R</li>"
        topList2.innerHTML = "<li>S</li><li>I</li><li>D</li><li>E</li>"
        document.querySelector(".nav").style.backgroundImage = "url(./imaGES/2.jpeg)";
        break;

    case "between":
        mainText.innerHTML = 'BET<span class="half">WEEN</span>';
        mainText.style.color = "#293543";
        topList.innerHTML = "<li>B</li><li>E</li><li>T</li>"
        topList2.innerHTML = "<li>W</li><li>E</li><li>E</li><li>N</li>"
        document.querySelector(".nav").style.backgroundImage = "url(./imaGES/3.jpeg)";
        document.querySelector(".half").style.color = '#8D4656';
        break;
        
        case "beyond":
            mainText.innerHTML = 'BEY<span class="half">OND</span>';
            mainText.style.color = "#50128F";
            topList.innerHTML = "<li>B</li><li>E</li><li>Y</li>";
            topList2.innerHTML = "<li>O</li><li>N</li><li>D</li>";
            document.querySelector(".nav").style.backgroundImage = "url(./imaGES/5.jpg)";
            document.querySelector(".half").style.color = '#F4E8E8';

            break;

             case "ethereal":
            mainText.innerHTML = 'ETHE<span class="half">REAL</span>';
            mainText.style.color = "#8BE6FB";
            topList.innerHTML = "<li>E</li><li>T</li><li>H</li><li>E</li>";
            topList2.innerHTML = "<li>R</li><li>E</li><li>A</li><li>L</li>";
            document.querySelector(".nav").style.backgroundImage = "url(./imaGES/6.jpg)";
            document.querySelector(".half").style.color = '#FB9CBA';

            break;
   }
});

