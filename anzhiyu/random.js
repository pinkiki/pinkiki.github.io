var posts=["hello/","interview-me/","nuxt-study/","project-summary/","vue3-study/","wechat-qrcode/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };