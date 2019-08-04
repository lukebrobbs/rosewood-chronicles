import firebase from "firebase"
import fireStoreMethods from "../../src/utils/fireStoreMethods"

describe("fireStoreMethods", () => {
  let mockGet: jest.Mock
  let mockSet: jest.Mock
  let mockSendEmailVerification: jest.Mock
  let mockCreateUserWithEmailAndPassword: jest.Mock

  beforeEach(() => {
    mockGet = jest.fn().mockReturnValue({ exists: true })
    mockSet = jest.fn()
    mockSendEmailVerification = jest.fn().mockReturnValue(
      new Promise(resolve => {
        resolve()
      })
    )
    mockCreateUserWithEmailAndPassword = jest.fn().mockReturnValue(
      new Promise(resolve => {
        resolve({ user: { uid: "mockUid" } })
      })
    )

    firebase.initializeApp = jest.fn()
    firebase.auth = () => ({
      createUserWithEmailAndPassword: mockCreateUserWithEmailAndPassword,
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
      await fireStoreMethods.setFireStoreUser("testUserId", false)
      expect(mockSet.mock.calls.length).toBe(1)
    })
    it("Should add the subscribed arg to the call to set()", async () => {
      await fireStoreMethods.setFireStoreUser("testUserId", true)
      expect(mockSet.mock.calls[0][0].subscribed).toBe(true)
    })
  })
  describe("setUserHouse", () => {
    it("Should call the fireStore set() method", async () => {
      await fireStoreMethods.setUserHouse("testUserId", "conch")
      expect(mockSet.mock.calls.length).toBe(1)
    })
    it("Should add the house arg to the call to set()", async () => {
      await fireStoreMethods.setUserHouse("testUserId", "stratus")
      expect(mockSet.mock.calls[0][0].house).toBe("stratus")
    })
    it("Should set merge to true in the set method call", async () => {
      await fireStoreMethods.setUserHouse("testUserId", "conch")
      expect(mockSet.mock.calls[0][1].merge).toBe(true)
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
  describe("createNewUser()", () => {
    beforeEach(() => {
      fireStoreMethods.setFireStoreUser = jest.fn()
      fireStoreMethods.sendEmailVerification = jest.fn()
    })
    it("Should call createUserWithEmailAndPassword with the email and password args", async () => {
      await fireStoreMethods.createNewUser({
        email: "test@email.com",
        password: "testPassword",
        subscribeForMail: true,
      })
      expect(mockCreateUserWithEmailAndPassword.mock.calls[0][0]).toEqual(
        "test@email.com"
      )
      expect(mockCreateUserWithEmailAndPassword.mock.calls[0][1]).toEqual(
        "testPassword"
      )
    })
    it("Should call setFireStoreUser and sendEmailVerification if a new user is successfully created", async () => {
      await fireStoreMethods.createNewUser({
        email: "test@email.com",
        password: "testPassword",
        subscribeForMail: true,
      })
      // @ts-ignore
      expect(fireStoreMethods.setFireStoreUser.mock.calls[0][0]).toBe("mockUid")
      // @ts-ignore
      expect(fireStoreMethods.sendEmailVerification.mock.calls.length).toBe(1)
    })
    it("Should throw any errors that occur", async () => {
      mockCreateUserWithEmailAndPassword = jest.fn().mockReturnValue(
        new Promise((_, reject) => {
          reject(new Error("test error"))
        })
      )
      try {
        await fireStoreMethods.createNewUser({
          email: "test@email.com",
          password: "testPassword",
          subscribeForMail: true,
        })
      } catch (error) {
        expect(error.message).toBe("Error: test error")
      }
    })
  })
})
