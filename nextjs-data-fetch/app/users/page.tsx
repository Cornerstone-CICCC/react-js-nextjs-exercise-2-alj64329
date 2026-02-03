import Link from "next/link";

export interface User{
  id:number,
  firstName:string,
  lastName:string,
  age:number,
  gender:string,
  email:string
}

const page = async() => {
const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();
  const users:User[] = data.users;
  return (
    <div className="py-4 px-10" >
        <ul
        className="flex flex-col gap-4">
        {users.map((u) => (
          <li key={u.id}
          >
            <Link href={`/users/${u.id}`}>
            {u.firstName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page