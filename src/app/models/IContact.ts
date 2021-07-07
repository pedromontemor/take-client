export interface IContact {
    id: string;
    shortName: string;
    name: string;
    description: string;
    image: string;
    template: string;
    created: Date;
    updated: Date;
    plan: string;
    culture: string;
    analytics: IContactAnalytics;
    favorite: Boolean;
}

export interface IContactAnalytics {
    user: IContactUserAnalytics;
    message: IContactMessageAnalytics;
}

export interface IContactUserAnalytics {
    total: number;
    actived: number;
}

export interface IContactMessageAnalytics {
    received: number;
    sent: number;
}