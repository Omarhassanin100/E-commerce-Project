import axios from 'axios'
import { baseUrl } from './Api'
import { Cookies } from 'react-cookie'
const cookie = new Cookies()
const token = cookie.get("e-commerce")

 export const Axios =   axios.create({
        baseURL : baseUrl,
        headers: {Athuraization : `Bearer ${token}`}})




