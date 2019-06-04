import firebase from "firebase"
import fireStoreMethods from "../../../src/utils/fireStoreMethods"

describe("fireStoreMethods", () => {
  let mockGet: jest.Mock
  let mockSet: jest.Mock
  let mockSendEmailVerification: jest.Mock

  beforeEach(() => {
    mockGet = jest.fn().mockReturnValue({ exists: true })
    mockSet = jest.fn()
    mockSendEmailVerification = jest.fn().mockReturnValue(
      new Promise(resolve => {
        resolve()
      })
    )
    firebase.initializeApp = jest.fn()
    firebase.auth = () => ({
      // @ts-ignore
      currentUser: {
        sendEmailVerification: mockSendEmailVerification,
      },
    })
    // @ts-ignore
    firebase.firestore = jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
          get: mockGet,
          set: mockSet,
        }),
      }),
    })
  })

  afterEach(jest.clearAllMocks)

  describe("getFireStoreUser", () => {
    it("Should return the result from fireStore.get()", async () => {
      const mockUser = await fireStoreMethods.getFireStoreUser("testUserId")
      expect(mockGet.mock.calls.length).toBe(1)
      expect(mockUser).toEqual({ exists: true })
    })
  })
  describe("setFireStoreUser", () => {
    it("Should call the fireStore set() method", async () => {
      await fireStoreMethods.setFireStoreUser("testUserId")
      expect(mockSet.mock.calls.length).toBe(1)
    })
  })
  describe("sendEmailVerification", () => {
    it("If there is a currentUser, should call the sendEmailVerification method", async () => {
      await fireStoreMethods.sendEmailVerification()
      expect(mockSendEmailVerification.mock.calls.length).toBe(1)
    })
    it("Should throw an error if the email verification function fails", async () => {
      mockSendEmailVerification = jest.fn().mockReturnValue(
        new Promise((_, reject) => {
          reject(new Error("mock error"))
        })
      )
      try {
        await fireStoreMethods.sendEmailVerification()
      } catch (error) {
        expect(error.message).toBe("mock error")
      }
    })
  })
})
