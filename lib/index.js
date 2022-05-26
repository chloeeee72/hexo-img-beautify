"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const baseCSS = `
  .img-beautify {
    text-align: center;
  }

  .img-beautify-shadow {
    border-radius: 8px;
    box-shadow: 1px 1px 1px 1px #1111110f;
    border: 1px solid #28282824;
  }

  .img-beautify-prue {
    border-radius: 8px;
    border: 1px solid #28282824;
  }
  
  .img-beautify-legend {
    top: 10px;
    position: relative;
    color: #999;
  }
`

const template = (url, legend, style, width) => {
  return `<div class="img-beautify">
    <img src="${url}" alt="${legend}" 
      class="img-beautify-${style === 'shadow' ? 'shadow' : 'prue'}" 
      style="width:${width}px"/>
    <center class="img-beautify-legend">${legend}</center><br/>
  </div>`
}


const globalOptions = hexo.config.img_beautify;
const { style, custom } = globalOptions
const { custom_width, default_width } = custom
const getWidth = (djangoWidth) => {
  let width = 600 // set width is 600px

  const getDefaultWidth = () => {
    if (default_width
      && typeof default_width === 'string'
      && isNaN(Number(default_width))
      && custom_width) {
      const defaultWidth = custom_width.filter(item => {
        return item.name.toString() == default_width.toString()
      })
      if (defaultWidth.length > 0 && defaultWidth[0].width) {
        width = defaultWidth[0].width
      }
    }
    // default_width in custom is A NUMBER => use it
    if (custom_width.length === 0
      && default_width
      && typeof Number(default_width) == 'number'
      && !isNaN(Number(default_width))) {
      width = default_width
    }
  }
  // if width in Django template exsit，and its a number，use it
  // if width in Django template not or its NOT a number，use default width
  if (djangoWidth) {
    if (!isNaN(Number(djangoWidth))) {
      width = djangoWidth
    } else {
      const customWidthList = custom_width.filter(item => {
        return item.name.toString() == djangoWidth
      })
      if (customWidthList.length > 0) {
        width = customWidthList[0].width
      } else {
        getDefaultWidth()
      }
    }
  } else {
    getDefaultWidth()
  }
  return width
}

hexo.extend.tag.register('img_beautify', function (args) {
  const url = args[0] ? args[0] : '';
  const legend = args[1] ? args[1] : '';
  const width = getWidth(args[2]) // the height of the image is auto, so we don't need to specify it
  console.log('width', width)
  return template(url, legend, style, width);
});

const appendToHead = (document, content) => document.replace(/<\/head>/i, `${content}</head>`);

hexo.extend.filter.register('after_render:html', document => {
  return appendToHead(document, `<style type="text/css">${baseCSS}</style>`);
});
