import { useState } from 'react';
import ListFriend from "./components/listFriend";
import { NavLink, Routes, Route } from "react-router-dom";

function App () {
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

    const removeFriend = id => setFriends(friends.filter(item => item.id !== id));

    const [info, setInfo] = useState(myInfo);
    const [friends, setFriends] = useState(myFriend);

    // return (
    //     <div style={{ margin: 10 }}>
    //         <h1>Thông tin cá nhân</h1>
    //         <p>Tên: {info.name}</p>
    //         <p>Tuổi: {info.age}</p>
    //         <p>Địa chỉ: {info.address}</p>
    //         <p>SV {info.school}</p>
    //         <p>
    //             Trạng thái: {info.status ? "Đã có nguoiyeu" : "Độc toàn thân"}
    //             <button onClick={() => setInfo({...info, status: !info.status})} style={{ marginLeft: 10 }}>Toggle status</button>
    //         </p>

    //         <h1>List friend</h1>
            
    //         {!friends.length ? "Không có item nào" : <ListFriend data={friends} onclick={removeFriend} />}
    //     </div>
    // )

    return (
        <div style={{ margin: 20 }}>
            <header>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>} />
                    <Route path="/products" element={<h1>Product Page</h1>} />
                </Routes>
            </main>
        </div>
    )
}

export default App;