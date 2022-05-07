import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import {FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, RegisterFormikPage, DynamicForm} from '../03-forms/pages'
import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" activeClassName="nav-active" exact>Formik Abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" activeClassName="nav-active" exact> Formik Register</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" activeClassName="nav-active" exact> Dynamic Formik </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage/>
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage/>
          </Route>
          <Route path="/formik-components">
            <FormikComponents/>
          </Route>
          <Route path="/formik-abstraction">
            <FormikAbstraction/>
          </Route>
          <Route path="/formik-register">
            <RegisterFormikPage/>
          </Route>
          <Route path="/dynamic-form">
            <DynamicForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
