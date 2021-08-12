# Readme Lab 5.2

# Lab 5.2

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
