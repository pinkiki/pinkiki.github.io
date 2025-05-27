var posts=["GUIYUAN/","configuration/","mysql/","node/","proxy/","project-summary/","interview-me/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };