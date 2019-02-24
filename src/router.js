import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'lodash'

Vue.use(VueRouter)

const IndexPath = 'record'
var ctxpath = './routes'
var ctx = require.context(ctxpath)
var keys = ctx.keys()
var pathDirList = _.chain(keys)
	.map(x => {
  x = _.replace(x, /\/$/, x => '')
  return _.split(x, '/')
})
	.filter(x => _.size(x) == 2)
	.map(x => _.join(x, '/'))
	.uniq()
	.map(x => {
  var patharr = _.split(x, '/')
  var basedir = patharr[1]
  var cptpath = x + '/index.vue'
  var cpt = ctx(cptpath).default
  return { patharr, basedir, cptpath, cpt }
})
	.value();
var routes = _.chain(pathDirList)
	.map(x => {
  var { patharr, basedir, cptpath, cpt } = x
  var result = {
    component: cpt,
    name: basedir,
    path: '/' + basedir
  }
  if (basedir == IndexPath) {
    return [
      result,
      {
        ...result,
        path: '/',
        name: 'root'
      }
    ]
  }
  return result
})
	.flattenDeep()
	.value()
const router = new VueRouter({
  routes
})

export default router
