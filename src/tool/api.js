/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-19 11:15:15 
 * @Last Modified time:   2017-12-19 11:15:15 
 * @Description: API地址配置 
 */
const isOnline = false
const onlineApiHost = isOnline ? 'http://88.888.88.88:8888/project/' :'http://funlee.com/'
const onlineWsHost = isOnline ? 'ws:/88.888.88.888:8888/' : 'http://funlee.com/'

export default {
  castleTop: onlineApiHost + 'fantasy/castle/top'
}