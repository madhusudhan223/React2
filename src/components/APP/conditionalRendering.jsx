import { userProvider } from "./context";
import Toggle from "./toggle";
function UserGreeting() {
  return <div>Hello Welcome</div>;
}
function GuestGreeting() {
  return <div>Please Sign In</div>;
}
export default function Greeting(props) {
  <userProvider value={{ name: "madhu" }}></userProvider>;
  const { isLoggedIn } = props;

  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
