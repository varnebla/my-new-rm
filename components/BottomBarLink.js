import Link from 'next/link';
import { useRouter } from 'next/router';

export function BottomBarLink(props) {
  const router = useRouter();
  const baseRoute = '/' + router.asPath.split('/')[1];
  const activeClass = baseRoute == props.link ? 'bg-lime-300' : null;

  return (
    <Link href={props.link}>
      <a
        className={`flex flex-col items-center rounded-lg px-3 py-2 ${activeClass}`}
      >
        {props.children}
      </a>
    </Link>
  );
}
