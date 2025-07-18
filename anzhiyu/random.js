var posts=["GUIYUAN/","configuration/","interview-me/","js/","mysql/","proxy/","vue3-study/","node/","project-summary/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };