import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
    // 页面标题，如果留空则使用 i18n 中的翻译
    title: "",

    // 页面描述文本，如果留空则使用 i18n 中的翻译
    description: "",

    // 是否显示底部自定义内容（friends.mdx 中的内容）
    showCustomContent: true,

    // 是否显示评论区，需要先在commentConfig.ts启用评论系统
    showComment: true,

    // 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
    randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
    {
        title: "夏夜流萤",
        imgurl:
            "https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
        desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
        siteurl: "https://blog.cuteleaf.cn",
        tags: ["博客"],
        weight: 10, // 权重，数字越大排序越靠前
        enabled: true, // 是否启用
    },
    {
        title: "Firefly Docs",
        imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
        desc: "Firefly主题模板文档",
        siteurl: "https://docs-firefly.cuteleaf.cn",
        tags: ["文档"],
        weight: 10,
        enabled: true,
    },
    {
        title: "Astro",
        imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
        desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
        siteurl: "https://github.com/withastro/astro",
        tags: ["框架"],
        weight: 10,
        enabled: true,
    },
    {
        title: "开往 | 友链接力",
        imgurl: "https://img.hxrch.top/travellings_favicon.webp",
        desc: "让传统友链“活跃”，让网页相互接力，让流量相互流动，让网络开放起来",
        siteurl: "https://www.travellings.cn",
        tags: ["博客收录"],
        weight: 9,
        enabled: true,
    },
    {
        title: "博客圈",
        imgurl: "https://bokequan.cn/wp-content/uploads/2026/03/1772941033-%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20210914170513.png",
        desc: "致力于个人独立博客",
        siteurl: "https://bokequan.cn",
        tags: ["博客收录"],
        weight: 9,
        enabled: true,
    },
    {
        title: "个站商店",
        imgurl: "https://upload.storeweb.cn/image/logo.png",
        desc: "一个精致的，带社交元素的个人网站发布平台，博客收录网站",
        siteurl: "https://storeweb.cn",
        tags: ["博客收录"],
        weight: 9,
        enabled: true,
    },
    {
        title: "小改学习志",
        imgurl: "https://cn.cravatar.com/avatar/14e584196d31262ea144ab4d75d4c083?s=450&r=g",
        desc: "从此刻开始，什么都不晚。",
        siteurl: "https://www.haoyu233.com",
        tags: ["博客"],
        weight: 1,
        enabled: true,
    },
    {
        title: "路明笔记",
        imgurl: "https://cn.cravatar.com/avatar/302380667bdaf4e1390800e62494d4af?s=500&r=X",
        desc: "不慌张，不绝望，不狂妄，不投降。",
        siteurl: "https://luming.cool",
        tags: ["博客"],
        weight: 1,
        enabled: true,
    },
    {
        title: "我的技术成长笔记",
        imgurl: "https://blog.longdahuasheng.top/logo.jpg",
        desc: "零基础入门到进阶实战，记录每一步成长的思考。",
        siteurl: "https://blog.longdahuasheng.top",
        tags: ["博客"],
        weight: 1,
        enabled: true,
    },
    {
        title: "ZYBlog",
        imgurl: "https://blog.pljzy.top/_astro/logo.BxIxyJV1_Z19cEQW.webp",
        desc: "一个技术探索与分享的平台",
        siteurl: "https://blog.pljzy.top",
        tags: ["博客"],
        weight: 1,
        enabled: true,
    },
    {
        title: "SLHAF's blog",
        imgurl: "https://blog.slhaf.work/upload/favicon.png",
        desc: "SLHAF的个人博客",
        siteurl: "https://blog.slhaf.work",
        tags: ["博客"],
        weight: 1,
        enabled: true,
    },
    {
        title: "Anson",
        imgurl: "https://ansonq.com/src/tx.png",
        desc: "Anson国际导航页",
        siteurl: "https://ansonq.com",
        tags: ["导航"],
        weight: 1,
        enabled: true,
    },
    {
        title: "天码行空的小破站",
        imgurl: "https://bu.dusays.com/2026/02/05/6984096009670.jpeg",
        desc: "路漫漫其修远兮，吾将上下而求索",
        siteurl: "https://cs.gt.tc",
        tags: ["博客"],
        weight: 1,
        enabled: true,
    },
    {
        title: "默小班",
        imgurl: "https://wmimg.com/i/780/2025/07/68677fe53c2d1.png",
        desc: "一个初中生的小站点。",
        siteurl: "https://www.memxb.top",
        tags: ["博客"],
        weight: 1,
        enabled: true,
    },
    {
        title: "Ad_closeNN's Blog",
        imgurl: "https://adclosenn.top/assets/avatar.jpg",
        desc: "Ad_closeNN 的小站，时不时会刷新一些野生东西",
        siteurl: "https://adclosenn.top",
        tags: ["博客"],
        weight: 1,
        enabled: true,
    },
    {
        title: "Rownix's Blog",
        imgurl: "https://www.rownix.dev/favicon-96x96.png",
        desc: "慢即是快，快即是慢，致力于为大家提供最好的内容",
        siteurl: "https://www.rownix.dev",
        tags: ["博客"],
        weight: 1,
        enabled: true,
    },
    {
        title: "静かな森",
        imgurl: "https://avatars.githubusercontent.com/u/41265413?v=4",
        desc: "致虚极，守静笃。",
        siteurl: "https://innei.in",
        tags: ["博客"],
        weight: 1,
        enabled: true,
    },
    {
        title: "Ksable's 小屋",
        imgurl: "https://weavatar.com/avatar/abd826c253cc22fb954ec7567526f9a1211deb9905b8477c5b2875e20a2adb0b?s=500",
        desc: "身在无间，心在桃源",
        siteurl: "https://blog.ksable.top",
        tags: ["博客"],
        weight: 1,
        enabled: true,
    },
	{
		title: "洛元の小屋",
		imgurl: "https://blog.dimeta.top/upload/avatar.jpg",
		desc: "洛元の小屋，科技，游戏，生活为主的blog",
		siteurl: "https://blog.dimeta.top/",
		tags: ["博客"],
		weight: 1,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
    const friends = friendsConfig.filter((friend) => friend.enabled);

    if (friendsPageConfig.randomizeSort) {
        return friends.sort(() => Math.random() - 0.5);
    }

    return friends.sort((a, b) => b.weight - a.weight);
};
