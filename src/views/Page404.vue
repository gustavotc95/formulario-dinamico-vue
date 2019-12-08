<template>
    <div class="msg-404">
        <div class="content">
            <div class="title">
                Sorry, the page you are looking for could not be found. 
            </div>
            <router-link to='/' class="btn btn-primary">Back</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .msg-404{
        height: 100vh;
        width: 100vw;
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .title {
        font-size: 36px;
        padding: 20px;
        font-family: 'Lato', sans-serif;
        font-weight: 100;
    }
    .btn{
        display: block;
        max-width: 150px;
        margin: 0 auto;
        line-height: 1;
    }
</style>