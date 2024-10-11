import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Home from "../pages/home/Home";

export const routes = {
  private: [
    {
      name: "home",
      path: "/",
      component: <Home />,
    },
    {
      name: "register",
      path: "/register",
      component: <Register />,
    },
    // {
    //     name: 'users',
    //     path: '/users',
    //     component: <UsersPage />
    // },
    // {
    //     name: 'create-user',
    //     path: '/create-user',
    //     component: <CreateUserPage />
    // },
    // {
    //     name: 'edit-user',
    //     path: '/edit-user/:userId',
    //     component: <EditUserPage />
    // },
    // {
    //     name: 'create-page',
    //     path: '/create-page',
    //     component: <CreatePage />
    // }
  ],
  public: [
    {
      name: "home",
      path: "/",
      component: <Home />,
    },
    {
      name: "register",
      path: "/register",
      component: <Register />,
    },
    // {
    //     name: 'forgot-password',
    //     path: '/forgot-password',
    //     component: <ForgotPasswordPage />
    // },
    // {
    //     name: 'reset-password',
    //     path: '/reset-password/:code',
    //     component: <ResetPasswordPage />
    // }
  ],
};
