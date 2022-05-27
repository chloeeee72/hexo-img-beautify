# hexo-img-beautify

Make your Hexo image prettier

![npm](https://img.shields.io/npm/v/hexo-img-beautify.svg) ![npm](https://img.shields.io/npm/l/hexo-img-beautify.svg)

## Link

npm: [click to check](https://www.npmjs.com/package/hexo-img-beautify)

github: [click to check](https://www.npmjs.com/package/hexo-img-beautify)

## How to use

### Installation

    npm i hexo-img-beautify

### configure

You can configure hexo-img-beautify in `_config.yml`:

```yaml
# hexo-img-beautify config
img_beautify:
  style: shadow # or prue
  custom: # custom width style
    custom_width: [
      {name: "my_width_one", width: 400},
      {name: "my_width_two", width: 600}, 
    ]
    default_width: 600 # my_width_one/my_width_two

```

#### configure Option

| Option | Default | type | Description|
| -------------------- | -------- | ------------- | ------------------------ |
| style (**required**) | prue     | 'shadow' or 'prue' |  image box-shadow <br> 'prue' means picture without shadow |
| custom.custom_width  | none     | Object Array, [{name:'',width:''}]  | custom width style |
| custom.default_width | 600(px)  | name in custom.custom_width / number |  image default width|

### Usage

      {% img_beautify img_url legend width %}     

#### Example

      If you set custom.custom_width，you can use it in Django template：

          {% img_beautify "https://example.com/image.jpg" 'this is a description' my_width_one %}

          {% img_beautify "../the_local_path.jpg" 'this is a description' my_width_two %}

      or 

          {% img_beautify "https://example.com/image.jpg" 'this is a description' 400 %}

          {% img_beautify "../the_local_path.jpg" 'this is a description' 800 %}

> the height of the image is auto, so we don't need to specify it

#### Usage Option

| Option | Default | type | Description|
| -------------------- | ----- | ------------- | ------------------------ |
| img_beautify (**required**) | 'img_beautify'  | 'img_beautify' | hexo tag,must be "img_beautify",if you change it,it don't work |
| img_url (**required**) | ' '  | string | image url,you can put relative path or link here |
| legend (**required**) | ' ' | string | image legend |
| width  | custom.default_width, if you don't set both, it is 600(px) | name in custom.custom_width / number | image width |

## NOTE

**Note: default_width is a global configuration,if you don't set it,and you don't set width in Django template,the Image's width will be 600px!!!**

## the width of the image setting priority

    1. width in Django template
    2. width in custom.custom_width
    3. default width in custom.default_width
    4. 600 px
