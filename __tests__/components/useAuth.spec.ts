import { renderHook } from "react-hooks-testing-library"
import useAuth from "../../src/components/useAuth"

describe("useAuth", () => {
  it("Should return an object with the correct keys", () => {
    const { result } = renderHook(() => useAuth())
    const expectedKeys = ["login", "logout", "isAuthenticated", "authenticate"]
    const returnedKeys = Object.keys(result.current)
    expectedKeys.forEach(key => {
      expect(returnedKeys.includes(key)).toBe(true)
    })
  })
})
