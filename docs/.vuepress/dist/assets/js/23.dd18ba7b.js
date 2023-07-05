(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{385:function(t,e,r){"use strict";r.r(e);var a=r(45),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),r("TagBadge"),t._v(" "),r("p",[t._v("Examples From:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://websitesetup.org/javascript-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Javascript Cheatsheet"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://javascript.info/array-methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array Methods (Javascript.info)"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://javascript.info/string",target:"_blank",rel:"noopener noreferrer"}},[t._v("Strings (Javascript.info)"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("Table of Contents:\n")]),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#variables"}},[t._v("Variables")])]),r("li",[r("a",{attrs:{href:"#array-methods"}},[t._v("Array Methods")])]),r("li",[r("a",{attrs:{href:"#string-methods"}},[t._v("String Methods")])]),r("li",[r("a",{attrs:{href:"#number-methods"}},[t._v("Number Methods")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"variables"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Description")]),t._v(" "),r("th",[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("var")]),t._v(" "),r("td",[t._v('"Can be reassigned but only accessed within a function. Variables defined with var move to the top when code is executed."')])]),t._v(" "),r("tr",[r("td",[t._v("const")]),t._v(" "),r("td",[t._v('"Cannot be reassigned and not accessible before they appear within the code"')])]),t._v(" "),r("tr",[r("td",[t._v("Let")]),t._v(" "),r("td",[t._v('"Similar to const let variable can be reassigned but not re-declared"')])])])]),t._v(" "),r("h2",{attrs:{id:"array-methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#array-methods"}},[t._v("#")]),t._v(" Array Methods")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://javascript.info/array-methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array Methods"),r("OutboundLink")],1)])]),t._v(" "),r("table-code",[r("table-row-code",{attrs:{title:"adds items to the end,",code:"arr.push(...items)\n"}}),t._v(" "),r("table-row-code",{attrs:{title:"splice",sub:" Delete element from array",code:'let arr = ["I", "study", "JavaScript"];\narr.splice(1, 1); // from index 1 remove 1 element\nalert( arr ); // ["I", "JavaScript"]\n'}}),t._v(" "),r("table-row-code",{attrs:{title:"slice",code:'let arr = ["t", "e", "s", "t"];\nalert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)\nalert( arr.slice(-2) ); // s,t (copy from -2 till the end)\n'}}),t._v(" "),r("table-row-code",{attrs:{title:"concat",sub:" The method arr.concat creates a new array that includes values from other arrays and additional items.",code:"let arr = [1, 2];\n\n// create an array from: arr and [3,4]\nalert( arr.concat([3, 4]) ); // 1,2,3,4\n\n// create an array from: arr and [3,4] and [5,6]\nalert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6\n\n// create an array from: arr and [3,4], then add values 5 and 6\nalert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6\n"}}),t._v(" "),r("table-row-code",{attrs:{title:"Iterate: forEach",sub:" Delete element from array",code:"\narr.forEach(function(item, index, array) {\n  // ... do something with item\n});\n\n"}}),t._v(" "),r("table-row-code",{attrs:{title:"indexOf/lastIndexOf",code:"let arr = [1, 0, false];\n\nalert( arr.indexOf(0) ); // 1\nalert( arr.indexOf(false) ); // 2\nalert( arr.indexOf(null) ); // -1\n\nalert( arr.includes(1) ); // true\n"}}),t._v(" "),r("tre",{attrs:{title:"filter",sub:"filter returns an array of all matching elements:"}},[r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v('let users = [\n    {id: 1, name: "John"},\n    {id: 2, name: "Pete"},\n    {id: 3, name: "Mary"}\n];\nlet someUsers = users.filter(item => item.id < 3);\n')])])])])],1),t._v(" "),r("h2",{attrs:{id:"string-methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string-methods"}},[t._v("#")]),t._v(" String Methods")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://javascript.info/string",target:"_blank",rel:"noopener noreferrer"}},[t._v("Strings (Javascript.info)"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"number-methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#number-methods"}},[t._v("#")]),t._v(" Number Methods")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.w3schools.com/js/js_number_methods.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Number (Mozilla)"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3schools.com/js/js_number_methods.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Number Methods (w3school)"),r("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);