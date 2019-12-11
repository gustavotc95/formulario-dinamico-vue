<template>
  <div>work</div>
</template>

<script>
export default {
    props: ['infos'],

    methods: {
        
    },

    mounted () {
        if(this.infos === undefined){
            this.$router.push({ path: '/' })
        }
        console.log(this.infos);
    }
}
</script>

<style>

</style>