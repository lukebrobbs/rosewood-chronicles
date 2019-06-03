import firebase from "firebase"
import { renderHook } from "react-hooks-testing-library"
import useFirebase, {
  handleOnAuthStateChange,
} from "../../../src/components/firebase/useFirebase"

describe("useFirebase", () => {
  beforeAll(() => {
    firebase.initializeApp = jest.fn()
    // @ts-ignore
    firebase.auth = () => ({
      onAuthStateChanged: jest.fn(),
    })
  })
  it("Should return an object with the correct keys", () => {
    const { result } = renderHook(() => useFirebase())
    const expectedKeys = ["userId", "isAuthenticated"]
    const returnedKeys = Object.keys(result.current)
    expectedKeys.forEach(key => {
      expect(returnedKeys.includes(key)).toBe(true)
    })
  })
})

describe("handleOnAuthStateChange", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it("if the user is truthy, should call setUserId", () => {
    const mockSetUserId = jest.fn()
    const mockSetIsAuthenticated = jest.fn()
    handleOnAuthStateChange(
      // @ts-ignore
      { uid: "testId" },
      mockSetUserId,
      mockSetIsAuthenticated
    )
    expect(mockSetUserId.mock.calls.length).toBe(1)
  })
  it("if the user is falsey, should call setIsAuthenticated", () => {
    const mockSetUserId = jest.fn()
    const mockSetIsAuthenticated = jest.fn()
    handleOnAuthStateChange(
      // @ts-ignore
      null,
      mockSetUserId,
      mockSetIsAuthenticated
    )

    expect(mockSetUserId.mock.calls.length).toBe(0)
    expect(mockSetIsAuthenticated.mock.calls.length).toBe(1)
  })
})
