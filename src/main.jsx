import ReactDOM from 'react-dom';
import { React, useState } from 'react';
import ListFriend from './components/listFriend';
import './index.css'

const myInfo = {
    name: "Tuân Demo",
    age: 18,
    school: "FPT Polytechinc",
    address: "Lạng Giang, Bắc Giang",
    status: 0
};

const myFriend = [
    {
        id: 1,
        name: "Khôi",
        address: "Hà Giang"
    },
    {
        id: 2,
        name: "Quyết",
        address: "Phú Thọ"
    },
    {
        id: 3,
        name: "Đồng chí TLinh",
        address: "Bắc Giang"
    },
    {
        id: 4,
        name: "Tuấn Anh",
        address: "Bắc Giang"
    },
    {
        id: 5,
        name: "Diễm My 9x",
        address: "Hà Nội"
    },
];

const handleRemove = id => {
    console.log(id);
}

ReactDOM.render(
    <div style={{ padding: 10 }}>
        <h1>Thông tin cá nhân</h1>
        <div>
            <p>Tên: {myInfo.name}</p>
            <p>Tuổi: {myInfo.age}</p>
            <p>Địa chỉ: {myInfo.address}</p>
            <p>Sinh viên trường {myInfo.school}</p>
            <p>Hiện tại {!myInfo.status ? 'đang ế =))' : 'đã có người eo :v'}</p>
        </div>

        <h2>Danh sách bạn bè</h2>
        <ListFriend data={myFriend} onclick={handleRemove} />
    </div>,
    document.getElementById('root')
)
