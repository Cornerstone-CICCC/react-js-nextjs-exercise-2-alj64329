import { User } from "../page";


type Props = {
    params:Promise<{slug:string}>
}

const page = async({params}: Props) => {
    const {slug} = await params
      let user: User;

  try {
    const res = await fetch(`https://dummyjson.com/users/${slug}`)
    const data = await res.json()
    user = data
  } catch (err) {
    console.log(err)
    throw Error("Unable to show post")
  }
  return (
    <div
    className="p-8">
        <h1
        className="py-4">User Detail</h1>
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
        <div>{user.age}</div>
        <div>{user.gender}</div>
        <div>{user.email}</div>
    </div>
  )
}

export default page