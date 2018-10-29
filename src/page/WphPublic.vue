<template>
    <div>
        <wph-public-header></wph-public-header>
        <wph-fashion-top></wph-fashion-top>
        <wph-fashion-down></wph-fashion-down>
        <wph-public-footer></wph-public-footer>
    </div>
</template>
<script>
  import WphPublicHeader from '../components/public/WphPublicHeader'
  import WphPublicFooter from '../components/public/WphPublicFooter'
  import WphFashionTop from '../components/fashion/WphFashionTop'
  import WphFashionDown from '../components/fashion/WphFashionDown'
    export default {
        components: {
          WphPublicHeader,
          WphPublicFooter,
          WphFashionTop,
          WphFashionDown
        },
        data() {
            return {
            }
        },
        watch: {
        },
        created() {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style scoped>
</style>
