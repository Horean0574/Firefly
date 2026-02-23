import type { MomentItem, MomentsLoadResult, MemosConfig } from "../types/config";
import { profileConfig } from "../config";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import weekday from "dayjs/plugin/weekday";
import "dayjs/locale/zh-cn";

export const memosConfig: MemosConfig = {
    host: "memos.hxrch.top",
    pageLimit: 10,
};

export const dayjsInit = (): void => {
    dayjs.extend(relativeTime);
    dayjs.extend(weekday);
    dayjs.locale("zh-cn");
};

function customCalendar(date: dayjs.Dayjs | string, referenceDay: dayjs.Dayjs | string = dayjs()) {
    const ref = dayjs(referenceDay);
    const target = dayjs(date);
    const diffHours = ref.diff(target, "hour");
    if (diffHours < 7) return target.from(ref);

    const specify = (prefix: string, dt: dayjs.Dayjs) => {
        return `${prefix} ${dt.format("H:mm")}`;
    };
    const diffDays = ref.startOf("day").diff(target.startOf("day"), "day");
    switch (diffDays) {
        case 0:
            return specify("今天", target);
        case 1:
            return specify("昨天", target);
        case 2:
            return specify("前天", target);
        case -1:
            return specify("明天", target);
        case -2:
            return specify("后天", target);
    }

    const thisMonday = ref.weekday(0);
    const thisSunday = ref.weekday(6);
    const lastSunday = thisMonday.subtract(1, "day");
    const nextMonday = thisSunday.add(1, "day");
    const beforeLastMonday = lastSunday.subtract(7, "day");
    const afterNextSunday = nextMonday.add(7, "day");
    const weekdayName = target.format("dd");
    if (target.isAfter(lastSunday, "day") && target.isBefore(nextMonday, "day")) {
        return specify(`周${weekdayName}`, target);
    } else if (target.isAfter(beforeLastMonday, "day") && target.isBefore(thisMonday, "day")) {
        return specify(`上周${weekdayName}`, target);
    } else if (target.isAfter(thisSunday, "day") && target.isBefore(afterNextSunday, "day")) {
        return specify(`下周${weekdayName}`, target);
    }

    if (target.year() === ref.year()) {
        return specify(target.format("M月D日"), target);
    }

    return specify(target.format("YYYY年M月D日"), target);
}

const fetchMoments = async (API_URL: string): Promise<MomentsLoadResult> => {
    const items: MomentItem[] = [];
    try {
        const resp = await fetch(API_URL);
        if (!resp.ok) return { items: [], nextToken: "" };
        const data = await resp.json();
        data.memos.forEach((mem: any): void => {
            items.push({
                name: mem.name,
                content: mem.content,
                created: customCalendar(mem.createTime),
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

export const getMomentsHTML = (items: MomentItem[], initial: boolean = true): string => {
    return items.map((item: MomentItem, i) => {
        const name = item.name.split("/")[1];
        return "<div>" + (i > 0 || !initial ? `<hr class="my-6 border-dashed" style="border-color: var(--line-divider);">` : ``)
            + `<div class="flex gap-3.5">
                <img src=${profileConfig.avatar} alt="🍃" class="w-10 h-10 rounded-md">
                <section>
                    <p class="font-bold text-base text-gray-950 dark:text-gray-50">${profileConfig.name}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">${item.created}</p>
                    <p class="custom-md mt-2.5 text-gray-900 dark:text-gray-100">${item.content}</p>
                </section>
            </div>
            <div class="mt-6 text-right">
                <button class="toggle-comments-btn inline-block h-7.5 px-3.5 py-0 border-(--line-divider) border-solid border rounded-lg
                    text-sm text-center text-(--btn-content) bg-transparent hover:border-(--primary)
                    hover:bg-(--btn-regular-bg-hover) active:bg-(--btn-regular-bg-active) transition-all duration-300"
                style="box-shadow: 0 1px 2px #0000000d;" data-name="${name}">
                    <svg width="1em" height="1em" viewBox="0 0 640 640" class="inline text-[0.825rem]" data-icon="fa7-solid:comment-dots">
                        <use href="#ai:fa7-solid:comment-dots"></use>
                    </svg>
                    <span class="align-middle text-[0.75rem]">评论</span>
                </button>
            </div>
            <div class="flex gap-2.5">
                <span class="inline-block w-8 h-8 opacity-0">Lorem ipsum.</span>
                <section class="mm-comments-wrapper" data-name="${name}"></section>
            </div>` + "</div>";
    }).join("");
};

export const getLoadMoreBtnHTML = (token: string): string => {
    return token === ""
        ? `<p class="text-gray-400 text-[0.75rem]">---------------&nbsp;已经到底了哦&nbsp;---------------</p>`
        : `<button id="load-more-btn" class="inline-block h-10 px-6 py-2 border-none rounded-lg text-sm text-center
                text-(--btn-content) bg-(--btn-regular-bg) hover:scale-105 hover:bg-(--btn-regular-bg-hover)
                active:bg-(--btn-regular-bg-active) active:scale-95 transition-all duration-300"
            style="box-shadow: 0 1px 2px #0000000d;">
                加载更多……
            </button>`;
};
