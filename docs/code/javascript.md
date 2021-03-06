---
title: Javascript
lang: en-US
tags: ["practice", "lab"]
---

# {{ $frontmatter.title }}

<TagBadge />


Examples From:
- [Javascript Cheatsheet](https://websitesetup.org/javascript-cheat-sheet/)
- [Array Methods (Javascript.info)](https://javascript.info/array-methods)
- [Strings (Javascript.info)](https://javascript.info/string)

Table of Contents:
[[toc]]

## Variables


| Description | Code                                                                                                                       |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| var         | "Can be reassigned but only accessed within a function. Variables defined with var move to the top when code is executed." |
| const       | "Cannot be reassigned and not accessible before they appear within the code"                                               |
| Let         | "Similar to const let variable can be reassigned but not re-declared"                                                      |


## Array Methods

- [Array Methods](https://javascript.info/array-methods)
  
<table-code>
<table-row-code title="adds items to the end," code='arr.push(...items)
' />
<table-row-code title="splice" sub=" Delete element from array" 
code='let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]
' />


<table-row-code title="slice" 
code='let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
alert( arr.slice(-2) ); // s,t (copy from -2 till the end)
'/>

<table-row-code title="concat" sub=" The method arr.concat creates a new array that includes values from other arrays and additional items." 
code='let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
' />


<table-row-code title="Iterate: forEach" sub=" Delete element from array" 
code='
arr.forEach(function(item, index, array) {
  // ... do something with item
});

' />


<table-row-code title="indexOf/lastIndexOf" 
code='let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true
' />


<tre  title="filter"  sub="filter returns an array of all matching elements:" >

    let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
    ];
    let someUsers = users.filter(item => item.id < 3);
</tre>



</table-code>

## String Methods
- [Strings (Javascript.info)](https://javascript.info/string)

## Number Methods
- [Number (Mozilla)](https://www.w3schools.com/js/js_number_methods.asp)
- [Number Methods (w3school)](https://www.w3schools.com/js/js_number_methods.asp)

