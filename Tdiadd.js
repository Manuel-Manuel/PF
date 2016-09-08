var setipiace='<div id="fb-root"></div><script>(function(d, s, id){var js,\
fjs = d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);\
js.id=id;js.src="//connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v2.7";\
fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));\
</script><div style="text-align: center;"><h4>Fammi sapere che l\'articolo ti è\
piaciuto cliccando:</h4></div><div style="text-align: center;"><span class="widget-content">\
<g:plusone expr:annotation="data:annotation" expr:href="data:blog.homepageUrl.canonical.http" \
expr:size="data:size" source="blogger:blog:plusone" width="250">\
<script type="text/javascript">window.___gcfg = {&quot;lang&quot;:&quot;data:language/>&quot;};</script>\
</g:plusone></span><span class="fb-like" data-layout="button_count" \
data-action="like" data-size="large" data-show-faces="false" data-share="false"></span></div>'
var art= document.querySelector('div[itemprop="articleBody"]');
art.innerHTML+=setipiace;
