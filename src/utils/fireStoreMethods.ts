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
  async setFireStoreUser(userId: string) {
    const userDoc = this.getDocSnapshot(userId)
    await userDoc.set({})
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
