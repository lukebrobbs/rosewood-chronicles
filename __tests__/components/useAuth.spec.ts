import useAuth, { IAuth } from "../../src/components/useAuth"

describe("useAuth", () => {
  let mockAuth: IAuth
  beforeAll(() => {
    mockAuth = useAuth()
  })
  it("Should return an object with the correct keys", () => {
    const expectedKeys = ["login"]
    const returnedKeys = Object.keys(mockAuth)
    expectedKeys.forEach(key => {
      expect(returnedKeys.includes(key)).toBe(true)
    })
  })
})
