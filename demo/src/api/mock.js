import Mock from 'mock.js'
import userApi from './mockData/user'
Mock.mock(/user\/getUser/, 'get', userApi.getUserList)