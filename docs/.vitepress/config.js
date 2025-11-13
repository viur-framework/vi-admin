import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Viur Administration",
  description: "The administration interface for Viur 3 systems",
  base: "/vi-admin/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "AdminInfo", link: "/admininfo/" },
    ],

    /*sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],*/

    sidebar: {
      "/admininfo/": [
        {
          text: "AdminInfo",
          items: [
            { text: "Overview", link: "/admininfo/" },
            { text: "CustomActions", link: "/admininfo/custom-actions" },
            { text: "EditViews", link: "/admininfo/edit-views" },
            { text: "ActionGroups", link: "/admininfo/action-groups" },
            { text: "Treekinds", link: "/admininfo/treekinds" },
          ],
        },
      ],
    },
    aside: false,

    socialLinks: [{ icon: "github", link: "https://github.com/viur-framework/vi-admin" }],
  },
})
