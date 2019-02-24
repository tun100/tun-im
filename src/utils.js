import _ from 'lodash';

/**
 * 
 * @param {*} ctx 是传递 require.context的返回值。
 * 无法直接在该函数内直接传形参，因为webpack
 * 是预编译形式，除非先require.context(./)，列出所有的模块
 * 但是可能会导致编译效率多了不必要的扫描
 */
function getPathDirList (ctx) {
    var keys = ctx.keys();
    var pathDirList = _.chain(keys)
        .map(x => {
            x = _.replace(x, /\/$/, x => '');
            return _.split(x, '/');
        })
        .filter(x => _.size(x) == 2)
        .map(x => _.join(x, '/'))
        .uniq()
        .map(x => {
            var patharr = _.split(x, '/');
            var basedir = patharr[ 1 ];
            var cptpath = x + '/index.vue';
            var cpt = ctx(cptpath).default;
            return { patharr, basedir, cptpath, cpt };
        })
        .value();
    return pathDirList;
}

export default {
    getPathDirList
}