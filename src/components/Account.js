// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deposit } from 'redux/accountSlice';
// import { withdraw } from 'redux/accountSlice';
// import { Balance } from './Balance';

// export const Account = () => {
//   const dispatch = useDispatch();

//   const [value, setValue] = useState(0);

//   return (
//     <div>
//       <Balance />
//       <input
//         type="number"
//         value={value}
//         onChange={e => setValue(Number(e.target.value))}
//       />
//       <button onClick={() => dispatch(deposit(10))}>Deposit</button>
//       <button onClick={() => dispatch(withdraw(5))}>Withdraw</button>
//     </div>
//   );
// };
