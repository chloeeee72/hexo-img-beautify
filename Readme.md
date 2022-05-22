# hexo-img-beautify

Make your Hexo image prettier

![npm](https://img.shields.io/npm/v/hexo-img-beautify.svg) ![npm](https://img.shields.io/npm/l/hexo-img-beautify.svg)

## How to use

### Installation

    npm i hexo-img-beautify

### configure

You can configure hexo-img-beautify in `_config.yml`:

```yaml
img_beautify:
  style: shadow # or prue
```

#### configure Option

| Option | Default | type | Description|
| -------------------- | ----- | ------------- | ------------------------ |
| style (**required**) | prue  | 'shadow' or 'prue' |  image box-shadow <br> 'prue' means picture without shadow |

### Usage

    {% img_beautify img_url legend legend width height %}

#### Usage Option

| Option | Default | type | Description|
| -------------------- | ----- | ------------- | ------------------------ |
| img_beautify (**required**) | img_beautify  | 'img_beautify' | hexo tag   |
| img_url (**required**) | none  | string | image url，you can put relative path or link here |
| legend  | none | string | image legend |
| width  | 600(px) | number | image width |
| height  | 600(px) | number | image height |
