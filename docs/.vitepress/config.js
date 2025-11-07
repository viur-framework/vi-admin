import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Viur Administration",
  description: "The administration interface for Viur 3 systems",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
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


    sidebar:{
      "/admininfo/":[
        {
          text:"AdminInfo",
          items:[
            {text:"Overview", link:"/admininfo/"},
            {text:"CustomActions",link:"/admininfo/custom-actions"}
          ]
        }
      ]
    },
    aside:false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
