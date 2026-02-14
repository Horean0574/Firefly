import type { MomentItem, MomentsLoadResult, MemosConfig } from "../types/config";
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
