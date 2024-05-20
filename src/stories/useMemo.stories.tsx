import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo demo',
}

export const DifficultCountingExample = () => {

}


const UsersSecret = (props: { users: string[] }) => {
    console.log("Users")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])


    const addUser = () => {
        const newUsers = [...users, "Sveta " + new Date().getTime()]
        setUsers(newUsers)
    }
    return <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {count}
        <Users users={newArray}/>
    </div>
}