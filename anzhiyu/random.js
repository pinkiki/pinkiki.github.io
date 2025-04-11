var posts=["Elpis/","hello/","interview-me/","nuxt-study/","vue3-study/","wechat-qrcode/","project-summary/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };