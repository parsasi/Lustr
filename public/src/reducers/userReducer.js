// User Reducer

const userReducerDefaultState = {
    email: '',
    name: 'date',
    isAuthenticated: false,
    loginError: undefined,
    signedUp: false,
    token : ''
};
  
export default (state = userReducerDefaultState, action) => {
    switch (action.type) {
      case 'USER_AUTH_SIGNEDIN':
        return {
          ...state,
          isAuthenticated: true,
          email : action.data.email,
          name : action.data.name,
          token : action.data.token,
          signedUp : false
        };
      case 'USER_AUTH_SIGNEDOUT':
        return {
            ...state,
            isAuthenticated: false,
            email : undefined,
            name : undefined,
            token : ''
        };
      case 'USER_AUTH_SIGNEDUP':
        return {
          ...state,
          signedUp: true
        };
      default:
        return state;
    }
  };
  