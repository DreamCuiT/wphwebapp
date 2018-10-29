<template>
    <div>
        <child-filtr-header></child-filtr-header>
        <child-filtr-content :list="childFiltrChoiceData"></child-filtr-content>
    </div>
</template>

<script>
    import childFiltrHeader from "../components/childFiltr/childFiltrHeader.vue"
    import childFiltrContent from "../components/childFiltr/childFiltrContent.vue"
    import childFiltrChoice from "../../static/childFiltrChoice.json"
    export default {
        components:{
            childFiltrHeader,
            childFiltrContent,
            childFiltrChoice
        },
        data(){
            return{
                childFiltrChoiceData:[]
            }
        },
        methods:{
            _initData(){
                this.childFiltrChoiceData=childFiltrChoice
            }
        },
        created(){
            this._initData()
        }
    }
</script>

<style>

</style>
