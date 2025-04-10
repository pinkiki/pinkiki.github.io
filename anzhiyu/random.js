var posts=["nuxt-study/","hello/","interview-me/","project-summary/","vue3-study/","wechat-qrcode/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };