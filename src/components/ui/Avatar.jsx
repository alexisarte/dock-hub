"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem('id');
  }

  return (
    <div style={{ position: "relative" }}>
      <span className="ml-2 cursor-pointer" onClick={toggleDropdown}>
        <div
          className="inline-block rounded-full bg-rgb-190-175-85 p-1 hover:scale-110"
          style={{ transition: "transform 0.1s ease-in-out" }}
        >
          <Image
            src="/userIcon.png"
            className="text-gray-800 dark:text-white rounded-full"
            alt="Dropdown"
            width={30}
            height={30}
          />
        </div>
      </span>
      {isOpen && (
        <div
          className="absolute right-0 z-10 bg-white border border-gray-200 rounded-lg shadow border-t-0"
          style={{ top: "calc(100% + 8px)" }}
        >
          <div>
            <div className="p-2">
              <div>Mi cuenta</div>
            </div>
            <ul className="py-1">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Ver mis publicaciones
                </a>
              </li>
              <li>
                <Link href={
                  localStorage.getItem('id') ? `/editarperfil/${localStorage.getItem('id')}` : "/login"
                } className="block px-4 py-2 hover:bg-gray-100">
                  Editar Perfil
                </Link>
              </li>
              <Link href="/login" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>
                Cerrar sesión
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;