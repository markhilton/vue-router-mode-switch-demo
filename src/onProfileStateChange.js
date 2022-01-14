import store from "./store";
import router from "./router";

let init = false;
let status = store.state.status;

const profileStateListener = callback => {
  if (!init) {
    init = true;
    callback(router());
  }

  if (status != store.state.status) {
    console.log("ROUTER STATUS CHANGED!");

    status = store.state.status;

    callback(router());
  }
};

const onProfileStateChange = callback => setInterval(profileStateListener, 100, callback);

export default onProfileStateChange;
