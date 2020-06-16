<template>
  <div class="calendar">
      
  </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{},
    created(){
        console.log(this.$route.path);
        
    }
}
</script>
<style lang="scss">
.calendar{
    width: 100%;
    height: 100%;
}
</style>