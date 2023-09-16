import { twMerge as tm } from 'tailwind-merge';
import Image from 'next/image';

import { ButtonProps, DivProps, InputProps, ParagraphProps } from '@/types';

function OptForm({ children, className, ...restProps }: DivProps) {
  return (
    <div
      className={tm(
        'flex justify-center h-full mt-5 flex-wrap max-[1000px]:flex-col max-[1000px]:items-center',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Input({ className, ...restProps }: InputProps) {
  return (
    <input
      className={tm(
        'max-w-[450px] w-full border-0 p-[10px] h-[70px] box-border',
        className
      )}
      {...restProps}
    />
  );
}

function Break({ children, className, ...restProps }: DivProps) {
  return (
    <div className={tm('basis-full h-0', className)} {...restProps}>
      {children}
    </div>
  );
}

function Button({ children, className, ...restProps }: ButtonProps) {
  return (
    <button
      className={tm(
        'flex items-center h-[70px] bg-[#e50914] text-white uppercase py-0 px-8 text-[26px] cursor-pointer border-0 hover:bg-[#f40612] max-[1000px]:h-[50px] max-[1000px]:text-base max-[1000px]:mt-5 max-[1000px]:font-bold',
        className
      )}
      {...restProps}
    >
      {children}
      <Image
        src="/chevron-right.png"
        className="icon ml-[10px] max-[1000px] max-[1000px]:w-4"
        width={24}
        height={24}
        alt="try now"
      />
    </button>
  );
}

function Text({ children, className, ...restProps }: ParagraphProps) {
  return (
    <p
      className={tm(
        'text-[19.2px] text-white text-center my-[19.2px] max-[600px]:text-base max-[600px]:leading-[22px]',
        className
      )}
      {...restProps}
    >
      {children}
    </p>
  );
}

export default Object.assign(OptForm, { Input, Break, Button, Text });
