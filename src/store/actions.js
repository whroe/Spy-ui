export default {
  addKeepList(context, data) {
    context.commit('addKeepList', data)
  },
  removeKeepList(context, path) {
    context.commit('removeKeepList', path)
  },
}
