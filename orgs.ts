import type { Feature } from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'

interface MyWorks {
  // index string , value Feature
  [index: string]: Feature[]
}

const works: MyWorks = {
  'OI OJ': [{

    title: 'Think Spirit',
    details: '算法竞赛',
    link: 'https://nuistcpc.club/',
  },
  ],
  '学生组织': [
    {
      title: '大学生科学技术协会',
      details: '竞赛、技术、学术、创新、科普。',
      link: 'https://nuist-sast.github.io/',
      // icon: { src: 'https://cdn.jsdelivr.net/gh/alist-org/logo@main/logo.svg', height: '15px' },
    },
  ],
  '社团': [
    {
      title: 'DH 互联网工作室',
      details: '开发、科研、创业',
      link: 'https://www.duohuo.org.cn',
    },
    {

      title: 'NUIST - CEEE',
      details: '电子设计、电子竞赛、电子创新',
    },
    {
      title: 'IT 协会',
      details: '网络安全',
    },

  ],

}

export default works
