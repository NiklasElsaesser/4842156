<template>
<header id="top" class="pagegridheader flexboxheader">
   <span>DHBW Stuttgart Web Engineering Portal</span>
</header>
<nav class="pagegridnavigation">
  <ul class="flexboxnav">
    <li><a href="#Informatik">Informatik</a></li>
    <li><a href="#Elektrotechnik">Elektrotechnik</a></li>
    <li><a href="#Maschinenbau">Maschinenbau</a></li>
    <li id ="Dienste"><a href="#">Dienste</a></li>
  </ul>
</nav>
<div id="scrollpart" class="pagegridsrcol" style="overflow:auto">
  <div class="flexyouTube youTube">
    <div class="card" style="position:relative; width: 80%; max-width: 600px;">
    <div style="position:relative; width:100% height: 0; padding-bottom: 56.25%;">
     <iframe style="position: absolute;width: 100%;height: 100%;left: 0;top: 0;" id= "myiframe"
      src="https://youtube.com/embed/2dy9fLZEg9A">
     </iframe>
  </div>
</div>
 <div class="card"
     style="cursor:pointer" onclick="this.firstElementChild.src = '/htm/css3.htm';
                                    this.firstElementChild.style.display ='block';">
  Die DHBW Stuttgart steht für eine einzigartige Verbindung von Theorie und Praxis:
  Zusammen mit rund 2.000 Unternehmen und sozialen Einrichtungen (den Dualen Partnern)
  werden über 40 anerkannte Bachelor-Studienrichtungen in den Fakultäten Wirtschaft,
  Technik und Sozialwesen angeboten
    <iframe id= "myiframe1" style="width:100%;display:none; width:100%; min-height:400px"></iframe>
</div>
</div>
  <div class="flexFakultaet Fakultaeten card">
    <div id="Informatik" class="FakultaetTitel">Informatik</div>
    <div class="FakultaetBild card">
    </div>
  <div class="FakultaetBeschreibung card">Informatiker übertragen Vorgänge der realen Welt auf Computersysteme,
     indem sie die Aufgabenstellung in geeignete Modelle überführen und diese dann
     auf Softwaresystemen abbilden. Die Vielfalt an Anwendungsmöglichkeiten ist dabei
     nahezu unbegrenzt und steigt stetig mit der zunehmenden Leistungsfähigkeit der Systeme.
  </div>
</div>
<div class="flexFakultaet Fakultaeten card">
<div id="Elektrotechnik" class="FakultaetTitel">Elektrotechnik</div>
<div class="FakultaetBild card">
</div>
  <div class="FakultaetBeschreibung card">
   Die Elektrotechnik bewegt und verändert die Welt:
     Smartphones, Assistenzsysteme, Smart Home oder Medizintechnik sind aus
     unserem Leben nicht mehr wegzudenken, die Energiewende ist in aller Munde.
     Ingenieurinnen und Ingenieure der Elektrotechnik gestalten und entwickeln
     die Systeme und haben so einen direkten Einfluss auf unser alltägliches Leben.
     Sie befassen sich nicht nur mit elektrischen und elektronischen Systemen, sondern arbeiten
     in einem sehr vielfältigen Arbeitsfeld, das von der Entwicklung eines Produkts
     über das Projektmanagement bis hin zu Marketing und Vertrieb reicht.
   </div>
</div>
<div class="flexFakultaet Fakultaeten card">
<div id="Maschinenbau" class="FakultaetTitel">Maschinenbau</div>
<div class="FakultaetBild card">
</div>
<div class="FakultaetBeschreibung card">
    Der Maschinenbau mit seinen zahlreichen Ausprägungen verknüpft Theorie
     und Praxis, Naturwissenschaft und Technik. Die umfassende Ausbildung an
     der Dualen Hochschule Stuttgart ermöglicht es Absolventinnen und Absolventen
     des Studiengangs, Aufgaben in vielen Tätigkeitsfeldern zu übernehmen:
</div>
</div>
<div style="height:100px;"></div>
</div>
<footer class="pagegridsfooter">Copyright &copy; DHBW Stuttgart</footer>
<div id="PullupOptions" style="position:fixed;left:0;display:none;background-color:white;z-index:10" class="card">
  <button  id="PullupOptionsBtn" onclick="this.parentElement.style.display='none'">
          <span style="font-size:1.5em; text-align: center;"> Zurück </span></button>
