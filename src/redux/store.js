import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { createReducer } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const persistConfig = { key: 'root', storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);
// // import { devToolsEnhancer } from '@redux-devtools/extension'; вже не потрібен
// import { accountReducer } from './accountSlice';
// import { localeReducer } from './localeSlice';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

// -----------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------
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
// -----------------------------------------------------------------------
