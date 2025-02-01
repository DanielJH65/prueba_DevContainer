import { useEffect, useState } from 'react'
import './App.css'

type User = {
  userId: string,
  name: string,
  lastname: string,
  mail: string,
  username: string,
  creation_date: string
}

function App() {

  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch("http://localhost:4001/api/Users")
      .then(res => res.json())
      .then(data => setUsers(data))
    console.log(users)
  }, [])

  return (
    <main>
      <form onSubmit={async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:4001/api/Users", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            lastname,
            'mail': email,
            username
          })
        })
        setName("")
        setLastname("")
        setEmail("")
        setUsername("")
        const data = await res.json()
        setUsers([...users, data])
      }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }}></input>

        <label htmlFor="lastname">Lastname:</label>
        <input type="text" id="lastname" value={lastname} onChange={(e) => { setLastname(e.target.value) }}></input>

        <label htmlFor="mail">Email:</label>
        <input type="email" id="mail" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => { setUsername(e.target.value) }}></input>


        <input type="submit" value={"Submit"} id='submit'></input>
      </form>
      <section>
        {
          users.map(user => {
            return <article key={user.userId}>
              <h3>{user.name}</h3>
              <h4>{user.lastname}</h4>
              <h4>{user.mail}</h4>
              <h4>{user.username}</h4>
            </article>
          })
        }
      </section>
    </main>
  )
}

export default App