<ul class="popuplist">
  <li id="popupli1" style="list-style-type: none; padding:15px; cursor:pointer;">Leute</li>
  <li id="popupli2" style="list-style-type: none; padding:5px; display:flex;justify-content:space-between;align-items:flex-end;min-width:300px;">
    <p style="margin:0.5rem;">Wikipedia Search</p>
    <input style="margin:0.5rem;" id ="wikisearchstring">
    <button style="margin:0.5rem;" onclick="runWikiQuery();">Go</button>
  </li>
</ul>
</div>
<div id="showwindow" style="position:fixed;left:0;top:20%;max-height:75%;overflow:auto;display:none;background-color:white;z-index:10" class="card">
  <button type="button" id="showwindowbtn" onclick="this.parentElement.style.display='none'">
    <span style="font-size:1.5em; text-align: center;"> Zurück </span></button>
    <div id="showwindowData"></div>
</div>
</template>

<script>

//  Javascript Exercise 1..  JSON and Pulldown Window
//
// Follow the comments and code the missing part.
//
"use strict";   // this gives us some more discipline in coding correct Javascript
//
// Function Init defines a string. The content of that string is actually a JSON.
// This example is just for our training.
// the object. So what we do here is to define a string ' .JSON.... ' and then parse it.
function Init ()
{
  console.log("Init läuft");
// Define the JSON String
//
var jsonstring = ' { "Menschen" : [' +
  ' { "Vorname" : "Peter", "Nachname" :"Müller", "Gender": "male", "Rolle" : "Student"  },' +
  ' { "Vorname" : "Susanne", "Nachname" :"Lehmann", "Gender": "female", "Rolle" : "Student"  },' +
  ' { "Vorname" : "Jürgen", "Nachname" :"Schneider", "Gender": "male", "Rolle" : "Dozent"  }'+
  //  add another Person ..  see this statement concatenates substrings using the +  operator
  //  ... add another person like  ' .... ' +
  ' ] }';
//
//  Parse the jsonstring  to build an Object and put it as property to the global window Object.
//  This object has one attribute named Menschen which as value has an array of objects declaring
//  the people.
//  Would you agree ??
//  Putting it at the windwow object is not a good coding practice (but good enough for now).. we
//  need a global scope because differnt functions are using it..
//  It is your choice..
//
// we can simply add own properties the existing global objects like the window object or document object
// (again a bit dirty but fine for us now)
//
// we are using the JSON object method parse method to convert the string to a object structure
//
window.Menschen = JSON.parse(jsonstring);
//
// Define all click events
//
// Here are some examples.
//
//
document.getElementById('Dienste').addEventListener("click", showDienste);
// Above just gives the name of the function to the event listener, the function dothisnow must be specifed
// somewhere else
//
document.getElementById('popupli1').addEventListener("click",function() {showMenschen();});
// Above defines a inline function (anonymous function) as part of the addEventListener second parameter
// the code to be executed is within {} as part part of the second parameter and it
//
//
// The dothisnow function (as a basic example) makes sure that the Pullup element, which is initially invisible
// are made visible and is aligned right after the fixed header
// A routine like this can be called when e.g. the 'Dienste' button has been clicked
//
 }
function showDienste()
 {
  console.log("Pull up"); // just log that the event has triggered the right routine.
  //
  // access the pullup Window
  //
  var pull = document.getElementById('PullupOptions'); // variable pull refers to the HTML element with the id="abc"
  //
  // now you can simply modifiy the style attributes using this pull.style.123 notation
  // below are just examples
  // Let's assume this routine is the routine which is executed when the 'Dienste' link
  // has bee pressed and you want to make you Dienste popup visible.
  // The first question to answer is where to position this popup ?
  // Let's say we position it right below the navigation bar on the left side.
  // meaning we 'overlay' the beginning of the scrollable part
  // The code below (as an example) would do exactly that.
  //
  //
  //
  pull.style.top = document.getElementById('scrollpart').offsetTop + "px";
  pull.style.display = "block";
   }
  //
  // This function is a code skeleton of getting the above defined JSON and
  // to build an HTML string implementing a table with the JSON data
  //
