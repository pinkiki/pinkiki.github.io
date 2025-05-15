var posts=["GUIYUAN/","configuration/","interview-me/","node/","project-summary/","mysql/","proxy/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };