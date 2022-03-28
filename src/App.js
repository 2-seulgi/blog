// warning 뜨는거 보기 싫은 경우 사용
/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 전통적인 방식의 자바스크립트 데이터바인딩
  // let posts = '강남 고기 맛집';
  // document.getElementById().innerHTML=''?

  let [title, titleRetouch] = useState(['봄에 좋은 향수 추천', '기온별 옷 추천', '리액트 독학']);
  let [like, retouch] = useState([0]);

  // retouch(10); // 대체 할 데이터
  let [modal, modal변경] = useState(false);

  // function retitle() {
  //   var newArray = [...title];
  //   newArray[0] = '가을 향수 추천';
  //   titleRetouch(newArray);
  // }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {title.map(function (글) {
        return (
          <div className="list">
            <h3>
              {글}
              <span
                onClick={() => {
                  retouch(like + 1);
                }}
              >
                💙
              </span>
              {like}
            </h3>
            <p>3월 15일 발행</p>
            <hr />
          </div>
        );
      })}
      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        열고 닫기
      </button>

      {modal === true ? <Modal title={title}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
// nodejs 설치 이유-> create-react-app 라이브러리 사용하려고. npm이라는 툴 이용 가능.
// 리액트의 가장 큰 장점: 데이터 바인딩이 쉽다.
// 데이터 바인딩
// state에 데이터 저장하는 이유: state는 변경되면 html이 자동으로 재랜더링(새로고침 없이 변경) 된다. 그냥 변수는 변경되어도 자동 재랜더링 안됨
/* 이벤트 다루는 법 :
onClick={클릴될 때 실행할 함수}
onClick={()=>{실행할 내용}}*/
/*
deep copy :서로 값 공유하지 않고 독립적인 값을 가지는 복사
*/
// html을 한 단어로 줄여서 쓸 수 있는 방법: 리액트의 Component 문법 1.이름은 대괄호 2. return() 안에 있는건 태그 하나로 묶어야 한다.
// 어떤것을 Component로 만드는게 좋을까? - 반복 출현하는 html 덩어리 - 자주 변경되는 html UI들 -다른페이지 만들 때도 컴포넌트로 만듦
// Component의 단점 : state 쓸 때 복잡해진다. (상위 Component에서 만든 state 쓰기 위해 props 문법 이용해야함)
