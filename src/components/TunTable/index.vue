<template>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
                <th v-for="(cx,cd) in column" :key="cd">{{cx.label}}</th>
        </thead>
        <tbody v-if="!isDataEmpty">
            <tr v-for="(x,d) in data" :key="d">
                <td v-for="(cx,cd) in column" :key="cd">{{data[cx.value]}}</td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr v-for="(x,d) in 1" :key="d" >
                <td v-for="(cx,cd) in column" :key="cd"><span class="tun-invisible">无</span></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import _ from 'lodash';
export default {
    props: {
        column: {},
        data:{},
        ctn: {}
    },
    computed:{
        isDataEmpty(){
            return _.isEmpty(this.data);
        }
    }
};
</script>
<style lang="sass">
 
</style>