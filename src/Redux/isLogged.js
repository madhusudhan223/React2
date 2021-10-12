export default function isLoggedIn(state = false, action) {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
}
