import type { MomentItem, MomentsLoadResult, MemosConfig } from "../types/config";
import { profileConfig } from "@/config";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

export const memosConfig: MemosConfig = {
    host: "memos.hxrch.top",
    pageLimit: 10,
};

export const dayjsInit = (): void => {
    dayjs.extend(relativeTime);
    dayjs.locale("zh-cn");
};

const fetchMoments = async (API_URL: string): Promise<MomentsLoadResult> => {
    const items: MomentItem[] = [];
    try {
        const resp = await fetch(API_URL);
        if (!resp.ok) return { items: [], nextToken: "" };
        const data = await resp.json();
        data.memos.forEach((mem: any): void => {
            items.push({
                content: mem.content,
                created: dayjs(mem.createTime).fromNow(),
            });
        });
        return { items: items, nextToken: data.nextPageToken };
    } catch {
        return { items: [], nextToken: "" };
    }
};

export const getMoments = async (): Promise<MomentsLoadResult> => {
    return fetchMoments(`https://${memosConfig.host}/api/v1/memos?pageSize=${memosConfig.pageLimit}`);
};

export const loadMoreMoments = async (token: string): Promise<MomentsLoadResult> => {
    return fetchMoments(`https://${memosConfig.host}/api/v1/memos?pageSize=${memosConfig.pageLimit}&pageToken=${token}`);
};

export const getMomentsHTML = (items: MomentItem[]): string => {
    return items.map((item: MomentItem) => {
        return `<hr class="my-6 border-dashed" style="border-color: var(--line-divider);">
                        <div class="flex gap-2.5">
                            <img src=${profileConfig.avatar} alt="🍃" class="w-8 h-8 rounded">
                            <section>
                                <p class="text-sm text-gray-800">${profileConfig.name}</p>
                                <p class="text-gray-500" style="font-size: 10px;">${item.created}</p>
                                <p class="mt-2.5 text-gray-700">${item.content}</p>
                            </section>
                        </div>`;
    }).join("");
};

export const getLoadMoreBtnHTML = (token: string): string => {
    return token === ""
        ? `<p class="text-gray-400" style="font-size: 12px;">---------------&nbsp;已经到底了哦&nbsp;---------------</p>`
        : `<button id="load-more-btn" class="inline-block h-10 px-6 py-2 border-none rounded-lg text-sm text-center text-(--btn-content) bg-(--btn-regular-bg)
            hover:scale-105 hover:bg-(--btn-regular-bg-hover) active:bg-(--btn-regular-bg-active) active:scale-95 transition-all duration-300"
                style="box-shadow: 0 1px 2px #0000000d;">
                加载更多……
            </button>`;
};
