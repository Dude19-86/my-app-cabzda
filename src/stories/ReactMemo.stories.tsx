import React, {useState} from "react";

export default {
    title: "ReactMemo demo",
}


// export const ReactMemoExample = () => {
//     console.log("ReactMemoExample")
//     const [value, setValue] = useState(0)
//     return <>
//         <input style={{margin: "5px"}} value={value}/>
//         <button style={{margin: "5px"}} onClick={() => setValue(value + 1)}>{value}</button>
//         <button onClick={() => setValue(0)}>clear</button>
//     </>
// }

const NewMessageCounter = (props: { count: number }) => {
    console.log("NewMessageCounter")
    return <div>{props.count}</div>
}

type UsersType = {
    users: string[]
}
const UsersSecret = (props: UsersType) => {
    console.log("Users")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("Example1")
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()]
        setUsers(newUsers)
    }

    return <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add user
        </button>
        <NewMessageCounter count={count}/>
        <Users users={users}/>
    </div>
}