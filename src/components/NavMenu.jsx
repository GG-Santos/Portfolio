import { useState, useEffect } from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(faMoon, faSun);

export function NavMenu() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeLink, setActiveLink] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => setActiveLink(window.location.hash);
    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    window.location.hash = link;
  };

  const handleResumeClick = () => {
    window.location.href = '/assets/pdf/GG-Santos_Full-Stack_Resume.pdf';
  };

  return (
    <div className="flex justify-end NavText text-xs">
      <div className="fixed" style={{ zIndex: 2 }}>
        <NavigationMenu className="pt-5 pr-5">
          <NavigationMenuList>
            {['#about', '#projects', '#contact'].map((link) => (
              <NavigationMenuItem key={link} className="px-3">
                <NavigationMenuLink 
                  href={link} 
                  className={`${activeLink === link ? 'text-blue-500' : ''}`} 
                  onClick={() => handleLinkClick(link)}
                >
                  {link.slice(1)}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <Separator orientation="vertical" className="mx-3 Tall-Separator"/>
            <NavigationMenuItem>
              <div className="pl-6 px-2" style={{ width: '3rem' }} onClick={toggleDarkMode}>
                <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-3">
              <div onClick={handleResumeClick} style={{ cursor: 'pointer' }}>
                resume
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
