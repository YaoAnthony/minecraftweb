//avatar
import {
  week1,

  defaultAvatar,

  DungeonsAriseSevenSeas,
  valkyrien,
  GnumusSettlement,
  DragonWyrms,
  UsefulSpyglass,
  usefulspyglass_screenshot,
  GraveStone,
  screenshot_viewer,
  screenshot_viewer_shot,
  valkyrien2,
  Yung1,
  BetterStrongholds,
  Yung2,
  betterDungeons,
  what_the_geck,
  Yung3,
  YungsBetterOceanMonuments,
  YungsBetterNetherFortresses,
  Yung4,
  Nyf_spiders,
  Nyf_spiders_gif,
  Monsters,
  aircraft,
  physics,
} from '../asset'

export const MainPageNavLinks = [
  {
    id: 0,
    to : '/minecraftweb/#active-adv',
    title: "首页",
  },
  {
    id: 1,
    to : '/minecraftweb/#activeDetail',
    title: "活动",
  },
  {
    id: 2,
    to : '/minecraftweb/#modlist',
    title: "mod",
  },
  {
    id: 3,
    to : '/minecraftweb/#member',
    title: "成员",
  },
]

export const navLinks = [
    {
      url : '/',
      title: "世界介绍",
    },
    {
      url : '/minecraftweb/journal',
      title: "我们的航海日记",
    },
];

export const members = [
  {
    id: 0,
    name: "药糖",
    role: "摸鱼大师",
    avatar: defaultAvatar,
    signature : "冲鸭！",
  },
  {
    id: 1,
    name: "老道",
    role: "探险家",
    avatar: defaultAvatar,
    signature : "赛卢医出场：\n行医有斟酌，\n下药依本草；\n死的医不活；\n活的医死了。\n自家姓卢，人道我一手好医，都叫做赛卢医。",
  },
  {
    id: 2,
    name: "kouta",
    role: "建筑师, 矿工",
    avatar: defaultAvatar,
    signature : "我是kouta，我是一个矿工，我喜欢挖矿，我喜欢建筑，我喜欢研究各种mod，我喜欢探险，我喜欢和朋友一起玩游戏。",
  },
  {
    id: 3,
    name: "洁柔德",
    role: "猎人",
    avatar: defaultAvatar,
    signature : "我是洁柔德，我是一个猎人，我喜欢打怪，我喜欢狩猎，我喜欢探险，我喜欢和朋友一起玩游戏。",
  },
  {
    id: 4,
    name: "小雪",
    role: "炼金师",
    avatar: defaultAvatar,
    signature : "我是小雪，我是一个炼金师，我喜欢研究各种药水，我喜欢研究各种魔法，我喜欢探险，我喜欢和朋友一起玩游戏。",
  },
  {
    id: 5,
    name: "神秘人 - 无名",
    role: "神秘人",
    avatar: defaultAvatar,
    signature : "我是神秘人，我是一个神秘人，我喜欢神秘，我喜欢探险，我喜欢和朋友一起玩游戏。",
  },
];

export const timelineElements = [
  {
      id: 1,
      title: '航海日记 - 其一',
      description: '我们出生在辽阔的海边，听着海风海鸥的呼唤，我们开始了我们的冒险之旅。我们今天尝试最勇敢的事情便是去征服远处的一艘船，但没想到船上充满了卫道士。\n很快我们便被打的落花流水。不得已我们向东部举家迁移，最后在一个村庄落户。',
      date: '2023-06-10',
      img: [
        week1,
      ]
  },
  {
      id: 2,
      title: '航海日记 - 其二',
      description: '我们很快在这里安了家，这里的村民都不知道去哪了。\n仅剩的村民什么也不敢说，没办法，为了保护他，变将他关在了他的房子里。\n我们在这里建立了我们的第一个基地，造起了农田和牧场，希望有朝一日我们能在这里建出飞船，飞向宇宙。',
      date: '2023-06-10',
      img: []
  },
  // Add more events here
];

