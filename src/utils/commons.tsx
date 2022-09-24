import { Cookies } from 'react-cookie'
import { CookieGetOptions, CookieSetOptions } from 'universal-cookie'
// reading vercel env to adjust baseUrl
export const baseURL = (() => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview')
    return process.env.NEXT_PUBLIC_DEV_API_URL
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production')
    return process.env.NEXT_PUBLIC_PRODUCT_API_URL
  return 'http://localhost:3000'
})()

const cookies = new Cookies()

export const setCookie = (
  name: string,
  value: any,
  option?: CookieSetOptions,
) => cookies.set(name, value, { ...option }) // 쿠키 set

export const getCookie = (name: string, option?: CookieGetOptions) =>
  cookies.get(name, option) // 쿠키 값 불러오기

export const removeCookie = (name: string, option?: CookieSetOptions) =>
  cookies.remove(name, option) // 쿠기 삭제(이름입력)

export const removeAllCookie = () => {
  // 쿠키 전체 삭제
  const cookieKey = Object.keys(cookies.getAll())
  cookieKey.map((name) => cookies.remove(name))
}
