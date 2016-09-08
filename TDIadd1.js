var setipiace='<div id="fb-root"></div><h4>Fammi sapere che l\'articolo ti è piaciuto cliccando:</h4>\
<div style="text-align: center;"><span class="widget-content">\
<g:plusone expr:annotation="data:annotation" expr:href="data:blog.homepageUrl.canonical.http" \
expr:size="data:size" source="blogger:blog:plusone" width="250"></g:plusone></span>\
<span class="fb-like" data-layout="button_count" data-action="like" data-size="large" \
data-show-faces="false" data-share="false"></span></div>';
var art= document.querySelector('div[itemprop="articleBody"]');
art.innerHTML+=setipiace;
