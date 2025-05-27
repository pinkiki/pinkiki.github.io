var posts=["interview-me/","node/","configuration/","GUIYUAN/","mysql/","proxy/","project-summary/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };