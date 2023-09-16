import { twMerge as tm } from 'tailwind-merge';
import { HTMLAttributes, PropsWithChildren } from 'react';

function Card({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col mb-[50px] last-of-type:mb-0">{children}</div>
  );
}

function Group({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={tm('flex flex-col', className)} {...restProps}>
      {children}
    </div>
  );
}

function Entities({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={tm('flex flex-row gap-x-[5px]', className)} {...restProps}>
      {children}
    </div>
  );
}

function Item({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      {...restProps}
      className={tm(
        'flex flex-col relative cursor-pointer group/item first-of-type:ml-14 last-of-type:mr-14 hover:z-[99] hover:scale-[1.3] transition-[transform] duration-200 max-[1000px]:first-of-type:ml-[30px] max-[1000px]:last-of-type:mr-[30px]',
        className
      )}
    >
      {children}
    </div>
  );
}

function Meta({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={tm(
        'hidden absolute bottom-0 p-[10px] bg-[#0000008f] xl:group-hover/item:block',
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
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      className={tm(
        className,
        'text-2xl text-[#e5e5e5] font-bold mx-14 mt-0 mb-6 max-[1000px]:ml-[30px]'
      )}
      {...restProps}
    >
      {children}
    </p>
  );
}

function SubTitle({
  children,
  className,
  ...restPorps
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      {...restPorps}
      className={tm(
        'text-xs text-white font-bold my-0 select-none hidden xl:group-hover/item:block',
        className
      )}
    >
      {children}
    </p>
  );
}

function Text({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <p
      {...restProps}
      className={tm(
        className,
        'mt-[5px] text-[10px] text-white mb-0 select-none hidden leading-normal xl:group-hover/item:block'
      )}
    >
      {children}
    </p>
  );
}

function FeatureText({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      className={tm('text-lg text-white font-bold mx-0 my-0', className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

function Feature({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={tm(
        'flex flex-row bg-contain relative h-[360px] bg-right bg-no-repeat bg-black',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function FeatureTitle({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p className={tm('ml-0', className)} {...restProps}>
      {children}
    </p>
  );
}

function FeatureClose({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={tm(
        'text-white absolute right-5 top-5 cursor-pointer bg-transparent border-0',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

function Content({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={tm('m-14 leading-normal max-w[500px]', className)}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Maturity({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={tm(
        'bg-[#f44336] rounded-2xl w-7 leading-7 text-center text-white font-bold mr-[10px] text-xs',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Object.assign(Card, {
  Group,
  Item,
  Meta,
  Entities,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureText,
  FeatureTitle,
  FeatureClose,
  Content,
  Maturity,
});
