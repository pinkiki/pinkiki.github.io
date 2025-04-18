var posts=["Elpis/","interview-me/","nuxt-study/","project-summary/","hello/","wechat-qrcode/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };