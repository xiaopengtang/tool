const prefix = 'HOST:LIST'
// 获取host
export const QUERY_HOST = async(ctx, name) => {
  let key = `${prefix}:${name}`
  const res = await ctx.dispatch('cache/GET', key, {'root': true})
  return res && Object.keys(res).map(name => res[name]) || []
}
// 修改host
export const SAVE_HOST = async(ctx, data) => {
  let key = `${prefix}:${data.port}`
  const res = await ctx.dispatch('cache/GET', key, {'root': true}) || {}
  res[data.port] = data
  return await ctx.dispatch('cache/SET', {key, value: res}, {'root': true})
}
