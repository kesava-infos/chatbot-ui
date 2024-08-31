export function rootReducer(state, action) {
    switch (action.type) {
      case 'Login':
        return { ...state, isAuth: action.payload };
      default:
        return { ...state }
    }
  }