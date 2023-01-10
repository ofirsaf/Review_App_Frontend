import { Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Navbar from "./components/user/Navbar";
import { Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import EmailVerfication from "./pages/EmailVerfication";
import ForgetPaassword from "./pages/ForgetPassword";
import ConfirmPassword from "./components/auth/ConfirmPassword";
import Notfound from "./components/Notfound";

function App() {
  return (
    <>
      <Navbar />
      
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth/signup">
          <SignUp />
        </Route>
        <Route path="/auth/signin">
          <SignIn />
        </Route>
        <Route path="/auth/verification">
          <EmailVerfication />
        </Route>
        <Route path="/auth/forgetPassword">
          <ForgetPaassword />
        </Route>
        <Route path="/auth/confirm-password">
          <ConfirmPassword />
        </Route>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
