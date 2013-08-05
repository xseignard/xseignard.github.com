(function($){
  var script = '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
  var html = ['<a class="twitter-timeline" href="https://twitter.com/xavier_seignard" ',
              'data-chrome="noheader transparent" ',
              'data-widget-id="364346162255368193">Tweets by @xavier_seignard</a>'].join('');
  var result = html + script;
  $('#tweets').html(result);
})(jQuery);
