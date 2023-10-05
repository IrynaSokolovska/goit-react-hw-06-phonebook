import { configureStore } from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension'; вже не потрібен
import { accountReducer } from './accountSlice';
import { localeReducer } from './localeSlice';

// const initialState = {
//   account: {
//     balance: 500,
//   },
//   locale: {
//     lang: 'uk',
//   },
// };

// const rootReducer = combineReducers({
//   account: accountReducer,
//   locale: localeReducer,
// });

// const enhancer = devToolsEnhancer(); вже не потрібен

// export const store = configureStore({
//   reducer: rootReducer,
// });
export const store = configureStore({
  reducer: {
    account: accountReducer,
    locale: localeReducer,
  },
});
// export const store = createStore(rootReducer, enhancer);    вже не потрібен
// const deposit = {
//   type: 'account/deposit',
//   payload: 10,
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'account/deposit':
//       return {
//         ...state,
//         account: {
//           ...state.account,
//           balance: state.account.balance + action.payload,
//         },
//       };
//     case 'account/withdraw':
//       return {
//         ...state,
//         account: {
//           ...state.account,
//           balance: state.account.balance - action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };