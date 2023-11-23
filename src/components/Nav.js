"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
    const isUserLoggedIn = true;
  return (
    <nav className='flex justify-between w-full mb-16 pt-3'>
      <Link href={'/'} className='flex gap-2 justify-center'>
      <Image src={'https://raw.githubusercontent.com/adrianhajdin/project_next_13_ai_prompt_sharing/a6d99701a6b70ce6f0fb13abf8883178d3e610d3/public/assets/images/logo.svg'} width={30} height={30} alt='Promptopia Logo' />
      <p>Promptopia</p>
      </Link>
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
            <div className='flex gap-3 md:flex gap-5'>
                <Link href={'/create-prompt'} className='bg-black rounded-full p-2 text-white'>Create Post</Link>
            </div>
        ):(
            <>

            </>
        )}
      </div>
    </nav>
    
  )
}

export default Nav
