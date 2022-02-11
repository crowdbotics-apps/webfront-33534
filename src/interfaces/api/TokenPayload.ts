export interface TokenPayload {
  exp: number
  iat: number
  user: {
    id: string
    name: string
    email: string
    type: string
  }
}
