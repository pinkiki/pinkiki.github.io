var posts=["GUIYUAN/","configuration/","mysql/","js/","interview-me/","proxy/","node/","vue3-study/","project-summary/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };