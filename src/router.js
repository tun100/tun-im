import Vue from 'vue';
import VueRouter from 'vue-router';
import _ from 'lodash';

Vue.use(VueRouter);

const IndexPath = 'record';
var ctx = require.context("./routes");
var keys = ctx.keys();
var pathStrList = _.chain(keys).map(x=>{
    x = _.replace(x,/\/$/,x=>'');
    return _.split(x,'/');
}).filter(x=>_.size(x) == 2).map(x=>_.join(x,'/')).uniq().value();
var routes = _.chain(pathStrList).map(x=>{
    var patharr = _.split(x,'/');
    var basedir = patharr[1];
    var cptpath = x + '/index.vue';
    var cpt = ctx(cptpath).default;
    var result  = {
        component: cpt,
        name: basedir,
        path: '/'+basedir
    }
    if(basedir == IndexPath){
        return [
            result,
            {
                ...result,
                path: '/',
                name: 'root'
            }
        ]
    }
    return result;
}).flattenDeep().value();
const router = new VueRouter({
 routes 
});

export default router;