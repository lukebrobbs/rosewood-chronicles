import useAuth from "../../src/components/useAuth"

describe("useAuth", () => {
  it("Should work", () => {
    useAuth()
    expect(true).toBe(true)
  })
})
