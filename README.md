## Chatting-room

socket.io를 활용한 실시간 채팅방 구현





#### deploy(미완)

```

npm install


// run
npm start 
    or
node server.js 
```



## API
- #### user info

| method | url    | function         |
| ------ | ------ | ---------------- |
| POST   | /user  | 새 유저 회원가입 |
| POST   | /login | 기존 유저 로그인 |

- #### room info

| method | url   | function                       |
| ------ | ----- | ------------------------------ |
| POST   | /room | 새 채팅방 생성                 |
| GET    | /room:room-name | 채팅방 입장                    |
| GET    | /new-room | 새 채팅방 생성 페이지 입장 |
| DELETE | /room:room-name | 채팅방 삭제 (만든 사람만 가능) |

- #### chat info
| event | param                | function                       |
| :----: | ----- | ------------------------------ |
|  connection | socket | 유저 소켓 통신 연결 |
|  join-room  | data{roomId, userId} | 새 유저 채팅방 입장 |
| new | data{msg} | 채팅방에 유저 이름 세팅 |
| send-msg | roomId, name, msg    | 채팅 메시지 보내기 |
| receive-msg | text | 채팅 메시지 받기 |
| room-broadcast | data{msg} | 전체 안내 메시지 보내기 |
| disconnect* |  | |












#### 추후 보충
[MySql 정보 숨기기 참고](https://link2me.tistory.com/1522)





---

#### 참고 블로그

- [배민 실시간 서비스 경험기(배달운영시스템)](https://woowabros.github.io/woowabros/2017/09/12/realtime-service.html)