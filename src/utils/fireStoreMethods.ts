import firebase from "firebase"

const fireStoreUtils = {
  getDocSnapshot(userId: string) {
    const db = firebase.firestore()
    return db.collection("users").doc(userId)
  },
  async getFireStoreUser(userId: string) {
    const userDoc = this.getDocSnapshot(userId)
    const fireStoreUser = await userDoc.get()
    return fireStoreUser
  },
  async createNewUser(userDetails: {
    email: string
    password: string
    subscribeForMail: boolean
  }) {
    try {
      const newUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(userDetails.email, userDetails.password)
      if (newUser.user) {
        await this.setFireStoreUser(
          newUser.user.uid,
          userDetails.subscribeForMail
        )
        await this.sendEmailVerification()
      }
    } catch (error) {
      throw new Error(error)
    }
  },
  async setFireStoreUser(userId: string, subscribed: boolean) {
    const userDoc = this.getDocSnapshot(userId)
    await userDoc.set({ subscribed })
  },
  async setUserHouse(userId: string, house: "conch" | "ivy" | "stratus") {
    const userDoc = this.getDocSnapshot(userId)
    await userDoc.set({ house }, { merge: true })
  },
  async sendEmailVerification() {
    const currentUser = firebase.auth().currentUser
    if (currentUser) {
      await currentUser.sendEmailVerification().catch((error: Error) => {
        throw error
      })
    }
  },
}

export default fireStoreUtils
