var posts=["configuration/","interview-me/","mysql/","node/","GUIYUAN/","proxy/","project-summary/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };