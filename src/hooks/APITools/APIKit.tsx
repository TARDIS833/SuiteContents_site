import axios from 'axios'
import { baseURL } from '../../utils/commons'

const TIMEOUT = 3000

//header에 token 없이 요청할 경우
export const APIKit = axios.create({
  baseURL,
  timeout: TIMEOUT,
})

//header에 bearer token 실어서 요청할 경우
export const AuthAPIKit = axios.create({
  baseURL,
  timeout: TIMEOUT,
})

/*
//token, refresh token 설정은 서버에 맞춰서 적용 후 사용

// bearer token interceptor 설정
const tokenIntercepter: number = AuthAPIKit.interceptors.request.use(
  (config) => {
    const setConfig = config
    const token = getCookie('IB-Token')
    if (isEmpty(token)) {
      return setConfig
    }
    setConfig.headers = {
      Authorization: `Bearer ${token}`,
    }
    return setConfig
  },
  (error) => {
    Promise.reject(error)
  },
)

// bearer token interceptor 삭제
export const cleanClientToken = () => {
  AuthAPIKit.interceptors.request.eject(tokenIntercepter)
}

// refresh token 발급
AuthAPIKit.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config
    if (error?.response?.status === 401) {
      const refreshToken = getCookie('IB-RefreshToken')
      const cookieGetUserId = getCookie('IB-userId')
      if (isEmpty(refreshToken) || isEmpty(cookieGetUserId)) {
        alert('인증 유효시간이 초과되었습니다. 다시 로그인 해 주세요')
        removeAllCookie()
        cleanClientToken()
        window.location.replace('/')
        return Promise.reject(error)
      }
      const payload = { refreshToken, userId: cookieGetUserId }
      axios({
        method: 'post',
        url: `${baseURL}/login/refreshAccessToken`,
        data: payload,
      }).then(({ data }) => {
        const { token, userId, email, userType } = data.IBparams
        // token 유효시간 : 12시간, api data에 expires가 있으면 그 값으로 적용
        const expires = new Date()
        expires.setHours(expires.getHours() + 12) // token 유효시간 : 12시간

        setCookie('IB-token', token, {
          path: '/',
          secure: true,
          expires,
        })
        setCookie('IB-userId', userId, {
          path: '/',
          secure: true,
        })
        AuthAPIKit.defaults.headers.common.Authorization = `Bearer ${token}`
        originalRequest.headers.Authorization = `Bearer ${token}`
        return axios(originalRequest)
      })
    }
    return Promise.reject(error)
  },
)
*/
export default APIKit
