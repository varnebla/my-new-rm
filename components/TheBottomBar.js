import { BottomBarLink } from './BottomBarLink';
import { FireIcon } from './icons/FireIcon';
import { HomeIcon } from './icons/HomeIcon';
import { CollectionIcon } from './icons/CollectionIcon';

export function TheBottomBar({}) {
  return (
    <div className="lg:hidden px-3 pt-2 fixed bottom-0 right-0 left-0 bg-white border-t-2 border-gray-200 pb-6">
      <nav className="max-w-md mx-auto w-full flex justify-between items-center">
        <BottomBarLink link="/">
          <HomeIcon />
          <p>Home</p>
        </BottomBarLink>
        <BottomBarLink link="/exercises">
          <CollectionIcon />
          <p>Ejercicios</p>
        </BottomBarLink>
        <BottomBarLink link="/my-rms">
          <FireIcon />
          <p>Mis RMs</p>
        </BottomBarLink>
      </nav>
    </div>
  );
}
