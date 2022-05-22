"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const baseCSS = `
  .img-beautify-shadow{
    border-radius: 8px;
    box-shadow: 1px 1px 1px 1px #1111110f;
    border: 1px solid #28282824;
  }
  .img-beautify-prue{
    border-radius: 8px;
    border: 1px solid #28282824;
  }
  .img-beautify-legend{
    top: 10px;
    position: relative;
    color: #999;
  }
`

const template = (url, legend, style) => {
  return `<div>
    <img src="${url ? url : ''}" alt="${legend ? legend : ''}" class="img-beautify-${style === 'shadow' ? 'shadow' : 'prue'}"/>
    <center class="img-beautify-legend">${legend ? legend : ''}</center><br/>
  </div>`
}

hexo.extend.tag.register('img_beautify', function (args) {
  const globalOptions = hexo.config.img_beautify;
  const url = args[0];
  const legend = args[1];
  const { style } = globalOptions
  return template(url, legend, style);
});


const appendToHead = (document, content) => document.replace(/<\/head>/i, `${content}</head>`);

hexo.extend.filter.register('after_render:html', document => {
  return appendToHead(document, `<style type="text/css">${baseCSS}</style>`);
});