function showMenschen()  {
  //
  //  Show Menschen Object as dynamic table
  //
  console.log("showMenschen ");
  //
  // We could use JavaScript and the HTML object methods and properties to build a table or we just
  // construct a string with the HTML data
  //
  var tableheader = "<table> <tr>"; // this is the table header .. just take it
  tableheader += "<th>Vorname</th><th>Nachname</th><th>Gender</th><th>Rolle</th></tr>";
  //
  // now we build each row
  //
  var tabletext = "";
  var alle = window.Menschen;
  // var alle is now the reference to the Object
  // alle.Menschen is the array of people
  for (var i = 0; i < alle.Menschen.length; i++) {
    var person = alle.Menschen[i];
    tabletext += "<tr><td>" + person.Vorname + "</td>";
    tabletext += "<td>" + person.Nachname + "</td>";
    tabletext += "<td>" + person.Gender + "</td>";
    tabletext += "<td>" + person.Rolle + "</td></tr>";
  }

  var tableclosing = "</table>"; // the table end just take it
  var fulltext = tableheader + tabletext + tableclosing;
  //
  // save the full text as innerHTML of the popup element named showwindowData
  document.getElementById('showwindowData').innerHTML = fulltext;
  // show the curently invisible showwindow item
  document.getElementById('showwindow').style.display = "block";
 }
 //
 //  Wiki Proessing
 //
 function runWikiQuery(){
  var query = "/proxy/?url=https://de.wikipedia.org/w/api.php"
  query = query + "?action=query&generator=prefixsearch&format=json&gpslimit=4"
                + "&prop=extracts%7Cdescription"
                + "&exintro=1&explaintext=1&exsentences=3&gpssearch="
                + document.getElementById('wikisearchstring').value;
  var xhttp = new XMLHttpRequest();
  console.log("Wiki Search String ",query);
  xhttp.onreadystatechange = function() {
    console.log("callback reached ",this.readyState);
    if (this.readyState == 4 && this.status == 200) {
      try {
        var response = JSON.parse(this.responseText);
      } catch (e) {
        document.getElementById('showwindowData').innerHTML = e;
        document.getElementById('showwindow').style.display = "block";
        return;
      }
      if (response.error != null && response.error.message != undefined)
      {
          document.getElementById('showwindowData').innerHTML = "Schade es ist ein Fehler aufgetreten " + response.error.message;
          document.getElementById('showwindow').style.display = "block";
      }
      else {
        console.log("Data ", response.response.query.pages);
        var text = "<table id='wikiresulttable' style='background-color:beige;'><tr><th>Search Argument</th><th>Description</th><th>Extract</th><th>Link</th><tr>";
        var pages = response.response.query.pages;  // for potential input
        for (var page in pages) {
          if (pages.hasOwnProperty(page)) {
             (pages[page].description ==  undefined) ? " - " : pages[page].description;
            text += "<td>" + pages[page].title + "</td>";
            text += (pages[page].description ==  undefined) ? "<td> - </td>": "<td>" + pages[page].description + "</td>";
            text += (pages[page].extract == undefined) ? "<td> - </td>":"<td>" + pages[page].extract + "</td>";
            text += "<td><a href=" + "'https://de.wikipedia.org/?curid=" + pages[page].pageid + "' target='_blank'>" +
                    "https://de.wikipedia.org/?curid=" + pages[page].pageid+ "</a></td></tr>"
          }
        }
        text += "</table>";
        document.getElementById('showwindowData').innerHTML = text;
        document.getElementById('showwindow').style.display = "block";
      }
    }
  };
  xhttp.open("GET",query, true);
  xhttp.send();
}

</script>

<style>
  /* ----------------------------------------------------------------------------
   Base Default Setting
------------------------------------------------------------------------------*/
* {margin:0;padding:0}
* {box-sizing: border-box;margin:0;padding:0;}
header,footer {color: white;  background-color: black; padding:1em;width:100%;}
nav,header {width:100%;}
/* a nice card layout (as modern frameworks show as well)                     */
.card {background-color: white; border-radius: 5px; margin:10px;
       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1rem;}
/* -----------------------------------------------------------------------------
  Define the viewport (visible page) as CSS Grid
  The Grid consists of the Header, the Navigation ,
  the scrollable Part (youTube, Fakultäten) and the footer
  In this case the Grid has four rows (height = auto) and 1 column with a
  width of 100 %
  The Header, the youTube and the Fakultäten become a flexbox
  ----------------------------------------------------------------------------  */
.pagegridcontainer {display:grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    justify-items: stretch;
    align-items: stretch;
  }
  .pagegridheader {
    padding-right: 18px;
    grid-area: 1 / 1 / span 1 / span 1}
  .pagegridnavigation {grid-area: 2 / 1 / span 1 / span 1}
  .pagegridsrcol  {
    padding-right: 20px;
    grid-area: 3 / 1 / span 1 / span 1}
  .pagegridsfooter  {grid-area: 4 / 1 / span 1 / span 1}
/* -----------------------------------------------------------------------------
   The following statements are examples of flex-box classes, of course you can
   build your own
-------------------------------------------------------------------------------- */
    .flexboxheader,.flexboxnav,.flexFakultaet {display:flex; flex-flow: row wrap;}
    .flexboxheader,.flexFakultaet {justify-content: space-between; align-items: center;}
    .flexFakultaet {justify-content: space-between; align-items: stretch;}
    .flexboxnav {justify-content: flex-end;}
    .flexyouTube {flex-flow:column;}
