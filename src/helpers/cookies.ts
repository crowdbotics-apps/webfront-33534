import { get, remove, set } from 'js-cookie'

export function getCookie(name: string): string | undefined {
  return get(name)
}

export function removeCookie(name: string): void {
  return remove(name)
}

interface CookieOption {
  expires?: number
}

export function setCookie(
  name: string,
  value: string,
  options?: CookieOption,
): string | undefined {
  const cookieOption: { [key: string]: unknown } = {
    expires: options?.expires ?? 1,
  }

  return set(name, value, cookieOption)
}
