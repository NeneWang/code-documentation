# Readme Lab 5.2

[Live Demo](https://docs.wangnelson.xyz/)

# Lab 5.2

Table of Contents:
- [Readme Lab 5.2](#readme-lab-52)
- [Lab 5.2](#lab-52)
  - [Badges](#badges)
  - [Setup](#setup)
    - [Requirements](#requirements)
    - [Running the Repository on your Local Machine](#running-the-repository-on-your-local-machine)
  - [My Styling](#my-styling)
  - [Yarn Build CSS Error](#yarn-build-css-error)

## Badges

Badges:
<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>
       
<p>
<a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>

## Setup

### Requirements
- [Node](https://nodejs.org/en/download/ )
- [Vue](https://vuejs.org/v2/guide/installation.html)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [Make](http://gnuwin32.sourceforge.net/packages/make.htm)
- [git](https://git-scm.com/downloads)
- [git-ftp](https://blog.jongallant.com/2017/01/install-git-ftp-windows/)



### Running the Repository on your Local Machine

 1. Make sure you have the requirements installed 
 2. Open your terminal
 3. Clone the repo: ```git clone https://github.com/NeneWang/code-documentation.git```
 4. Navigate to root folder: ```cd code-documentation/ ```
 5. Install Dependencies: ```yarn install```
 6. localhost:```yarn docs:dev``` 


## My Styling

I made the styling in stylus CSS pre-processor. My Styling can be found in index.styl (docs/.vuepress/stylus)

Here is a snippet of my styling:

```scss
.badge-primary
  background-color: #8DB6C7 !important

.home .hero img
  max-width 450px!important

.table-title
  text-transform: capitalize
  padding-top: 1em;
  &::first-letter
    font-size: 110%;
  
.custom-block.tip
  border-color: $accentColor

div.feature{
  h2{
    font-weight: bold !important;
  }
}

th {
    border-bottom-color: $accentColor ;
    border-bottom-width: medium;
}

a{
  text-decoration: none  !important;
}

pre.code-pre{

color:white;
font-size: .65em;
}

.subtitle{
  font-size:.7em;
}
```

## Yarn Build CSS Error

The CSS created in the distributable styles (docs/.vuepress/dist/assets/css/0.styles.7a8efcdf.css) (after running yarn docs:build) seems to be created because of Vuepress default theme implementation of :blur, which might not be available yet for CSS Level 3

![Untitled](Readme%20Lab%205%202%2085d865b6302e493693c2f5fb6798ded8/Untitled.png)

After manually deleting , everything seems to works fine

![Untitled](Readme%20Lab%205%202%2085d865b6302e493693c2f5fb6798ded8/Untitled%201.png)

```
<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>

```

```
<p>
<a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>

```
