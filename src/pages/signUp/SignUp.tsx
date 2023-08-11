import React, { useState,useEffect, useCallback } from 'react';
import './SignUp.css'
import { YEAR, MONTH, DAY } from './Date';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import axios from 'axios';


const SignUp =() => {

// ====== 유효성 검사 ============================================================================
 
  // 이름, 전화번호, 이메일, 아이디, 비밀번호, 비밀번호 확인, 닉네임
  const [name, setName] = useState<String>('')
  const [phon, setPhon] = useState<String>('')
  const [address, setAddress] = useState<String>('')
  const [email, setEmail] = useState<String>('')
  const [id, setId] = useState<String>('')
  const [password, setPassword] = useState<String>('')
  const [passwordConfirm, setPasswordConfirm] = useState<String>('')
  const [nickName, setNickName] = useState<String>('')

  // 오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState<String>('')
  const [phonMessage, setPhonMessage] = useState<String>('')
  const [addressMessage, setAddressMessage] = useState<String>('')
  const [emailMessage, setEmailMessage] = useState<String>('')
  const [idMessage, setIdMessage] = useState<String>('')
  const [passwordMessage, setPasswordMessage] = useState<String>('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<String>('')
  const [nickNameMessage, setNickNameMessage] = useState<String>('')

  // 유효성 검사
  const [isNameValid, setIsNameValid] = useState<Boolean>(false);
  const [isPhon, setIsPhon] = useState<Boolean>(false)
  const [isAddress, setIsAddress] = useState<Boolean>(false)
  const [isEmailValid, setIsEmailValid] = useState<Boolean>(false)
  const [isId, setIsId] = useState<Boolean>(false)
  const [isPassword, setIsPassword] = useState<Boolean>(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<Boolean>(false)
  const [isnickName, setIsNickName] = useState<Boolean>(false)
  
  const REGISTER_USERS_URL = "https://example.com/api/register";

  // 공백만, 공백 포함, 특수문자 포함 정규식
  const blank_pattern = /^\s+|\s+$/g;
  const blank_pattern2 = /[\s]/g;
  const special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
  const number_pattern = /^[0-9]+$/;

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!isNameValid) {
        setNameMessage('이름을 입력해주세요.');
        return;
      } else if (!isPhon) {
        setPhonMessage('전화번호를 입력해주세요.');
        return;
      } else if (!isAddress) {
        setAddressMessage('주소를 입력해주세요.');
        return;
      } else if (!isEmailValid) {
        setEmailMessage('이메일을 입력해주세요.');
        return;
      } else if (!isId) {
        setIdMessage('아이디를 입력해주세요.');
        return;
      } else if (!isPassword) {
        setPasswordMessage('비밀번호를 입력해주세요.');
        return;
      } else if (!isPasswordConfirm) {
        setPasswordConfirmMessage('비밀번호 확인을 해주세요.');
        return;
      } else if (!isnickName) {
        setNickNameMessage('닉네임을 입력해주세요.');
        return;
      } else {

      }

      try {
        await axios
          .post(REGISTER_USERS_URL, {
            userId:id,
            userPhon:phon,
            userAdress: address,
            userName: name,
            password: password,
            nickName: nickName,
            email: email
          })
          .then((res) => {
            console.log('회원가입 성공');
            console.log('response:', res)
           
          })
      } catch (err) {
        console.error(err)
      }
    },
    [ id, name, phon, address, password, nickName, email, isNameValid, isEmailValid]
  )


  //========= 이름 유효성 =========
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.value;
    setName(inputName);
    
    if (e.target.value.length < 2 || e.target.value.length > 6) {
      setNameMessage('2글자 이상 6글자 미만으로 입력해주세요.')
      setIsNameValid(false)
    } else if(e.target.value.replace(blank_pattern, '') == ""){
      setNameMessage('공백만 입력되었습니다.')
      setIsNameValid(false) 
    } else if(blank_pattern2.test(e.target.value) == true){
      setNameMessage('공백이 입력되었습니다.')
      setIsNameValid(false) 
    } else if(special_pattern.test(e.target.value) == true){
      setNameMessage('특수문자가 입력되었습니다.')
      setIsNameValid(false) 
    } else if (inputName.trim() === '') {
      setNameMessage('이름을 입력해주세요.');
      setIsNameValid(false);
    } else {
      setNameMessage('올바른 이름 형식입니다.')
      setIsNameValid(true)
    }
  }, [])


  //========= 전화번호 유효성 =========
  const onChangePhon = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhon = e.target.value;
    setPhon(inputPhon);

    if(e.target.value.length < 3 || e.target.value.length > 4){
      setPhonMessage('올바른 전화번호 형식이 아닙니다.')
      setIsPhon(false)
    } else if(e.target.value.replace(blank_pattern, '') == ""){
      setPhonMessage('공백만 입력되었습니다.')
      setIsPhon(false) 
    } else if(blank_pattern2.test(e.target.value) == true){
      setPhonMessage('공백이 입력되었습니다.')
      setIsPhon(false) 
    } else if(special_pattern.test(e.target.value) == true){
      setPhonMessage('특수문자가 입력되었습니다.')
      setIsPhon(false) 
    } else if(!number_pattern.test(e.target.value)){
      setPhonMessage('숫자만 입력가능합니다.')
      setIsPhon(false) 
    } else if (inputPhon.trim() === '') {
      setPhonMessage('전화번호를 입력해주세요.');
      setIsPhon(false);
    }  else {
      setPhonMessage('올바른 전화번호 형식입니다.')
      setIsPhon(true)
    }
  }, [])


  //========= 주소 유효성 =========
  const onChangeAddress = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAddress = e.target.value;
    setAddress(inputAddress);

    if(e.target.value.length < 5 || e.target.value.length > 30){
      setAddressMessage('올바른 주소 형식이 아닙니다.')
      setIsAddress(false)
    } else if(e.target.value.replace(blank_pattern, '') == ""){
      setAddressMessage('공백만 입력되었습니다.')
      setIsAddress(false) 
    } else if(special_pattern.test(e.target.value) == true){
      setAddressMessage('특수문자가 입력되었습니다.')
      setIsAddress(false) 
    } else if (inputAddress.trim() === '') {
      setAddressMessage('주소를 입력해주세요.');
      setIsAddress(false);
    }  else {
      setAddressMessage('올바른 주소 형식입니다.')
      setIsAddress(true)
    }
  }, [])
  


  //========= 이메일 유효성 =========
  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (e.target.value.length < 10 || e.target.value.length > 30) {
      setEmailMessage('올바른 이메일 형식이 아닙니다.')
      setIsEmailValid(false)
    } else if(e.target.value.replace(blank_pattern, '') == ""){
      setEmailMessage('공백만 입력되었습니다.')
      setIsEmailValid(false) 
    } else if(blank_pattern2.test(e.target.value) == true){
      setEmailMessage('공백이 입력되었습니다.')
      setIsEmailValid(false) 
    } 
    // else if(special_pattern.test(e.target.value) == true){
    //   setEmailMessage('특수문자가 입력되었습니다.')
    //   setIsEmailValid(false) 
    // } 
    else if (inputEmail.trim() === '') {
      setEmailMessage('이메일을 입력해주세요.');
      setIsEmailValid(false);
    } else {
      setEmailMessage('올바른 이메일 형식입니다.')
      setIsEmailValid(true)
    }
  }, [])


  //========= 아이디 유효성 =========
  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputId = e.target.value;
    setId(inputId)
    if (e.target.value.length < 6 || e.target.value.length > 12) {
      setIdMessage('6글자 이상 12글자 미만으로 입력해주세요.')
      setIsId(false)
    }else if(e.target.value.replace(blank_pattern, '') == ""){
      setIdMessage('공백만 입력되었습니다.')
      setIsId(false) 
    } else if(blank_pattern2.test(e.target.value) == true){
      setIdMessage('공백이 입력되었습니다.')
      setIsId(false) 
    } else if(special_pattern.test(e.target.value) == true){
      setIdMessage('특수문자가 입력되었습니다.')
      setIsId(false) 
    } else if (inputId.trim() === '') {
      setIdMessage('아이디를 입력해주세요.');
      setIsId(false);
    } else {
      setIdMessage('올바른 아이디 형식입니다.')
      setIsId(true)
    }
  }, [])


  //========= 비밀번호 유효성 =========
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword)

    // 비밀번호 영문 수자 특수문자 조합 정규식
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.')
      setIsPassword(false)
    } else if(e.target.value.replace(blank_pattern, '') == ""){
      setPasswordMessage('공백만 입력되었습니다.')
      setIsPassword(false) 
    } else if(blank_pattern2.test(e.target.value) == true){
      setPasswordMessage('공백이 입력되었습니다.')
      setIsPassword(false) 
    } else if (inputPassword.trim() === '') {
      setPasswordMessage('비밀번호를 입력해주세요.');
      setIsPassword(false);
    } else {
      setPasswordMessage('올바른 비밀번호 입니다.')
      setIsPassword(true)
    }
  }, [])


  //========= 비밀번호 확인 유효성 =========
  const onChangePasswordConfirm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const inputpasswordConfirmCurrent = e.target.value;
      setPasswordConfirm(inputpasswordConfirmCurrent)

      if (password === inputpasswordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호가 일치합니다.')
        setIsPasswordConfirm(true)
      } else if (inputpasswordConfirmCurrent.trim() === '') {
        setPasswordConfirmMessage('비밀번호 확인을 해주세요.');
        setIsPasswordConfirm(false);
      } else {
        setPasswordConfirmMessage('비밀번호가 불일치합니다. 다시 입력해주세요.')
        setIsPasswordConfirm(false)
      }
    },
    [password]
  )


  //========= 닉네임 유효성 =========
  const onChangeNickName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNickName = e.target.value;
    setNickName(inputNickName)
    if (e.target.value.length < 2 || e.target.value.length > 8) {
      setNickNameMessage('2글자 이상 8글자 미만으로 입력해주세요.')
      setIsNickName(false)
    }else if(e.target.value.replace(blank_pattern, '') == ""){
      setNickNameMessage('공백만 입력되었습니다.')
      setIsNickName(false) 
    } else if(blank_pattern2.test(e.target.value) == true){
      setNickNameMessage('공백이 입력되었습니다.')
      setIsNickName(false) 
    } else if(special_pattern.test(e.target.value) == true){
      setNickNameMessage('특수문자가 입력되었습니다.')
      setIsNickName(false) 
    } else if (inputNickName.trim() === '') {
      setNickNameMessage('닉네임을 입력해주세요.');
      setIsNickName(false);
    } else {
      setNickNameMessage('올바른 닉네임 형식입니다.')
      setIsNickName(true)
    }
  }, [])


  // form 새로고침 정지
  const stopEvent = (e) => {

      e.preventDefault();

  }
