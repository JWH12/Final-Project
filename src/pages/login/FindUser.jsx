import React, { useState } from 'react';

import './FindUser.css';


function FindUser() {

  const [tabText, setTabText] = useState('아이디 찾기');

  const handleTabChange = (event) => {
    setTabText((prevTabText) =>
      prevTabText === '아이디 찾기' ? '비밀번호 찾기' : '아이디 찾기'
    );
  };
  

  return (
   
    <>
      <form>
        <div className="head-font">{tabText}</div>
    
        <div className="main">
          <input type="radio" id="tab-1" name="show" checked={tabText === '아이디 찾기'}
            onChange={handleTabChange}/>
          <input type="radio" id="tab-2" name="show" checked={tabText === '비밀번호 찾기'}
            onChange={handleTabChange} />
          
          <div className="tab">
            <label for="tab-1">아이디 찾기</label>
            <label for="tab-2">비밀번호 찾기</label>
          </div>

          <div className="head-font-bottom"></div>

          <div className="logo-div">
          <img src="/images/logo2.png" className="findUser-logo" alt="로고이미지"></img>
          </div>

          <div className="content">
            
            {/* ==================== 아이디 찾기 ===================================================== */}
         
            <div className="content-dis">

              <div><input type='text' className="findUser-textbox" placeholder='이름을 입력해 주세요'></input></div>
              <div><input type='text' className="findUser-textbox" placeholder='이메일을 입력해 주세요'></input></div>
              
              <div>
              <button className="findUser-button">아이디 찾기</button>
              </div>

            </div>


            {/* ==================== 비밀번호 찾기 ===================================================== */}
            <div className="content-dis">
              
              <div><input type='text' className="findUser-textbox" placeholder='이름을 입력해 주세요'></input></div>
              <div><input type='text' className="findUser-textbox" placeholder='아이디를 입력해 주세요'></input></div>
              <div><input type='text' className="findUser-textbox" placeholder='이메일을 입력해 주세요'></input></div>
              
              <div>
              <button className="findUser-button">비밀번호 찾기</button>
              
              </div>
            </div>


          </div>
        </div>
      </form>

      
    </>
   
  )
}

export default FindUser