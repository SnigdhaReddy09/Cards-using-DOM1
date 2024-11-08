var card1 = document.querySelector("div");
card1.innerHTML = `<img src="https://www.bookswagon.com/productimages/images200/801/9780803736801.jpg" width="200px" height="220px"/>
<p>Dragons Love Tacos</p>
<p>$52</p>`

card1.style.border="2px solid black"
card1.style.backgroundColor="lightgrey"
card1.style.padding="10px"
card1.style.display="inline-block"
card1.style.textAlign="center"

var card2=document.getElementById("one")
card2.innerHTML = `<img src="https://www.bookswagon.com/productimages/images200/895/9781786330895.jpg" width="200px" height="220px"/>
<p>Ikigai</p>
<p>$39</p>` 

card2.style.border="2px solid black"
card2.style.backgroundColor="lightgrey"
card2.style.padding="10px"
card2.style.display="inline-block"
card2.style.textAlign="center"

var card3=document.createElement("div")
card3.innerHTML=`<img src="https://www.bookswagon.com/productimages/images200/660/9780241340660.jpg" width="200px" height="220px"/>
<p>When You Slow Down</p>
<p>$48</p>`
console.log(card3)
document.body.appendChild(card3)

card3.style.border="2px solid black"
card3.style.backgroundColor="lightgrey"
card3.style.padding="10px"
card3.style.display="inline-block"
card3.style.textAlign="center"

var card4=document.createElement("div")
card4.innerHTML=`<img src="https://www.bookswagon.com/productimages/images200/071/9789351772071.jpg" width="200px" height="220px"/>
<p>Attitude Is Everything</p>
<p>$22</p>`
console.log(card4)
document.body.appendChild(card4)

card4.style.border="2px solid black"
card4.style.backgroundColor="lightgrey"
card4.style.padding="10px"
card4.style.display="inline-block"
card4.style.textAlign="center"

document.body.style.display="flex"
document.body.style.gap="20px"