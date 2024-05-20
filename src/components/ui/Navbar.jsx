'use client'


import React, { useEffect, useState } from 'react'
import Avatar from './Avatar'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Asegúrate de que el código solo se ejecuta en el cliente
    if (typeof window !== 'undefined') {
      setIsLoggedIn(!!localStorage.getItem('id'));
    }
  }, []);

  return (
    <div className="bg-gray-900 border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src='/logo_yatemate.png' width={100} height={60} className="rounded-md" alt="Flowbite Logo"  style={{ borderRadius: '50%'}}  />
            {/* Puedes ajustar marginTop según el tamaño de tu logo */}
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <>  
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:text-white md:dark:text-blue-500 items-center max-h-16">
                <li>
                  <Link href="/" className="block py-2 px-3 text-md text-white md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-blue-500 duration-300 hover:scale-110" aria-current="page">Inicio</Link>
                </li>
                {
                  (localStorage.getItem('type') == 'Admin' && localStorage.getItem("id")) && (
                  <li>
                    <Link href="/admin/register" className="block py-2 px-3 text-md text-white md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-blue-500 duration-300 hover:scale-110" aria-current="page">Registrar administrativo</Link>
                  </li>
                  )
                }
                {isLoggedIn ? (
                <>
                  <li>
                    <Avatar>Mi usuario</Avatar>
                  </li>
                </>
                ) : (
                  <>
                    <li>
                      <Link href="/login" className="block py-2 px-3 text-md text-white md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-blue-500 duration-300 hover:scale-110" aria-current="page">Iniciar sesión</Link>
                    </li>
                    <li>
                      <Link href="/register" className="block py-2 px-3 text-md text-white md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-blue-500 duration-300 hover:scale-110" aria-current="page">Registrarse</Link>
                    </li>
                  </>
                )}
            </ul>
          </>
          </div>
        </div>
    </div> 
  )
}

export default Navbar