import { twMerge as tm } from 'tailwind-merge';
import { HTMLAttributes, PropsWithChildren } from 'react';

function Feature({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={tm(
        'flex flex-col border-solid border-x-0 border-b-8 border-[#222] text-center py-[133px] min-[720px]:py-[122px] min-[1000px]:py-[157px] min-[645px]:py-[111px] px-[45px]',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Title({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h1
      className={tm(
        'text-white font-medium text-[50px] m-auto max-w-[640px] max-[600px]:text-[35px]',
        className
      )}
      {...restProps}
    >
      {children}
    </h1>
  );
}

function SubTitle({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h2
      className={tm(
        'text-white text-[26px] font-normal my-4 mx-auto max-[600px]:text-[18px]',
        className
      )}
      {...restProps}
    >
      {children}
    </h2>
  );
}

export default Object.assign(Feature, { Title, SubTitle });
