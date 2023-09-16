'use client';

import { twMerge as tm } from 'tailwind-merge';
import {
  SetStateAction,
  createContext,
  useState,
  Dispatch,
  useContext,
} from 'react';
import Image from 'next/image';

import { DivProps, HeadingProps } from '@/types';

const ToggleContext = createContext<null | {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}>(null);

export default function Accordion({
  children,
  className,
  ...restProps
}: DivProps) {
  return (
    <div
      className={tm('flex border-b-8 border-solid border-[#222]', className)}
      {...restProps}
    >
      <div
        className={tm(
          'flex py-[70px] px-[45px] flex-col max-w-[815px] m-auto',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function Frame({ children, className, ...restProps }: DivProps) {
  return (
    <div className={tm('mb-10', className)} {...restProps}>
      {children}
    </div>
  );
}

export function Title({ children, className, ...restProps }: HeadingProps) {
  return (
    <h1
      className="text-[50px] leading-[1.1] mt-0 mb-2 text-white text-center"
      {...restProps}
    >
      {children}
    </h1>
  );
}

export function Item({ children, className, ...restProps }: DivProps) {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <div
        className={tm(
          'text-white m-auto mb-[10px] max-w-[728px] w-full first-of-type:mt-[3em] last-of-type:mb-0',
          className
        )}
        {...restProps}
      >
        {children}
      </div>
    </ToggleContext.Provider>
  );
}

export function Header({ children, className, ...restProps }: DivProps) {
  const { toggle, setToggle } = useContext(ToggleContext)!;

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={tm(
        'flex justify-between cursor-pointer mb-1 text-[26px] font-normal bg-[#303030] py-[0.8em] px-[1.2em] select-none items-center',
        className
      )}
      {...restProps}
    >
      {children}
      {toggle ? (
        <Image
          className="icon"
          width={24}
          height={24}
          src="/close-slim.png"
          alt="close"
        />
      ) : (
        <Image
          className="icon"
          width={24}
          height={24}
          src="/add.png"
          alt="open"
        />
      )}
    </div>
  );
}

export function Body({ children, className, ...restProps }: DivProps) {
  const { toggle } = useContext(ToggleContext)!;
  return (
    <div
      className={tm(
        'text-[26px] font-normal leading-normal bg-[#303030] whitespace-pre-wrap select-none overflow-hidden',
        toggle ? 'open' : 'close',
        className
      )}
      {...restProps}
    >
      <span className="block py-[0.8em] pr-[2.2em] pl-[1.2em]">{children}</span>
    </div>
  );
}
