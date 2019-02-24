import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'lodash'
import utils from './utils'
var {getPathDirList} = utils;

Vue.use(VueRouter)

const IndexPath = 'record'
var ctxpath = './routes'
var pathDirList = getPathDirList(ctxpath);
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
	.value();
const router = new VueRouter({
  routes
})

export default router