/*------------------------------------------------------------------------------
/* Navigation Bar
-------------------------------------------------------------------------------*/
nav {background:darkgrey;}
nav::after{clear:both; content:""; display:block;}   /* just take this          */
nav li {list-style-type: none; text-align: center;}
nav li {min-width:100px;max-width: 450px}
/* Give each even list item the color #848d9e; and each odd #e2e4e8;            */
nav li:nth-child(2n) {background: #848d9e;}
nav li:nth-child(2n+1) {background: #e2e4e8;}
/* Take the rest as it is or modify to improve.. this is up to you              */
nav li:hover {background-color:white;}
nav li a { text-decoration: none; display:block; padding:1.2rem; color: yellow; font-weight: bold;}
a:visited { color: blue;}
a:hover, a:active, a:focus { color: darkred;  text-decoration: none;}
/* -----------------------------------------------------------------------------
YouTube Section
--------------------------------------------------------------------------------*/
.youTube  {padding:2rem;background-color: #8282064d}
/* -----------------------------------------------------------------------------
Fakultäten
--------------------------------------------------------------------------------*/
.Fakultaeten {background-color: white;}
.FakultaetTitel {font-size:1.8rem;color:white;text-align: center; padding:2rem;width:100%;background-color:#2b0361;}
.FakultaetBild {min-width:150px;max-width: 300px;}
.FakultaetBild > img {width:100%;}
.FakultaetBeschreibung {min-width:150px;max-width: 900px;}
/* -----------------------------------------------------------------------------
    some more CSS as part of our JavaScript Executions
--------------------------------------------------------------------------------*/
button {background-color: lightgrey; padding:0.7rem; border-radius: 3px;cursor:pointer}
table {clear:both; margin:10px 2px 10px 2px; border-collapse: collapse;}
tr:hover{background-color:rgba(20, 20, 58, 0.29);}
td {border: 2px solid lightgrey;padding:8px}
.popuplist {background-color: #b2b6b7;margin: 1rem 0 1rem 0;}
.popuplist>:nth-child(2n) {background-color: #f5f1f1}
#popupli3 > * {padding:0.1rem;}
.flexboxheader,.flexpullup,
                .flexChatbottom,.flexChatheader {display:flex;justify-content: space-between; align-items: center;}
.chatleft {background-color: #bcc5de; position:relative; left:0px; width: 73%;
  padding:1em; margin-bottom: 1em;box-shadow: 10px 10px 5px black; border-radius: 5px}
.chatright {background-color: #859ee4; position:relative; left:25%; width: 73%;
   padding:1em; margin-bottom: 1em;box-shadow: 10px 10px 5px black; border-radius: 5px}
.chatOwner {list-style-type: none; padding-left:20px; font-size:0.6rem; font-style: italic; word-wrap: break-word; }
.chatText {list-style-type: none; padding-left:20px; font-size:1.1rem;  word-wrap: break-word;}
.chatgridcontainer {display:grid;
    grid-template-columns: 100%;
    grid-template-rows: 80px auto 60px;
    justify-items: stretch;
    align-items: stretch;
  }
  .chatgridheader {grid-area: 1 / 1 / span 1 / span 1}
  .chatgridmessages {grid-area: 2 / 1 / span 1 / span 1}
  .chatgridbuttons  {grid-area: 3 / 1 / span 1 / span 1}
/* MQ for changing the styles a (not the layout !!)
/* For mobile phones: */
/* For Handy  10 width to 450 */
@media only screen and (min-width: 10px) {
  header span {font-size: 1rem;padding-right:1.0rem}
  nav li {width:100%;}
  .FakultaetBild {width:100%}
  .FakultaetBeschreibung {width:100%}
}
    /* For small  tablets: 450-700  */
@media only screen and (min-width: 450px) {
header span {font-size: 1.2rem;padding-right:1.2rem}
nav li {width:25%;}
.FakultaetBild {width:33.33%}
.FakultaetBeschreibung {width:60%}
}
@media only screen and (min-width: 700px) {
  header span {font-size: 1.4rem;padding-right:1.5rem}
  nav li {width:25%;}
  .FakultaetBild {width:33.33%}
  .FakultaetBeschreibung {width:60%}
}
@media only screen and (min-width: 1000px) {
  header span {font-size: 1.6rem;padding-right:2rem}
  nav li {width:25%;}
  .FakultaetBild {width:33.33%}
  .FakultaetBeschreibung {width:60%}
}

</style>
