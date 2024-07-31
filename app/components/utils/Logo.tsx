import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex mr-10 h-full w-full items-end">
        <Image
          src="images/logo.png"
          priority
          alt="logo"
          className="h-12 w-36 bg-slate-100/60 p-1 border rounded-lg dark:relative"
          width={10}
          height={10}
        />
      </div>
    </Link>
  );
};

export default Logo;
