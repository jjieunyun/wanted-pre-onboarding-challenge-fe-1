# Wanted Pre Onboarding FE(1월)

### 📌 Summary
- 원티드에서 제공한 Server API를 활용하여 Todo App을 구현했습니다.
- 회원가입, 로그인, Todo추가, 삭제, 수정, Todo상태 Filtering을 구현했습니다.
- useContext를 활용해서 다크모드를 추가했습니다.
- Todo상단 Header에 Todo의 상태에 따라 필터링할 수 있는 기능을 구현했습니다.
***

### 📌 Skills
- React(React Hooks)
- JavaScript
- React-router-dom
- PostCSS

***
### 📌 Project Start
- 원티드에서 제공한 API를 활용해서 과제를 구현했습니다.

<pre>
<code>
//1. server - 원티드에서 제공한 API폴더

yarn install
yarn start


//2. client - React로 구현한 React폴더

npm i
npm start
</code>
</pre>
***

### 📌 Details
#### ✅ 회원가입, 로그인
- 회원가입과 로그인을 한 페이지에 구현했습니다.
- 이메일주소의 유효성검사를 위해 정규식을 활용했습니다.
- 비밀번호는 8자리 이상만 입력할 수 있습니다.
- 이메일과 비밀번호 각 유효성에 대한 안내문구를 input아래 쪽에 실시간으로 보여줍니다.
- api를 통해 받은 accessToken은 localStorage에 저장합니다.
  
  
  
#### ✅ 투두리스트
##### CRUD
- <u>DB에 Todo State를 저장 할 수있는 상태값을 추가했습니다.</u>
- <u>왼쪽에는 투두의 리스트들을 보여주고, 오른쪽에 투두의 상세를 보여줍니다. </u>
- useEffect를 활용해서 TodoList를 불러옵니다 (getTodos)
- Todo의 제목을 클릭하면 Todo상세를볼 수 있습니다. (getTodoById)
- Header의 Add버튼을 클릭하면 Todo를 클릭할 수 있는 폼을 렌더링하고 새로운 Todo를 추가할 수있습니다. (createTodo)
- 휴지통 아이콘을 클릭하면 Todo를 삭제할 수 있습니다. (deleteTodo)
- 투두 상세폼에서 내용을 수정하고 Edit버튼을 클릭하면 수정됩니다. (updateTodo)
- 투두의 checkbox를 클릭하면 state값을 저장할 수있습니다.(updateTodo)

##### header (추가구현)
- header 왼쪽의 아이콘을 클릭하면 다크모드로 전환됩니다.
- Todo의 상태에 따라 All, active, complete로 투두를 필터링할 수 있습니다.


