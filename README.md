## Chatting-room

socket.io를 활용한 실시간 채팅방 구현
파일 전송 구현 



#### deploy(미완)

```
npm install
npm start 
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





---

#### 참고 블로그

- [배민 실시간 서비스 경험기(배달운영시스템)](https://woowabros.github.io/woowabros/2017/09/12/realtime-service.html)

---

#### socket.io stream 파일 전송







#### 참고 블로그 

- [socket.io-stream](https://ongamedev.tistory.com/entry/socketiostream%EC%9C%BC%EB%A1%9C-%ED%8C%8C%EC%9D%BC-%EC%A0%84%EC%86%A1%ED%95%98%EA%B8%B0)
- [socket.io-stream example github](https://github.com/nkzawa/socket.io-stream)






<del>

#### WebRTC 파일 전송

[WebRTC 공식 document : Data Channel ](https://webrtc.org/getting-started/data-channels) 

`RTCPeerConnection` 를 통한 임의의 데이터 전송을 위한 API 지원

`RTCDataChannel` 객체에서 `RTCPeerConnection` 객체 반환

```javascript
const peerConnection = new RTCPeerConnection(configuration);
// createDataChannel()을 호출
const dataChannel = peerConnection.createDataChannel(); 
```

</del>



#### 참고 블로그 

- [P2P file transfer 블로그 포스팅](https://medium.com/pplink/p2p-file-transfer-with-webrtc-rxjs-91f82934c627)

- [Hole Punching](https://program-factory.tistory.com/7)
- [Does WebRTC use TCP or UDP?](https://stackoverflow.com/questions/18897917/does-webrtc-use-tcp-or-udp)

---


#### 추후 보충
[MySql 정보 숨기기 참고](https://link2me.tistory.com/1522)