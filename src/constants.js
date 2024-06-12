//avatar
import {
  defaultAvatar,

  DungeonsAriseSevenSeas,
  valkyrien,
  GnumusSettlement,
  DragonWyrms,
} from '../asset'

export const navLinks = [
    {
      id: 0,
      title: "当前世界",
    },
    {
      id: 1,
      title: "使用mod",
    },
    {
      id: 2,
      title: "日记",
    },
    {
      id: 3,
      title: "参与人员",
    },
];

export const people = [
  {
    id: 0,
    name: "药糖",
    role: "摸鱼大师",
    avatar: defaultAvatar,
  },
  {
    id: 1,
    name: "老道",
    role: "探险家",
    avatar: defaultAvatar,
  },
  {
    id: 2,
    name: "kouta",
    role: "建筑师, 矿工",
    avatar: defaultAvatar,
  },
  {
    id: 3,
    name: "洁柔德",
    role: "猎人",
    avatar: defaultAvatar,
  },
  {
    id: 4,
    name: "小雪",
    role: "炼金师",
    avatar: defaultAvatar,
  },
  {
    id: 5,
    name: "神秘人 - 无名",
    role: "神秘人",
    avatar: defaultAvatar,
  },
];

export const adventureList = [
    {
        id: 1,
        title: "最初的冒险",
        difficulty: 0.5,
        worldname: "初始世界",
        description: "在这片大陆上，迎来了我们的冒险旅程。我们将在这片广袤的土地上，收集珍贵的资源，利用智慧和力量，逐步建立起一个宏伟的飞船。我们的目标不仅仅是征服这片土地，而是飞向无尽的星空，探索未知的世界。我们将用无畏的勇气和坚定的信念，开创属于我们的史诗篇章，乘风破浪，遨游四海，踏上光辉的征途。每一步都将铭刻在历史的长河中，成为永恒的传奇。我们的目标，是星辰大海！",
        lastUpdate: "2024年六月十二日",
        version: "1.19.2",
        mods:[
            {
              id: 1,
              name: "海上船只生成",
              orginalName : "Dungeons Arise Seven Seas",
              version: "1.0.2",
              install: "forge",
              type: "地形生成类",
              href: 'https://www.curseforge.com/minecraft/mc-mods/when-dungeons-arise-seven-seas/files/all?page=1&pageSize=20',
              description: "这个mod可以让海上生成更多的船只，每只船都有各种不同的敌人守护着，让冒险更加精彩。",
              img: [
                DungeonsAriseSevenSeas,
              ],
            },
            {
                id: 2,
                name: "瓦尔基里模组",
                orginalName : "valkyrien skies",
                version: "119-2.1.2-beta1",
                install: "forge",
                description: "我们的主题mod，这个mod可以让你建造飞船，飞向无尽的星空，探索未知的世界。",
                href: 'https://www.curseforge.com/minecraft/mc-mods/valkyrien-skies',
                img: [
                  valkyrien,
                ],
            },
            {
                id: 3,
                name: "角魔一族",
                orginalName : "Gnumus settlement",
                version: "1.8",
                install: "forge",
                description: "这个mod可以让你在游戏中遇到一个新的种族，他们有自己的文化和建筑，你可以和他们交易，也可以和他们战斗。",
                href: 'https://www.curseforge.com/minecraft/mc-mods/gnumus-settlement',
                img:[
                  GnumusSettlement,
                ],
            },
            {
                id: 4,
                name: "末影龙的崽",
                orginalName : "Realm RPG: Dragon Wyrms",
                version: "1.0.1",
                install: "forge",
                description: "这个mod会生成两种小型末影龙",
                href : "https://www.curseforge.com/minecraft/mc-mods/realm-rpg-dragon-wyrms",
                img:[
                  DragonWyrms,
                ],
            },
            
        ]
    }
]

