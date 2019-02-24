import VueRouter from 'vue-router';
import _ from 'lodash';

var ctx = require.context("./routes");
var keys = ctx.keys();
var routesList = _.chain(keys).map(x=>{
    x = _.replace(x,/\/$/,x=>'');
    return _.split(x,'/');
}).filter(x=>_.size(x) == 2).map(x=>_.join(x,'/')).uniq().value();
debugger;
const router = new VueRouter({
  
});
export default router;