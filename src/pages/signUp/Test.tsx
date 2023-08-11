import React from 'react'

function Test() {
  return (
    <div>Test</div>
  )
}

export default Test


// const SignUp =() => {
//   const [name, setName] = useState<String>('')
//   const [nameMessage, setNameMessage] = useState<String>('')
//   const [isName, setIsName] = useState<Boolean>(false)

// const onSubmit = useCallback(
//   async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     try {
//       await axios
//         .post(REGISTER_USERS_URL, {
//           userid:id,
//           username: name,
//           password: password,
//           nickName: nickName
//         })
//         .then((res) => {
//           console.log('response:', res)
         
//         })
//     } catch (err) {
//       console.error(err)
//     }
//   },
//   [ id, name, password, nickName]
// )

//   const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     setName(e.target.value)
//     if (e.target.value.length < 2 || e.target.value.length > 6) {
//       setNameMessage('2글자 이상 6글자 미만으로 입력해주세요.')
//       setIsName(false)
//     } else if(e.target.value.replace(blank_pattern, '') == ""){
//       setNameMessage('공백만 입력되었습니다.')
//       setIsName(false) 
//     } else if(blank_pattern2.test(e.target.value) == true){
//       setNameMessage('공백이 입력되었습니다.')
//       setIsName(false) 
//     } else if(special_pattern.test(e.target.value) == true){
//       setNameMessage('특수문자가 입력되었습니다.')
//       setIsName(false) 
//     } else {
//       setNameMessage('올바른 이름 형식입니다.')
//       setIsName(true)
//     }
//   }, [])

//   return (
//     <>
//       <div>
//         <div className='signup-text'>회원가입</div>

//         <form className='signup-form' onSubmit={onSubmit}>
              
//             <table className="signup-table">
//               <tbody>
//               {/* ======= 이름, 성별 ============================  */}  
//                 <tr className='signup-name'>
//                   <td className="category-name">이름</td>
//                   <td>
//                     <input 
//                           type='text' 
//                           className="category-box" 
//                           placeholder='이름을 입력해 주세요' 
//                           name="name" 
//                           onChange={onChangeName}
//                     >
//                     </input>
//                     {name.length > 0 && <div className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</div>}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="category-name">성별</td>       
//                   <td>
//                     <div className="gender-group">
//                       <label className={`gender-button ${selectedGender === 'male' ? 'selected' : ''}`}>
//                         <input
//                           type="radio"
//                           value="male"
//                           checked={selectedGender === 'male'}
//                           onChange={() => genderOptionChange('male')}
//                         />
//                         남
//                       </label>
//                       <label className={`gender-button ${selectedGender === 'female' ? 'selected' : ''}`}>
//                         <input
//                           type="radio"
//                           value="female"
//                           checked={selectedGender === 'female'}
//                           onChange={() => genderOptionChange('female')}
//                         />
//                         여
//                       </label>
//                     </div>
//                   </td>
//                 </tr>       
//                  </tbody>
//             </table>                     
//           <div className="signup-btn">
//             <button > 회원가입 </button>
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }


// import React, { useState, useCallback } from 'react';
// import axios from 'axios';

// const REGISTER_USERS_URL = 'YOUR_REGISTER_USERS_URL';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [nameMessage, setNameMessage] = useState('');
//   const [isNameValid, setIsNameValid] = useState(false);
//   const [selectedGender, setSelectedGender] = useState('');

//   const onSubmit = useCallback(
//     async (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault();

//       // Validate name input
//       if (!isNameValid) {
//         setNameMessage('이름을 올바르게 입력해주세요.');
//         return;
//       }

//       // Other form submission logic
//       try {
//         await axios.post(REGISTER_USERS_URL, {
//           userid: id,
//           username: name,
//           password: password,
//           nickName: nickName
//         });
//         console.log('회원가입 성공');
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     [id, name, password, nickName, isNameValid]
//   );

//   const onChangeName = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       const inputName = e.target.value;
//       setName(inputName);

//       if (inputName.length < 2 || inputName.length > 6) {
//         setNameMessage('2글자 이상 6글자 미만으로 입력해주세요.');
//         setIsNameValid(false);
//       } else if (inputName.trim() === '') {
//         setNameMessage('이름을 입력해주세요.');
//         setIsNameValid(false);
//       } else {
//         setNameMessage('올바른 이름 형식입니다.');
//         setIsNameValid(true);
//       }
//     },
//     []
//   );

//   return (
//     <div>
//       <div className='signup-text'>회원가입</div>

//       <form className='signup-form' onSubmit={onSubmit}>
//         <table className='signup-table'>
//           <tbody>
//             <tr className='signup-name'>
//               <td className='category-name'>이름</td>
//               <td>
//                 <input
//                   type='text'
//                   className={`category-box ${!isNameValid && 'invalid-input'}`}
//                   placeholder='이름을 입력해 주세요'
//                   name='name'
//                   onChange={onChangeName}
//                   value={name}
//                 />
//                 {!isNameValid && (
//                   <div className='message error'>{nameMessage}</div>
//                 )}
//               </td>
//             </tr>
//             {/* 성별 관련 코드 */}
//           </tbody>
//         </table>
//         <div className='signup-btn'>
//           <button>회원가입</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

