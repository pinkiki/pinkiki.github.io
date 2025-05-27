var posts=["GUIYUAN/","configuration/","interview-me/","mysql/","node/","project-summary/","vue3-study/","proxy/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };