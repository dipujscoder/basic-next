const sidebarData = [
  {
    id: 1,
    title: "dashboard",
    route: "/dashboard",
    child: false,
  },
  {
    id: 2,
    title: "Projects",
    route: "/projects",
    child: [
      {
        title: "Portfolios",
        route: "/dashboard/projects/portfolios",
      },
      {
        title: "Categories",
        route: "/dashboard/projects/categories",
      },
      {
        title: "Skills",
        route: "/dashboard/projects/skills",
      },
    ],
  },
  {
    id: 3,
    title: "Settings",
    route: "/settings",
    child: [
      {
        title: "Users",
        route: "/dashboard/settings/users",
      },
      {
        title: "Roles",
        route: "/dashboard/settings/roles",
      },
    ],
  },
  {
    id: 4,
    title: "Orders",
    route: "/orders",
    child: null,
  },
];

export default sidebarData;
