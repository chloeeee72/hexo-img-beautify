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
    width: 600px
  }

  .img-beautify-prue {
    border-radius: 8px;
    border: 1px solid #28282824;
    width: 600px
  }
  
  .img-beautify-legend {
    top: 10px;
    position: relative;
    color: #999;
  }
`

const template = (url, legend, style, width, height) => {
  return `<div class="img-beautify">
    <img src="${url ? url : ''}" alt="${legend ? legend : ''}" 
      class="img-beautify-${style === 'shadow' ? 'shadow' : 'prue'}" 
      width="${width}" 
      height="${height}"/>
    <center class="img-beautify-legend">${legend ? legend : ''}</center><br/>
  </div>`
}

hexo.extend.tag.register('img_beautify', function (args) {
  const globalOptions = hexo.config.img_beautify;
  const url = args[0];
  const legend = args[1];
  const width = args[2];
  const height = args[3];
  const { style } = globalOptions
  return template(url, legend, style, width, height);
});


const appendToHead = (document, content) => document.replace(/<\/head>/i, `${content}</head>`);

hexo.extend.filter.register('after_render:html', document => {
  return appendToHead(document, `<style type="text/css">${baseCSS}</style>`);
});
