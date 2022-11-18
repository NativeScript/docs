export default [
  ...(process.env.NODE_ENV !== "production"
    ? [
        {
          text: "[DEV] Reference",
          link: "/dev-reference",
          activeMatch: "^/dev-reference",
          icon: "CodeBracketIcon",
        },
      ]
    : []),
  {
    text: "Docs",
    link: "/",
    activeMatch: "^/(?!plugins|best-practices|api|dev-reference)",
    icon: "AcademicCapIcon",
  },
  {
    text: "Preview",
    link: "//#",
    icon: "DevicePhoneMobileIcon",
  },
  {
    text: "Plugins",
    link: "//#",
    activeMatch: "^/plugins",
    icon: "CubeTransparentIcon",
  },
  {
    text: "Best Practices",
    link: "//#",
    activeMatch: "^/best-practices",
    icon: "CheckIcon",
  },
  {
    text: "Integrations",
    link: "//#",
    icon: "CpuChipIcon",
  },
  {
    text: "API Reference",
    link: "/api/",
    activeMatch: "^/api",
    icon: "CodeBracketIcon",
  },
];
