export interface RefCurrencyEntity {
    Id: number;
    Code?: string;
    LeterCode?: string;
    Name: string;
    IsDeleted?: number;
    NeedUpdate?: boolean;
    Update?: string;
    IS_USE_IN_BPC?: boolean;
    IS_USE_IN_CO?: boolean;
    OrderNumber?: number;
}