// ********* 유효성 검사 끝 ***********************************************************************************
  

//===== 성별 ====================================================

  const [selectedGender, setSelectedGender] = useState('male');

  const genderOptionChange = (option) => {
    setSelectedGender(option);
  };

  
//===== 생년월일 ====================================================

  const [userInput, setUserInput] = useState({
    year: '',
    month: '',
    day: '',
  });
  

  const birthInput = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };


//===== 주소 api ====================================================

  const [zipCode, setZipcode] = useState<string>("");
  const [roadAddress, setRoadAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>("");   
  const [isOpen, setIsOpen] = useState<boolean>(false); 

  const completeHandler = (data:any) =>{
      setZipcode(data.zonecode);
      setRoadAddress(data.roadAddress);
      setIsOpen(false);
  }


  // 주소api 버튼 이벤트

     // 검색창 열기 
     const modalOpen = () =>{
      setIsOpen(!isOpen);
      }
      
     // 검색창 닫기    
     const modalClose = () =>{
      setIsOpen(!isOpen);
      }

      // 상세 주소검색 event
      const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
          setDetailAddress(e.target.value);
      }


  //===== 이메일 ====================================================
    // const [emailValue, setIEmailValue] = useState("");
    // const [selectedOption, setSelectedOption] = useState("type");
  
    // const emailInputChange = (event) => {
    //   const value = event.target.value;
    //   setIEmailValue(value);
    //   setSelectedOption("type"); // Reset selected option when input changes
    // };
  
    // const emailSelectChange = (event) => {
    //   const value = event.target.value;
    //   setSelectedOption(value);
    //   if (value === "type") {
    //     setIEmailValue(""); // Clear input value when "직접 입력" is selected
    //   } else {
    //     setIEmailValue(value);
    //   }
    // };

  return (

    <>
      <div>
        <div className='signup-text'>회원가입</div>

        <form className='signup-form' onSubmit={onSubmit}>
              
            <table className="signup-table">
              <tbody>
              {/* ======= 이름, 성별 ============================  */}  
                <tr className='signup-name'>
                  <td className="category-name">이름</td>
                  <td>
                    <input 
                        type='text'
                        className={`category-box ${!isNameValid && 'invalid-input'}`}
                        placeholder='이름을 입력해 주세요'
                        name='name'
                        onChange={onChangeName}
                        title='name'
                    >
                    </input>
                    <div className={`message ${!isNameValid ? 'error' : name.length > 0 ? 'success' : ''}`}>
                  {nameMessage}</div>
                  </td>
                  
                </tr>
                
                <tr>
                  <td className="category-name">성별</td>
            
                  <td>
                    <div className="gender-group">
                      <label className={`gender-button ${selectedGender === 'male' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          value="male"                          
                          checked= {selectedGender === "checked"}
                          onChange={() => genderOptionChange('male')}
                        />
                        남
                      </label>

                      <label className={`gender-button ${selectedGender === 'female' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          value="female"
                          checked={selectedGender === 'female'}
                          onChange={() => genderOptionChange('female')}
                        />
                        여
                      </label>
                    </div>
                  </td>
  

                </tr>
                

              {/* ======= 생년월일 ============================  */}
                <tr>
                  <td className="category-name">생년월일</td>
                  <td>
                    <select className="date-select" id="birth-year" onChange={birthInput}>
                      {YEAR.map(y => {
                        return <option key={y}>{y}</option>;
                      })}
                    </select>
                    <select className="date-select" id="birth-month" onChange={birthInput}>
                      {MONTH.map(m => {
                        return <option key={m}>{m}</option>;
                      })}
                    </select>
                    
                    <select className="date-select" id="birth-day" onChange={birthInput}>
                      {DAY.map(d => {
                        return <option key={d}>{d}</option>;
                      })}
                    </select>
                  </td>
                </tr>


              {/* ======= 전화번호 ============================  */}
                <tr>
                  <td className="category-name">전화번호</td>

                  <td>
                    {/* <select className="number-select">
                      <option value="select">선택</option>
                      <option value="010">010</option>
                      <option value="011">011</option>
                    </select> */}
                     <input 
                          type='text' 
                          className={`number-input ${!isPhon && 'invalid-input'}`}
                          name="phon"
                          title='phon'
                          onChange={onChangePhon}
                    >                          
                    </input>

                    <span className="hyphen">-</span>
                    <input 
                          type='text' 
                          className={`number-input ${!isPhon && 'invalid-input'}`}
                          name="phon"
                          title='phon'
                          onChange={onChangePhon}
                    >                          
                    </input>
                    <span className="hyphen">-</span>
                    <input 
                          type='text' 
                          className={`number-input ${!isPhon && 'invalid-input'}`}
                          name="phon"
                          title='phon'
                          onChange={onChangePhon}
                    >                            
                    </input>
                    <div className={`message ${!isPhon ? 'error' : phon.length > 0 ? 'success' : ''}`}>
                        {phonMessage}</div>
                    
                  </td>
                </tr>


              {/* ======= 주소 ============================  */}
                <tr>
                  <td className="category-name" >주소</td>

                  <td>
                  <input type='text' value={zipCode} readOnly className="category-address" placeholder='우편번호'></input>
                    <button className="search-btn" onClick={modalOpen}>검색</button>
                    <br />
                    <input 
                          type='text' 
                          value={roadAddress} 
                          className={`category-address2 ${!isAddress && 'invalid-input'}`}
                          placeholder='주소를 입력해 주세요'
                          name='address'
                          title='address'
                          onChange={onChangeAddress}
                    >                            
                    </input>
                    <input type='text' onChange={changeHandler} value={detailAddress} className="category-address2" placeholder='상세주소를 입력해 주세요'></input>
                    
                    <div className={`message ${!isAddress ? 'error' : address.length > 0 ? 'success' : ''}`}>
                                    {addressMessage}</div>

                    <Modal isOpen={isOpen} ariaHideApp={false} className="address-modal">
                      <DaumPostcode onComplete={completeHandler}  />
                      <button className='modal-close' onClick={modalClose}>닫기</button>
                    </Modal>    

                  </td>

                </tr>

              {/* ======= 이메일 ============================  */}  
                <tr>
                  <td className="category-name">이메일</td>
                  <td>
                    <input 
                          type='email' 
                          className={`email-box ${!isEmailValid && 'invalid-input'}`}
                          placeholder='이메일을 입력해 주세요'
                          name='email'
                          title='email'
                          onChange={onChangeEmail}
                    >                            
                    </input>
                    {/* <span>@</span>

                    <input
                        className="email-box2"
                        id="domain-txt"
                        type="text"
                        value={emailValue}
                        onChange={emailInputChange}
                      />

                      <select
                        className="domain-box"
                        id="domain-list"
                        value={selectedOption}
                        onChange={emailSelectChange}
                      >
                      <option value="type">직접 입력</option>
                      <option value="naver.com">naver.com</option>
                      <option value="google.com">google.com</option>
                      <option value="daum.net">daum.net</option>
                    </select> */}
                     <div className={`message ${!isEmailValid ? 'error' : email.length > 0 ? 'success' : ''}`}>
                  {emailMessage}</div>
                  </td>

                </tr>


              {/* ======= 아이디 ============================  */}
                <tr>
                  <td className="category-name">아이디</td>
                  <td>
                    <input     
                          type='text' 
                          placeholder='아이디를 입력해 주세요' 
                          className= {`category-box ${!isId && 'invalid-input'}`}
                          name="id"
                          title="id"
                          onChange={onChangeId}
                    >
                    </input>
                    <button className="check-btn">중복확인</button>
                    <div className={`message ${!isId ? 'error' : id.length > 0 ? 'success' : ''}`}>
                         {idMessage}</div>
                    
                  </td>
                </tr>


              {/* ======= 비밀번호 ============================  */}
                <tr>
                  <td className="category-name">비밀번호</td>
                  <td>
                    <input 
                          type='text' 
                          placeholder='비밀번호를 입력해 주세요' 
                          className={`category-box ${!isPassword && 'invalid-input'}`}
                          onChange={onChangePassword}
                          name='password'
                          title='password'
                    >
                    </input> 
                    
                    <div className={`message ${!isPassword ? 'error' : password.length > 0 ? 'success' : ''}`}>
                         {passwordMessage}</div>

                  </td>
                </tr>

                <tr>
                  <td className="category-name">비밀번호 확인</td>
                  <td>
                    <input 
                          type='text'
                           placeholder='비밀번호를 입력해 주세요' 
                           className={`category-box ${!isPasswordConfirm && 'invalid-input'}`}
                           onChange={onChangePasswordConfirm}
                           title='passwordConfirm'
                    >
                    </input>
                    <div className={`message ${!isPasswordConfirm ? 'error' : passwordConfirm.length > 0 ? 'success' : ''}`}>
                         {passwordConfirmMessage}</div>
                  </td>
                </tr>


              {/* ======= 닉네임 ============================  */}
                <tr>
                  <td className="category-name signup-td ">닉네임</td>
                  <td className="signup-td" >
                    <input        
                          type='text' 
                          placeholder='닉네임을 입력해 주세요' 
                          className={`category-box ${!isnickName && 'invalid-input'}`}
                          name="nickname"
                          title='nickName'
                          onChange={onChangeNickName}
                    >
                    </input>
                    <button className="check-btn">중복확인</button>
                    <div className={`message ${!isnickName ? 'error' : nickName.length > 0 ? 'success' : ''}`}>
                         {nickNameMessage}</div>                    
                  </td>          
                </tr>
              </tbody>
            </table>
                     
          <div className="signup-btn">
            <button > 회원가입 </button>
          </div>

        </form>
      </div>
    </>

    

  )
}



export default SignUp