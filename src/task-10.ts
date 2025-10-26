type User = {
    id: number;
    name: string;
};

const users = ["alice", "bob", "charlie"];

function toUserObjects (names: string[]): User[] {
    return names.map((name, index) => ( {
        id: index + 1,
        name,
    }));
    }
    


toUserObjects(users);
// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]


// interface User {
//   id: number;
//   name: string;
// }

// const users = ["alice", "bob", "charlie"];

// function toUserObjects(names: string[]): User[] {
//   const allNames = names.map((name, index) => ({
//     id: index + 1,
//     name: name,
//   }));

//   return allNames;
// }

// console.log(toUserObjects(users));