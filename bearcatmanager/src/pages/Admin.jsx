import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import '../App.css';
// import { TicketCarouselComponent } from '../../components/ticket-carousel';

function Admin() {
  return (
    <>

      <div className="Admin">
        <header className="Admin-header">
          Welcome Back Admin!

        </header>
      </div>
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink><a href='/CreateEvent'>Create an Event</a></NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link 3</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item Four</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link 4</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>

      {/* <TicketCarouselComponent /> */}
    </>
  );
}

export default Admin;



