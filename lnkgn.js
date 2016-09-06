  function mycallback(json) {
    var n = json.feed.entry.length;
    var JJ = document.querySelectorAll('li.linkRam');
    for (var i = 0, jj = JJ.length; i < jj; i++) {
      var gg = Math.floor(Math.random() * n);
      for (var j = 0; j < json.feed.entry[gg].link.length; j++) {
        if (json.feed.entry[gg].link[j].rel == 'alternate') {
          var postUrl = json.feed.entry[gg].link[j].href;
          break;
        }
      }
    var postTitle = json.feed.entry[gg].title.$t;
    var item = '<a href=' + postUrl + '>' + postTitle + '</a>';
    JJ[i].innerHTML = item;
    }
  }
