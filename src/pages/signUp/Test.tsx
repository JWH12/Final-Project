import React, {useState} from 'react'

function Test() {
  return (
    <div>Test</div>
  )
}

export default Test


// const SignUp =() => {

//   const [age, setAge] = useState('');
//   const [ageMessage, setAgeMessage] = useState('')
//   const [isAge, setIsAge] = useState<Boolean>(false);

//   const onChangeAge = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputAge = e.target.value;
//     setAge(inputAge);
    
//     if (e.target.value.length < 8 || e.target.value.length > 8) {
//       setAgeMessage('올바른 형식으로 입력해주세요.')
//       setIsAge(false)
//     } else if(e.target.value.replace(blank_pattern, '') == ""){
//       setAgeMessage('공백만 입력되었습니다.')
//       setIsAge(false) 
//     } else if(blank_pattern2.test(e.target.value) == true){
//       setAgeMessage('공백이 입력되었습니다.')
//       setIsAge(false) 
//     } else if(special_pattern.test(e.target.value) == true){
//       setAgeMessage('특수문자가 입력되었습니다.')
//       setIsAge(false) 
//     } else if (inputAge.trim() === '') {
//       setAgeMessage('생년월일을 입력해주세요.');
//       setIsAge(false);
//     } else {
//       setAgeMessage('올바른 생년월일 형식입니다.')
//       setIsAge(true)
//     }
//   }, [])

//   return (

//     <>
//       <table>
//         <tr>
//           <td className="category-name">생년월일</td>
//           <td>
//             <input 
//                 type='tel'
//                 className={`category-box ${!isAge && 'invalid-input'}`}
//                 placeholder='생년월일을 입력해 주세요 ex) 19870105'
//                 name='age'
//                 onChange={onChangeAge}
//                 title='age'
//             >
//             </input>
//             <div className={`message ${!isAge ? 'error' : age.length === 8 ? 'success' : ''}`}>
//           {ageMessage}</div>
//           </td>
//         </tr>
//       </table>
//     </>
//   )
// }

