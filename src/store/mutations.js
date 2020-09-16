export default {
  addKeepList(state, data) {
    state.keepList.push(data)
  },
  removeKeepList(state, path) {
    state.keepList.splice(state.keepList.map(obj => obj.path).indexOf(path), 1)
  },
  addMenuList(state, data) {
    state.menuList = data
  },
}
