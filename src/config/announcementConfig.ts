import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content: "本博客已搭建「片刻」页面，这里记录了我的各种突发奇想，欢迎前来访问！",

	// 是否允许用户关闭公告
	closable: false,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "前往「片刻」",
		// 链接 URL
		url: "/moments/",
		// 内部链接
		external: false,
	},
};
