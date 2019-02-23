import VueRouter from 'vue-router';
import _ from 'lodash';

var ctx = require.context("./routes").keys();
var routesList = _.chain(ctx).map(x=>{
    x = _.replace(x,/\/$/,x=>'');
    return _.split(x,'/');
}).filter(x=>_.size(x) == 2).map(x=>_.join(x,'/')).value()

console.log(ctx);
debugger;
const router = new VueRouter({
  
});
export default router;