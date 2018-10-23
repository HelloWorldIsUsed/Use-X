<template>
  <div class="hello">
    <h1>{{ msg }}</h1>  
    <h2>Essential Links</h2>
    <div class="silde-con">
      <xSlider :initOption="initOption"></xSlider>
    </div>
    <div class="left-con">
    
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      initOption:{
          data:[
              'https://upload.jianshu.io/admin_banners/web_images/4438/bf9c6d58581af41357faee1fbc1c360426335dae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
              'https://upload.jianshu.io/admin_banners/web_images/4431/05142bf9b8bb00a31e0ceae8a16856bc896f529e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
              'https://upload.jianshu.io/admin_banners/web_images/4438/bf9c6d58581af41357faee1fbc1c360426335dae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
          ],
          speed: 3000
      }
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.silde-con{
  width:625px;
  height:270px;
}
</style>
