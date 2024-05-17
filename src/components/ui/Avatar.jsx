"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import Link from "next/link";

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refDropdown = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refDropdown.current && !refDropdown.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refDropdown]);

    

  const handleLogout = () => {
    localStorage.removeItem('id');
  }

  return (
    <div style={{ position: "relative" }}>
      <span className="ml-2 cursor-pointer" onClick={toggleDropdown}>
        <div
          className="inline-block rounded-full bg-rgb-190-175-85 p-1 duration-300 hover:scale-110"
        >
          <Image
            src="/user48.png"
            alt=""
            width={30}
            height={30}
          />
        </div>
      </span>
      {isOpen && (
        <div
          ref={refDropdown}
          className="absolute right-0 z-10 bg-white border border-gray-200 rounded-xl shadow border-t-0"
          style={{ top: "calc(100% + 8px)" }}
        >
          <div>
            <div className="p-3">
              <div>Mi cuenta</div>
            </div>
            <ul className="py-1">
              <li>
                <Link href="/posts" className="block px-4 py-2 hover:bg-gray-100">
                  Ver mis publicaciones
                </Link>
              </li>
              <li>
                <Link href={
                  localStorage.getItem('id') ? `/editarperfil/${localStorage.getItem('id')}` : "/login"
                } className="block px-4 py-2 hover:bg-gray-100">
                  Editar Perfil
                </Link>
              </li>
              <li>
                <Link href="/login" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>
                  Cerrar sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;