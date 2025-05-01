import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu"
import { House, Moon, Sun, User } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { logout } from "@/store/slices/user.slice"

function Navbar() {
  const { user } = useSelector((state: any) => state.user)
  const { theme, setTheme } = useTheme()
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.removeItem("user")
    dispatch(logout())
  }
  const navigateHome = () => {
    if (user) {
      navigate("/")
    } else {
      navigate("/login")
    }
  }
  return (
    <NavigationMenu className="border border-border rounded-full overflow-hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Button variant="ghost" className="rounded-full" onClick={navigateHome}>
            <House />
          </Button>
        </NavigationMenuItem>
        {user && (
          <NavigationMenuItem>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="rounded-full">
                  <User />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-fit" >
                <Button variant="ghost" className="rounded-full" onClick={handleLogout}>Logout</Button>
              </PopoverContent>
            </Popover>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <Button variant="ghost" className="rounded-full" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar