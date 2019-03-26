export const state = () => ({

  // 文章列表
  list: {},
  detail:{},
  hot:[],
  artByTag:{},
  artByCategory:{},
  artByKeywords:{},
  archive:{}

})

export const mutations = {
  // 获取文章列表
  GET_ART_SUCCESS(state, data) {
    state.list = data
  },
  // 获取文章详情
  GET_ART_DETAIL_SUCCESS(state, data) {
    state.detail = data
  },
  // 获取文章详情
  GET_ART_HOT_SUCCESS(state, data) {
    state.hot = data
  },
  // 根据标签获取文章
  GET_ART_BY_TAG_SUCCESS(state, data) {
    state.artByTag = data
  },
  // 根据分类获取文章
  GET_ART_BY_CATEGORY_SUCCESS(state, data) {
    state.artByCategory = data
  },
  // 根据搜索获取文章
  GET_ART_BY_KEYWORDS_SUCCESS(state, data) {
    state.artByKeywords = data
  },
  // 根据搜索获取文章
  GET_ART_ARCHIVE_SUCCESS(state, data) {
    state.archive = data
  },
}
