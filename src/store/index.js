import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function loadStores() {
    const context = require.context('@/store/modules', true, /.js$/i);
    return context.keys()
        .map(context)
        .map(m => m.default)
}

const resourceModules = {};
loadStores().forEach((resource) => {
    resourceModules[resource.name] = resource;
});
export default new Vuex.Store({
    modules: resourceModules
})
