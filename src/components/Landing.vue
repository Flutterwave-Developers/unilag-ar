<template>
  <div class="my-body">
    <div class="flex flex-wrap justify-center items-center mt-48 p-8">
      <div class="w-full mx-auto">
        <div class="md:mx-16">
          <p class="main-title text-left text-white uppercase font-bold m-2">The smart, easiest and fastest way to connect to medical resources</p>
          <p class="sub-title text-left uppercase mx-2 my-4">Medical services given to you without stress</p>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>


import HeaderComponent from "@/components/Header.vue";
    export default {
        components:{
            HeaderComponent
        }
    }

</script>

<style scoped>
.main-title {
  font-size: 48px;
  line-height: 65px;
  color: #fff;
  font-family: "Nunito";
}


.sub-title {
  font-size: 32px;
  line-height: 25px;
  color: #fff;
  font-family: "Nunito";
}


.sub-title2 {
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  opacity: 0.7;
  font-family: "Nunito";
}

.order-btn {
  background-color: #fed67a;
  color: #835b00;
}

img{
  width:80%;
  margin: auto;
  overflow: hidden;
}

div{
  overflow: hidden;
}

.my-body {
  min-height: 100vh;
      background: linear-gradient(
      89.81deg,
      #646363 0.05%,
      rgba(17, 17, 17, 0.65) 41.25%
    ),
    url("https://res.cloudinary.com/dldd8ucby/image/upload/v1570282291/FlutterWave/rawpixel-com-nappy-.jpg");
}
</style>