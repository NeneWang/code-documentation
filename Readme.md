# Lab 5.2

## Badge

<p>
<a href="[http://jigsaw.w3.org/css-validator/check/referer](http://jigsaw.w3.org/css-validator/check/referer)">
<img style="border:0;width:88px;height:31px"
src="[http://jigsaw.w3.org/css-validator/images/vcss](http://jigsaw.w3.org/css-validator/images/vcss)"
alt="Valid CSS!" />
</a>
</p>

<p>
<a href="[http://jigsaw.w3.org/css-validator/check/referer](http://jigsaw.w3.org/css-validator/check/referer)">
<img style="border:0;width:88px;height:31px"
src="[http://jigsaw.w3.org/css-validator/images/vcss-blue](http://jigsaw.w3.org/css-validator/images/vcss-blue)"
alt="Valid CSS!" />
</a>
</p>

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

## Error

The CSS created in the distributable styles (docs/.vuepress/dist/assets/css/0.styles.7a8efcdf.css) seems to be created because of Vuepress default theme implementation of :blur, which might not be available yet for CSS Level 3

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef7c19db-9e6c-48fe-bf7a-022b433f35e0/Untitled.png)

After manually deleting , everything seems to works fine

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d60662c3-e0d0-4281-979d-83685338f636/Untitled.png)

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