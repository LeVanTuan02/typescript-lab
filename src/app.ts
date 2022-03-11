const sum = (a: number, b: number) => a + b;

type obj = {
    name: string,
    age: number,
    friends: string[]
};

const myInfo: obj = {
    name: "Tuan",
    age: 18,
    friends: ["A", "B", "C", "D", "E"]
}

//
const myName: string = "Tuan Demo";
const myAge: number = 18;
const course: { id: number, name: string} = { id: 1, name: "Trà sữa" };
const myFriend: { id: number, name: string }[] = [
    {
        id: 1,
        name: "Trà sữa"
    },
    {
        id: 2,
        name: "Trà chanh"
    },
];
const listFriend: number[] = [1, 2, 3, 4];

const myName2: number | string = 123;

console.log(myName2);

console.log(myInfo);

console.log(sum(1, 2));