export const adventureList = [
    {
        id: 1,
        title: "最初的冒险",
        difficulty: 1,
        worldname: "初始世界",
        description: "在这片大陆上，迎来了我们的冒险旅程。我们将在这片广袤的土地上，收集珍贵的资源，利用智慧和力量，逐步建立起一个宏伟的飞船。我们的目标不仅仅是征服这片土地，而是飞向无尽的星空，探索未知的世界。我们将用无畏的勇气和坚定的信念，开创属于我们的史诗篇章，乘风破浪，遨游四海，踏上光辉的征途。每一步都将铭刻在历史的长河中，成为永恒的传奇。我们的目标，是星辰大海！",
        lastUpdate: "2024年六月十二日",
        version: "1.19.2",
        mods:[
            
            {
                id: 1,
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
                id: 2,
                name: "尤里卡船舵！",
                orginalName : "Eureka! Ships! for Valkyrien Skies",
                version: "1.5.1",
                install: "forge",
                description: "这个mod是瓦尔基里的扩充包，使得玩家可以家住瓦尔基里的模组创建船舵，用于控制整个飞船。",
                href : "https://www.curseforge.com/minecraft/mc-mods/eureka-ships",
                img:[
                  valkyrien2,
                ],
            },
            {
              id: 3,
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
                id: 4,
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
                id: 5,
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
            {
                id: 6,
                name: "有用的望远镜",
                orginalName : "Useful Spyglass",
                version: "0.4.0",
                install: "forge",
                description: "这个mod可以让望远镜更有用，现在可以使用望远镜看到怪物的血量",
                href : "https://www.curseforge.com/minecraft/mc-mods/useful-spyglass",
                img:[
                  UsefulSpyglass,
                  usefulspyglass_screenshot,
                ],
            },
            {
                id: 7,
                name: "墓碑",
                orginalName : "gravestone",
                version: "0.4.0",
                install: "forge",
                description: "现在死亡后会掉落墓碑，复活会获得一个死亡笔记，上面会记录你死亡时的信息。包括死亡时间，死亡地点，掉落物品等等。",
                href : "https://www.curseforge.com/minecraft/mc-mods/gravestone-mod",
                img:[
                  GraveStone,
                ],
            },
            {
                id: 8,
                name: "截图查看",
                orginalName : "screenshot viewer",
                version: "0.4.0",
                install: "forge",
                description: "这个mod会让你在Esc中的菜单可以查看你的截图，并且做了很多优化。",
                href : "https://www.curseforge.com/minecraft/mc-mods/screenshot-viewer",
                img:[
                  screenshot_viewer,
                  screenshot_viewer_shot
                ],
            },
            {
                id: 9,
                name: "更多的壁虎",
                orginalName : "what the geck!",
                version: "0.4.0",
                install: "forge",
                description: "添加了10+种不同的壁虎，大鲵，洞螈，中国大鲵等... 注意他们会攻击村民哦！",
                href : "https://www.curseforge.com/minecraft/mc-mods/what-the-gecko",
                img:[
                  what_the_geck,
                ],
            },
            {
                id: 10,
                name: "更好的要塞",
                orginalName : "YUNG's Better Strongholds",
                version: "3.2.0",
                install: "forge",
                description: "Yung系列的地形优化模组。这个mod让要塞的设计变得更加有意思，增加了很多新的房间可供探索。",
                href : "https://www.curseforge.com/minecraft/mc-mods/yungs-better-strongholds",
                img:[
                  Yung1,
                  BetterStrongholds,
                ],
            },
            {
                id: 11,
                name: "更好的地牢",
                orginalName : "YUNG's Better Dungeons ",
                version: "3.2.0",
                install: "forge",
                description: "Yung系列的地形优化模组。这个mod让地牢的设计变得更加有意思，增加了很多新的地牢类型。",
                href : "https://www.curseforge.com/minecraft/mc-mods/yungs-better-dungeons",
                img:[
                  Yung2,
                  betterDungeons,
                ],
            },
            {
                id: 12,
                name: "更好的海洋宫殿",
                orginalName : "YUNG's Better Ocean Monuments ",
                version: "2.1.1",
                install: "forge",
                description: "Yung系列的地形优化模组。这个mod让海洋宫殿的设计变得更加有意思，增加了很多新的地牢类型。",
                href : "https://www.curseforge.com/minecraft/mc-mods/yungs-better-ocean-monuments",
                img:[
                  Yung3,
                  YungsBetterOceanMonuments,
                ],
            },
            {
                id: 13,
                name: "更好的下界堡垒",
                orginalName : "YUNG's Better Nether Fortresses",
                version: "2.1.1",
                install: "forge",
                description: "Yung系列的地形优化模组。这个mod让下界堡垒的设计变得更加有意思，增加了很多新的下界堡垒类型。",
                href : "https://www.curseforge.com/minecraft/mc-mods/yungs-better-ocean-monuments",
                img:[
                  Yung4,
                  YungsBetterNetherFortresses,
                ],
            },
            {
                id: 14,
                name: "Nyf蜘蛛强化",
                orginalName : "Nyf's Spiders",
                version: "2.0",
                install: "forge",
                description: "原版蜘蛛还不够吓人吗？你希望蜘蛛 真的能正常攀爬吗？！蜘蛛 2.0 使普通蜘蛛和洞穴蜘蛛能够沿着墙壁和天花板行走，并且还改进了它们的 AI，使它们能够绕过几乎任何障碍物。",
                href : "https://www.curseforge.com/minecraft/mc-mods/yungs-better-ocean-monuments",
                img:[
                  Nyf_spiders,
                  Nyf_spiders_gif,
                ],
            },
            {
                id: 15,
                name: "僵尸突变",
                orginalName : "Mutant Monsters",
                version: "4.0.6",
                install: "forge",
                description: "发现各种突变僵尸,骷髅弓箭手",
                href : "https://www.curseforge.com/minecraft/mc-mods/mutant-monsters",
                img:[
                  Monsters,
                ],
            },
            {
                id: 16,
                name: "空中载具",
                orginalName : "Immersive Aircraft",
                version: "0.7.9",
                install: "forge",
                description: "这个mod可以让你制造一些简陋的飞行器，用于大家一起在空中旅行",
                href : "https://www.curseforge.com/minecraft/mc-mods/immersive-aircraft",
                img:[
                  aircraft
                ],
            },
            {
                id: 17,
                name: "真正的物理",
                orginalName : "Physics",
                version: "153",
                install: "forge",
                description: "我们的世界不知为何，多了很多匪夷所思的物理现象，比如重力，空气阻力，摩擦力等等。没错，这个mod可以让你体验到这些物理现象。",
                href : "https://minecraftphysicsmod.com/",
                img:[
                  physics,
                ],
            },
            
        ]
    }
]

