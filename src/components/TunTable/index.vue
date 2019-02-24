<template>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
            <th>
                <td v-for="(cx,cd) in column" :key="cd">{{cx.label}}</td>
            </th>
        </thead>
        <tbody>
            <tr v-for="(x,d) in data" :key="d">
                <td v-for="(cx,cd) in column" :key="cd">{{data[cx.value]}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props: {
        column: {},
        data:{},
        ctn: {}
    }
};
</script>
<style lang="sass">
    
</style>