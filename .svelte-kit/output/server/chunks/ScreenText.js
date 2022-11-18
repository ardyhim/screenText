import { c as create_ssr_component, e as escape } from "./index.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCqXJHKw-oD2ONSQC9pwaM34Qchbxz3aBE",
  authDomain: "screen-text-4d525.firebaseapp.com",
  projectId: "screen-text-4d525",
  storageBucket: "screen-text-4d525.appspot.com",
  messagingSenderId: "837973930161",
  appId: "1:837973930161:web:ccd9a4c091553d187fb290",
  measurementId: "G-6RK05JHM57"
};
firebase.initializeApp(firebaseConfig);
firebase.auth();
new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();
const ScreenText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const docMessage = db.collection("screen").doc("text");
  docMessage.onSnapshot((d) => {
    message = d.data().message;
  });
  let { message = "" } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `<main><div class="${"absolute text-center content-center h-screen w-screen"}"><div class="${"absolute bottom-2/4 w-full"}"><h1 class="${"text-zinc-100 text-center text-6xl whitespace-pre-wrap"}">${escape(message)}</h1></div></div>
  </main>`;
});
export {
  ScreenText as S
};
