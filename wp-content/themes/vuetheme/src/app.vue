<template>
    <div>
        <RightMenu></RightMenu>
        <Header></Header>  
        <div id="content">
            <Company></Company>
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>


<script>

    export default {
        components: {
        	Header: require('./components/header/index.vue'), 
            Company: require('./components/company/index.vue'),
        	Footer: require('./components/footer/index.vue'),
            RightMenu: require('./components/right-menu/index.vue')
        }
    }

</script>

