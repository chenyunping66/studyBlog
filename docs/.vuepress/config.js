module.exports = {
  title: 'melody的个人博客', //  标题
  description: '好好学习天天向上 melody的个人博客', // 描述
  themeConfig: { // 顶部导航
    nav: [{
        text: '指南',
        link: '/'
      }, // 指向 guide 文件夹
      {
        text: '数据结构与算法',
        // link: '/arithmetic/',
        items: [{
            text: 'github',
            link: 'https://github.com/chenyunping66'
          } // 外部链接
        ]
      },
      {
        text: 'React学习',
        items: [{
            text: '笔记',
            link: '/guid/react/'
          }, // 以 '/'结束，默认指向REMADE.md
          {
            text: 'github',
            link: 'https://github.com/chenyunping66'
          } // 外部链接
        ]
      },
      {
        text: 'Vue学习笔记',
        items: [{
            text: '笔记',
            link: '/guid/vue/test01.md'
          }, // 以 '/'结束，默认指向REMADE.md
          {
            text: 'github',
            link: 'https://github.com/chenyunping66'
          } // 外部链接
        ]
      },
    ]
  },

  sidebar: { // 侧边导航
    // '/guid/arithmetic/': [ // 对应顶部导航
    //   ['', 'README'],
    //   ['one', '栈,队列,链表'] // 分别对应 文件名 和 侧边文字
    // ],
    '/guid/ts/': [ // 对应顶部导航
      {
        title: 'TypeScript学习',
        collapsable: false,
        // children:['test01','test02',]
        children: [{
            title: '泛型',
            path: '/guid/ts/test01'
          },
          {
            title: '接口',
            path: '/guid/ts/test02'
          },
        ]
      }
    ],
    '/guid/vue/': [ // 对应顶部导航
      {
        title: 'vue学习',
        collapsable: true,
        // children:['test01','test02',]
        children: [{
            title: '第一节',
            path: '/guid/vue/test01'
          },
          {
            title: '第二节',
            path: '/guid/vue/test02'
          },
        ]
      }
    ],
    // '/':['']   //不能放在数组第一个，否则会导致右侧栏无法使用 
  }
}