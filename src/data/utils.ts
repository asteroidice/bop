export interface ISample {
    id: string;
    name?: string;
    url: string;
};

export function prependURls(samples: Record<string, ISample>, prefix: string) {
    Object.entries(samples).map(([key, sample]) => {
        const newURL = prefix + sample.url;
        samples[key] = {
            ...sample,
            url: newURL
        }
    })
}