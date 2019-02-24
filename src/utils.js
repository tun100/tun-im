function getPathDirList (ctxpath) {
    var ctx = require.context(ctxpath);
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