import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

// UTILS
import { cn } from "src/lib/utils";

// SHADCN COMPONENTS
import { Drawer, DrawerTrigger, DrawerContent } from "src/components/ui/drawer";
import { Button } from "src/components/ui/button";

// COMPONENTS
import { ProfileSwitcher } from "src/components";

// ICONS
import { Menu } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <div className="flex md:justify-start justify-between items-center gap-6 py-3">
        <ProfileSwitcher />
        <div className="md:flex hidden items-center gap-6">
          <Link
            to="/search"
            className={cn(
              "text-sm font-medium hover:text-primary",
              location.pathname === "/search" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Search
          </Link>
          <Link
            to="/dashboards"
            className={cn(
              "text-sm font-medium hover:text-primary",
              location.pathname === "/dashboards" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Dashboards
          </Link>
          <Link
            to="/statistics"
            className={cn(
              "text-sm font-medium hover:text-primary",
              location.pathname === "/statistics" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Statistics
          </Link>
        </div>
        <div className="md:hidden">
          <Drawer direction="right" open={menuOpen} onOpenChange={setMenuOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col gap-4 w-32 p-6">
              <Link
                to="/search"
                className={cn(
                  "text-lg font-medium hover:text-primary",
                  location.pathname === "/search" ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setMenuOpen(false)}
              >
                Search
              </Link>
              <Link
                to="/dashboards"
                className={cn(
                  "text-lg font-medium hover:text-primary",
                  location.pathname === "/dashboards" ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setMenuOpen(false)}
              >
                Dashboards
              </Link>
              <Link
                to="/statistics"
                className={cn(
                  "text-lg font-medium hover:text-primary",
                  location.pathname === "/statistics" ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setMenuOpen(false)}
              >
                Statistics
              </Link>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
