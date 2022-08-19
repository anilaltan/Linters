const { request } = require('@/utils/request')

const getAll = () => request('/post')

export const postService = {
  getAll,
}
