<template>
    <div>
        <LandingComponent/>
        <LandingComponent2/>
        <LandingComponent3/>
    </div>
</template>

<script>
import LandingComponent from "@/components/Landing.vue";
import LandingComponent2 from "@/components/Landing2.vue";
import LandingComponent3 from "@/components/Landing3.vue";
    export default {
        components:{
            LandingComponent,
            LandingComponent2,
            LandingComponent3
        }
    }
</script>

<style lang="scss" scoped>

</style>