async function getUser() { // 로딩 시 사용자 가져오는 함수
    try {
        const res = await axios.get('/users');
        const users = res.data;
        const list = document.getElementById('list');
        list.innerHTML = ''; // id가 list인 div 태그의 내용을 지움

        // users: {id:name} 형태, {123123:김영진, 123123123123:이영진, ..........}

        // 사용자마다 반복적으로 화면 표시 및 이벤트 연결
        Object.keys(users) // users데이터에서 키값들의 배열
            //Object.keys(users) ==> ['김영진', '이영진', '최영진']
            .map(function (key, index) {
            const userDiv = document.createElement('div');
            const span = document.createElement('span');
            span.textContent = users[key];
            const edit = document.createElement('button');
            edit.textContent = '수정';
            edit.addEventListener('click', async () => { // 수정 버튼 클릭
                const name = prompt('바꿀 이름을 입력하세요');
                if (!name) {
                    return alert('이름을 반드시 입력하셔야 합니다');
                }
                try {
                    await axios.put('/user/' + key, { name });
                    getUser();
                } catch (err) {
                    console.error(err);
                }
            });
            const remove = document.createElement('button');
            remove.textContent = '삭제';
            remove.addEventListener('click', async () => { // 삭제 버튼 클릭
                try {
                    await axios.delete('/user/' + key);
                    getUser();
                } catch (err) {
                    console.error(err);
                }
            });
            userDiv.appendChild(span);
            userDiv.appendChild(edit);
            userDiv.appendChild(remove);
            list.appendChild(userDiv);
            console.log(res.data);
        });
    } catch (err) {
        console.error(err);
    }
}

window.onload = getUser; // 화면 로딩 시 getUser 호출
// onload ---> load 이벤트가 발생하면 실행되는 이벤트 핸들러 함수를 등록
// 거의 최초에 실행되는 것으로 인지: java main 메소드 역활
// onclick, onmouseclick, onmousemove 등

// 폼 제출(submit) 시 실행
// restFront.html의 <form></form>중에서 아이디가 form인 객체

// document.querySelector('#form').addEventListener


document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    // target-form 태그에 발생한 submit 이벤트 처리를 위해 input 태그(id - username)의 값(value)를 이용
    if (!name) {
        return alert('이름을 입력하세요');
    }
    // name에 문자열이 있음
    try {
        await axios.post // 요청 메서드
        ('/user', // url - 요청 주소
            { name } // { name:name });
        // POST /user 요청, name 데이터를 등록하라고 요청
        getUser();
    } catch (err) {
        console.error(err);
    }
    e.target.username.value = '';
});