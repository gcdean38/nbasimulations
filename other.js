
    // set the dimensions and margins of the graph
    var margin = {top: 30, right: 30, bottom: 70, left: 60},
        width = 700 - margin.left - margin.right,
        height = 710 - margin.top - margin.bottom;
    
    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    var numformat = d3.format(".1%")
    
var r=0
var c=0
var t=0
var i;
for (i = 1; i <1000; i++) {			
//raptors 
rFG = function getRandomIntInclusive(min, max) {
  min = Math.floor(36);
  max = Math.ceil(44);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
rTP = function getRandomIntInclusive(min, max) {
  max = Math.ceil(18);
  min = Math.floor(13);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
rFT = function getRandomIntInclusive(min, max) {
    max = Math.ceil(25);
  min = Math.floor(16);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
coFG = function getRandomIntInclusive(min, max) {
  max = Math.ceil(40);
  min = Math.floor(34);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
coTP = function getRandomIntInclusive(min, max) {
    max = Math.ceil(13);
  min = Math.floor(8);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
coFT = function getRandomIntInclusive(min, max) {
    max = Math.ceil(27);
  min = Math.floor(19);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

//celtics
cFG = function getRandomIntInclusive(min, max) {
    max = Math.ceil(44);
  min = Math.floor(38);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
cTP = function getRandomIntInclusive(min, max) {
    max = Math.ceil(16);
  min = Math.floor(11);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
cFT = function getRandomIntInclusive(min, max) {
    max = Math.ceil(24);
  min = Math.floor(18);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
roFG = function getRandomIntInclusive(min, max) {
    max = Math.ceil(39);
  min = Math.floor(34);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
roTP = function getRandomIntInclusive(min, max) {
    max = Math.ceil(16);
  min = Math.floor(13);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
roFT = function getRandomIntInclusive(min, max) {
    max = Math.ceil(22);
  min = Math.floor(15);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

raptors = (rTP()*3+(rFG()-rTP())*2+rFT()+(coTP()*3+(coFG()-coTP())*2+coFT()))/2
celtics = (roTP()*3+(roFG()-roTP())*2+roFT()+(cTP()*3+(cFG()-cTP())*2+cFT()))/2
svg.append("text")
.attr("x",100)
.attr("y",250+i*15)
.attr("fill","black")
.attr("opacity",function(d){
  if(i==7){return 0}
  else{return 0}
})
.text(
result = function (d) {
if (raptors>celtics){return r+=1}
else if (celtics>raptors) {return c+=1}
else {return t+=1}
})

svg.append("text")
.attr("x",300)
.attr("y",250+i*15)
.attr("fill","black")
.attr("opacity",function(d){
  if(i==1000){return 1}
  else{return 0}
})
.text(r/(i))
torPct = r/i
bosPct = c/i
tiePct = t/i
}

//scoreboard
svg.append("image")
.attr("xlink:href","https://sportslogohistory.com/wp-content/uploads/2016/SLH/nba_alternate/toronto_raptors_2015-present-a.png")
.attr("x",width*.1)
.attr("y",90)
.attr("height",200)
.attr("width",200)
.attr("opacity",0.6)

svg.append('text')
.attr("x",160)
.attr("y",200)
.attr("stroke","black")
.attr("font-size","38px")
.attr("text-anchor","middle")
.text("TOR: " +numformat(torPct))

svg.append("image")
.attr("xlink:href","https://www.nba.com/resources/static/team/v2/celtics/media/NewAlt_type_grn_1024.png")
.attr("x",width*.6)
.attr("y",90)
.attr("height",200)
.attr("width",200)
.attr("opacity",0.6)


svg.append('text')
.attr("x",466)
.attr("y",200)
.attr("font-size","38px")
.attr("stroke","black")
.attr("text-anchor","middle")
.text("BOS: " +numformat(bosPct))  

svg.append("circle")
.attr("cx",466)
.attr("cy",190)
.attr("r",110)
.attr("stroke", function(d){
  if (bosPct>torPct) {return "black"}
  else {return "none"}})
.attr("stroke-width","5px")
.attr("fill","none")

svg.append("circle")
.attr("cx",160)
.attr("cy",190)
.attr("r",110)
.attr("stroke", function(d){
  if (bosPct<torPct) {return "black"}
  else {return "none"}})
.attr("stroke-width","5px")
.attr("fill","none")


svg.append('text')
.attr("x",276)
.attr("y",200)
.attr("font-size","18px")
.attr("stroke","grey")
.attr("text-anchor","right")
.text("TIE: " +numformat(tiePct))  

svg.append('text')
.attr('x',300)
.attr("y",50)
.attr("text-anchor","middle")
.attr("font-size","30px")
.attr("text-decoration","underline")
.attr("font-weight","bold")
.text("Raptors vs Celtics Win Probability")

//methodology
svg.append("text")
.attr("class","methodology")
.attr("fill","black")
.attr("font-size","12px")
.attr("text-decoration","underline")
.attr("x",0)
.attr('y',500)
.text("Methodology:")

svg.append("text")
.attr("class","methodology")
.attr("fill","grey")
.attr("font-size","12px")
//.attr("text-decoration","underline")
.attr("x",0)
.attr('y',512)
.text("The win probabilities were calculated using the results of "+ (i)+" simulations. The simulations were calculated using the ")

svg.append("text")
.attr("class","methodology")
.attr("fill","grey")
.attr("font-size","12px")
//.attr("text-decoration","underline")
.attr("x",0)
.attr('y',524)
.text("past performace of each team while inside the NBA's Orlando, FL bubble. The data was used to create 95% confidence  ")

svg.append("text")
.attr("class","methodology")
.attr("fill","grey")
.attr("font-size","12px")
//.attr("text-decoration","underline")
.attr("x",0)
.attr('y',536)
.text("intervals for both their offensive performance (field goals made/game, three pointers made/game and free throws made/")

svg.append("text")
.attr("class","methodology")
.attr("fill","grey")
.attr("font-size","12px")
//.attr("text-decoration","underline")
.attr("x",0)
.attr('y',548)
.text("game) and their defensive performance (opponents' FGM/G, 3PM/G and FTM/G). These confidence intervals were then")

svg.append("text")
.attr("class","methodology")
.attr("fill","grey")
.attr("font-size","12px")
//.attr("text-decoration","underline")
.attr("x",0)
.attr('y',560)
.text("used for the simulation that generated possible offensive and defensive performances for both teams. These performances ")

svg.append("text")
.attr("class","methodology")
.attr("fill","grey")
.attr("font-size","12px")
//.attr("text-decoration","underline")
.attr("x",0)
.attr('y',572)
.text("were converted to the resulting score for each team using the following formula: ")

svg.append("text")
.attr("class","methodology")
.attr("fill","grey")
.attr("font-size","12px")
//.attr("text-decoration","underline")
.attr("x",0)
.attr('y',584)
.text("0.5*((team3PM*3+team2PM*2+teamFTM)+(opponent allowed 3PM*3+opponent allowed 2PM*2+opponent allowed FTM))")

svg.append("text")
.attr("class","methodology")
.attr("fill","grey")
.attr("font-size","12px")
//.attr("text-decoration","underline")
.attr("x",0)
.attr('y',596)
.text("The scores were calculated for each of the teams and compared. The wins for each team were converted to a winning percentage, ")

svg.append("text")
.attr("class","methodology")
.attr("fill","grey")
.attr("font-size","12px")
//.attr("text-decoration","underline")
.attr("x",0)
.attr('y',608)
.text("and thus a win probability, accounting for ties.")

svg.append("rect")
.attr("x",-10)
.attr("y",486)
.attr("height",130)
.attr("width",640)
.attr("stroke","black")
.attr('fill',"none")


