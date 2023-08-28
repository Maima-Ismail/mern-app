<script setup>
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import router from "@/router";
import { useProjectStore } from "@/views/dashboards/analytics/useProjectStore";
import { dummyFirebase } from "@/firebase/config";
import axios from "axios";

const checkLoginState = () => {
  FB.getLoginStatus(function (response) {
    if (response.status === "connected") {
      // User is logged in, trigger your Facebook login function
      loginWithFacebook();
    }
  });
};

const loginWithGoogle = async () => {
  const store = useProjectStore();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    store.setUser(user);

    const userUID = user.uid;
    const userEmail = user.email;
    const userDisplayName = user.displayName;

    try {
      const response = await axios.post("/firebase-callback", {
        uid: userUID,
        userEmail: userEmail,
        userName: userDisplayName,
      });
      console.log("User synced with MongoDB:", response.data);
    } catch (error) {
      console.error("Error syncing user with MongoDB:", error);
    }
    console.log("user:", user);
    router.push("/dashboards/analytics");
  } catch (error) {
    console.log("Error logging in with Google", error);
  }
};
const loginWithTwitter = async () => {
  const store = useProjectStore();
  const auth = getAuth();
  const provider = new TwitterAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    store.setUser(user);
    const userUID = user.uid;
    const userEmail = user.email;
    const userDisplayName = user.displayName;

    try {
      const response = await axios.post("/firebase-callback", {
        uid: userUID,
        userEmail: userEmail,
        userName: userDisplayName,
        usrePassword: null,
      });
      console.log("User synced with MongoDB:", response.data);
    } catch (error) {
      console.error("Error syncing user with MongoDB:", error);
    }
    console.log("user:", user);
    router.push("/dashboards/analytics");
  } catch (error) {
    console.log("Error in logging with Twitter", error);
    // 42IiBgIpzzBfcX8sel2nW74Lh
    // SG10Duh8xqUUHZZ8zcTCgvMTL7twpfpHW7zBI4JyL6LJZ79f7S
  }
};
const loginWithFacebook = async () => {
  const store = useProjectStore();
  const auth = getAuth();
  const provider = new FacebookAuthProvider();

  try {
    // Check the login status first
    FB.getLoginStatus(function (response) {
      if (response.status === "connected") {
        // User is already logged in, you can proceed to use FB.api or other methods
        console.log("User is already logged in with Facebook");
        // Optionally, you can get the user's ID from response.authResponse.userID
        const userID = response.authResponse.userID;
        store.setUser(userID);
        router.push("/dashboards/analytics");
      } else {
        // User is not logged in, show the login popup
        signInWithPopup(auth, provider)
          .then((result) => {
            // Extract user ID from the response
            const userAuthResponse = result.authResponse;
            const userID = userAuthResponse.userID;
            store.setUser(userID);
            router.push("/dashboards/analytics");
            console.log("User logged in with Facebook:", userID);
          })
          .catch((error) => {
            console.log("Error in logging with Facebook", error);
          });
      }
    });
  } catch (error) {
    console.log("Error in checking Facebook login status", error);
  }
};
const authProviders = [
  {
    icon: "fa-google",
    color: "#dd4b39",
    login: loginWithGoogle,
  },
  {
    icon: "fa-twitter",
    color: "#1da1f2",
    login: loginWithTwitter,
  },
  {
    icon: "fa-facebook",
    color: "#4267b2",
    login: loginWithFacebook,
  },
];
</script>

<template>
  <div class="d-flex justify-center flex-wrap gap-3">
    <VBtn
      v-for="link in authProviders"
      :key="link.icon"
      icon
      variant="tonal"
      size="38"
      :color="link.color"
      class="rounded"
      @click="link.login()"
    >
      <VIcon size="18" :icon="link.icon" />
    </VBtn>
  </div>
</template>
