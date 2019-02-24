import VueRouter from 'vue-router';
import _ from 'lodash';

var ctx = require.context("./routes");
var keys = ctx.keys();
var routesList = _.chain(keys).map(x=>{
    x = _.replace(x,/\/$/,x=>'');
    return _.split(x,'/');
}).filter(x=>_.size(x) == 2).map(x=>_.join(x,'/')).uniq().value();
debugger;
var routes = _.chain(routesList).map(x=>{
    var patharr = _.split(x,'/');
    var basedir = patharr[1];
    var cptpath = x + '/index.vue';
    return {
        component: ctx(cptpath),
        name: basedir,
        path: basedir
    }
}).value();
const router = new VueRouter({
 routes 
});
export default router;