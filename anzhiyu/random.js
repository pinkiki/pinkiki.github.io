var posts=["GUIYUAN/","interview-me/","configuration/","node/","mysql/","project-summary/","proxy/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };