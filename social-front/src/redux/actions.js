export const actionTypes = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  VERIFY: "VERIFY"
};

export function login(account) {
  return {
    type: actionTypes.LOGIN,
    payload: account
  };
}

// export function register(infor) {
//   return {
//     type: actionTypes.REGISTER,
//     payload: infor
//   }
// }

export function verify(code) {
  return {
    type: actionTypes.VERIFY,
    payload: code
  };
}
