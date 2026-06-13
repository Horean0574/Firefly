// 片刻配置
export type MomentItem = {
    name: string;
    content: string;
    created: string;
};

export type MomentsLoadResult = {
    items: MomentItem[],
    nextToken: string,
};

export type MemosConfig = {
    host: string;
    pageLimit: number;
};
