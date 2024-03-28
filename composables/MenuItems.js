export const overviewMenuItem = () => {
  return {
    title: "Overview",
    path: "/admin/overview",
    icon: "ri:dashboard-line",
  };
};

export const appManagementMenuItem = () => {
  return {
    title: "App management",
    path: "/admin/app-management",
    icon: "ri:database-2-line",
    children: [
      {
        title: "Add new apps",
        path: "/admin/app-management",
        icon: "ri:add-large-line",
      },
      {
        title: "Update app's info",
        path: "/",
        icon: "ri:loop-right-line",
      },
    ],
  };
};

export const userManagementMenuItem = () => {
  return {
    title: "User management",
    path: "/user-management",
    icon: "ri:user-settings-line",
  };
};





