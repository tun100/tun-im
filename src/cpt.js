import Vue from 'vue';
import utils from './utils';

var cptlist = utils.getPathDirList(require.context('./components'));
debugger;
_.forEach(cptlist,(x,d,n)=>{
    Vue.component(x.basedir,x.cpt);
});

export default {}