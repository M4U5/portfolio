/*-----------------------------------------------------------------------------
  REQUIRE
-----------------------------------------------------------------------------*/

var yo = require("yo-yo")
var csjs = require("csjs-inject")
var minixhr = require('minixhr')

/*-----------------------------------------------------------------------------
  THEME
-----------------------------------------------------------------------------*/


var FONT 	= 'Yatra One cursive'
var RED 	= '#C12020'
var ROSE 	= '#BD6B73'
var BLUE 	= '#ABA9C3'
var STEEL = '#BBB6DF'
var BLACK = '#5B616A'
var COLORS = [RED, BLACK, BLUE, STEEL]
/*-----------------------------------------------------------------------------
  LOADING FONT
-----------------------------------------------------------------------------*/

var links = ["https://fonts.googleapis.com/css?family=Yatra+One", "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"]
var font = yo`<link href=${links[0]} rel ="stylesheet" type="text/css">`
var fontAwesome = yo`<link href=${links[1]} rel='stylesheet' type='text/css'>`
document.head.appendChild(font)
document.head.appendChild(fontAwesome)

/*--------------------------------------------------------------------------------
  LOADING DATA
--------------------------------------------------------------------------------*/

minixhr('https://api.github.com/users/M4U5', startPage)
function startPage (data) {
  var data = JSON.parse(data)
  document.body.appendChild(template(data))
  activateScrollEffect(COLORS)
}

/*-----------------------------------------------------------------------------
  WEB PAGE
-----------------------------------------------------------------------------*/

var css = csjs`
	body {
    text-align: center;
    background-color: ${ROSE};
    color: black;
    font-family: ${FONT}
  }
  h1 {
    margin-top: 1em;
    color: ${ROSE};
    font-size: 2em;
    font-weight: bold;
    text-transform: uppercase;
  }
	h3 {
    color: ${BLACK};
    font-size: 2em;
    margin-bottom: 3em;
  }
  img {
    margin-top: 3em;
    border: 5px solid ${STEEL};
    border-radius: 30%;
    width: 15em;
  }
  `


function template (data) {
  return yo`
  	<div>
    <img src="${data.avatar_url}">
      <h1>${data.name}</h1>
      <h3>${data.bio}</h3>
      ${portfolioComponent()}
  		${textboxComponent()}
  		${footerComponent()}
    </div>
	`
}



/*--------------------------------------------------------------------------------
  PORTFOLIO COMPONENT
--------------------------------------------------------------------------------*/
function portfolioComponent () {
	var css = csjs`
  	.portfolio {
      margin: 2em 0 2em 0;
      width: 100%;
    }
    .portfolioItem {
      width: 100%;
      padding-bottom: 200px;
    	background-color: ${BLACK};
      color: ${RED};
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      transition: 2s;
    }
    .portfolioTitle {
      margin: 2em;
      padding: 0.5em;
      font-size: 3em;
      color: ${STEEL};
      background-color: ${BLACK};
      border-radius: 4px;
      border: 4px solid ${ROSE};
      transition: 2s;
    }
    .portfolioBody {
      margin: 0 40% 0 0em;
      text-align: justify;
      font-size: 1.2em;
      color: ${RED};

    }
  	.portfolioItem_isHover {
      width                : 100%;
      padding-bottom       : 200px;
    	background-color     : ${RED};
      color                : ${BLUE};
      display              : flex;
      flex-direction       : column;
      align-items          : flex-start;
      cursor               : pointer;
      transition           : 2s;
    }
    .portfolioTitle_isHover {
      margin                : 2em 2em 2em 1.5em;
      padding               : 0.5em;
      font-size             : 3em;
      color                 : ${ROSE};
      background-color      : ${STEEL};
      border-radius         : 4px;
      border                : 4px solid ${BLACK};
      transition            : 2s;
    }
    .portfolioBody_isHover {
      margin               : 0 35% 0 4em;
      text-align           : left;
      font-size            : 1.2em;
      color                : ${BLUE};
      transition           : 2s;
    }
  `
  function template () {
    return yo`
      <div onmouseover=${hoverPortfolio}>
        <div class="${css.portfolio}">
          <div class="${css.portfolioItem}">
            <div class="${css.portfolioTitle}">
              Portfolio: My quiz app
            </div>
            <div class="${css.portfolioBody}">
              My quiz is a quiz app where users can answer
              Likert scale questions and compare their answers
              with others. It stores all the data in the database
              and enables an admin view of all the answers.
             </div>
          </div>
        </div>
      </div>
    `
  }
  function hoverPortfolio () {
    var newElement = yo`
      <div onmouseout=${unhoverPortfolio}>
        <div class="${css.portfolio}">
          <div class="${css.portfolioItem_isHover}">
            <div class="${css.portfolioTitle_isHover}">
              Portfolio: My quiz app
            </div>
            <div class="${css.portfolioBody_isHover}">
              My quiz is a quiz app where users can answer
              Likert scale questions and compare their answers
              with others. It stores all the data in the database
              and enables an admin view of all the answers.
             </div>
          </div>
        </div>
      </div>
    `
    // 'this' is a reference to the dom node,
    // that hoverPortfolio was attached to as an eventListener
    yo.update(element, newElement)
  }
  function unhoverPortfolio() { yo.update(element, template()) }

  var element = template()
  return element
}
/*--------------------------------------------------------------------------------
  TEXTBOX COMPONENT
--------------------------------------------------------------------------------*/

function textboxComponent () {
  var css = csjs`
  .textbox {
    margin: 5em 25% 3em 25%;
    color: ${RED};
    font-size: 2em;
    line-height: 1.5em;
    text-align: justify;
  }
  `

  function template () {
    return yo`
      <div>
        <div class="${css.textbox}">
          Check out stuff I do and get in touch. We can meet for coffee
          and talk about amazing products you want to build. I can
          help you make it work :)
        </div>
      </div>
    `
  }

  var element = template()
	return element
}



/*--------------------------------------------------------------------------------
  FOOTER COMPONENT
--------------------------------------------------------------------------------*/
function footerComponent () {
	var css = csjs`
  	.container {
      display: flex;
      justify-content: center;
    }
    .icon {
      padding: 1em;
      font-size: 35px;
      color: ${RED};
    }
    .icon:hover {
      opacity: 0.4;
    }
    `

  function template () {
    return yo`
    <div class="${css.container}">
      <a href="https://github.com/M4U5">
        <i class="${css.icon} fa fa-github" aria-hidden="true"></i>
      </a>
      <a href="mailto:master4u90@gmail.com ">
        <i class="${css.icon} fa fa-envelope-o" aria-hidden="true"></i>
      </a>
      <a href="https://www.facebook.com/dementedwithreason">
        <i class="${css.icon} fa fa-facebook" aria-hidden="true"></i>
      </a>
    </div>
    `
  }

  var element = template()
  return element
}

/*-----------------------------------------------------------------------------
  HELPERS
-----------------------------------------------------------------------------*/
function activateScrollEffect (COLORS) {
  var docHeight = document.body.offsetHeight
  var colorAreaHeight = docHeight/COLORS.length
  window.addEventListener("scroll", function(event) {
    var position = document.body.scrollTop
    var i = Math.floor(position/colorAreaHeight)
    var color    = COLORS[i]
    document.body.style.backgroundColor = color
    document.body.style.transition = "background-color 3s"
  })
}
