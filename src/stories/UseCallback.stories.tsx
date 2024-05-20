import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useCallback demo',
}


const UsersSecret = (props: { users: string[] }) => {
    console.log("Users")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArray = useMemo(() => {
        return books.filter(book => book.toLowerCase().indexOf('') > -1)
    }, [books])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, "Angular " + new Date().getTime()
            + " "
            + (new Intl.DateTimeFormat('en-US',
                {
                    year: 'numeric',
                    month: 'long',
                    minute: '2-digit',
                    second: '2-digit', day: '2-digit',
                    era: 'long'
                }).format(new Date()))]
            setBooks(newUsers)
        };
    },
        [books])
    const memoizedAddBook2 = useCallback(() => {
            const newUsers = [...books, "Angular " + new Date().getTime()
                + " "
                + (new Intl.DateTimeFormat('en-US',
                    {
                        year: 'numeric',
                        month: 'long',
                        minute: '2-digit',
                        second: '2-digit', day: '2-digit',
                        era: 'long'
                    }).format(new Date()))]
            setBooks(newUsers)
    }, [books])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={memoizedAddBook2}>add book</button>
            {counter}
            <Book addBook={memoizedAddBook2}
                  books={newArray}
            />
        </div>
    )
}

type BookSecretPropsType = {
    books: string[]
    addBook: () => void
}
const BookSecret = (props: BookSecretPropsType) => {
    console.log("BookSecret")
    return <div>
        <button onClick={() => props.addBook()}></button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Book = React.memo(BookSecret)