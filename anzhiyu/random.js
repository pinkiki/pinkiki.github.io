var posts=["GUIYUAN/","configuration/","interview-me/","js/","mysql/","node/","proxy/","vue3-study/","project-summary/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };