import { updateProfile } from "firebase/auth";
import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { setDoc, doc, getFirestore } from "firebase/firestore";

const firestore = getFirestore();
const storage = getStorage();

export const Upload = async (photo, currentUser, setloding) => {
  const fileref = ref(storage, `profilepic/${currentUser.uid + ".png"}`);
  setloding(true);
  try {
    await uploadBytes(fileref, photo);
    alert("upload done");
    const photourl = await getDownloadURL(fileref);
    updateProfile(currentUser, { photoURL: photourl });
  } catch (error) {
    console.log(error);
  }
  setloding(false);
};

export const updateinfo = async (
  currentUser,
  username,
  profileinfo,
  setloding
) => {
  setloding(true);
  updateProfile(currentUser, { displayName: username });

  try {
    await setDoc(doc(firestore, "profileinfo", currentUser.uid), {
      profileinfo: profileinfo,
    });
  } catch (error) {
    console.log("this the error throw by updateinfo", error);
  }
  setloding(false);
  alert("update info done");
};

export const uploadCart = async (currentUser, cart) => {
  try {
    const cartref = doc(firestore, "userCartitem", currentUser.uid);
    await setDoc(cartref, { cart: cart });
  } catch (error) {
    console.log("cart upload error ", error);
  }
  alert("cart upload in done");
};
