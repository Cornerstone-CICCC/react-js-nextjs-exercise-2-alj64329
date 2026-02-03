import Link from 'next/link'

const Header = () => {
    const menu=[
        {
            name:"home",
            href:"/"
        },
        {
            name:"users",
            href:"/users"
        }
    ]
  return (
    <header className='w-full p-8 flex justify-end bg-gray-400'>
        <nav>
            <menu className='flex items-center gap-4'>
                {menu.map((item, i)=>(
                    <li key={i}>
                        <Link href={item.href}>{item.name.toUpperCase()}</Link>
                    </li>
                ))}
            </menu>
        </nav>

    </header>
  )
}

export default Header