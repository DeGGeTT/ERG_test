import { RefCurrencyEntity } from "./refCurrencyEntity";
import { SpecificationsEntity } from "./specificationsEntity";

export class SpecifOneViewModel {
    SpecifId?: number;
    SpecifStatus?: number;
    formedStatus?: boolean;
    FormedStatus?: boolean;
    isMail?: boolean;
    isWeCreateAuctionFromBurse?: boolean;
    SpOrAu?: string;
    IsCopying?: number;
    BusyContent?: string;
    SpecifOneViewModelCommands?: any;
    RegulationMethods?: any[];
    RootAuction?: any;
    SpecificationNumberDisplay?: string;
    ParentSpecificationNumber?: string;
    Specif: SpecificationsEntity = {};
    SpecifExecTxt?: string;
    RefCurrencies: RefCurrencyEntity[] = [];
    ForAnnons: boolean = false
    IsGPZControlsVisible?: boolean
    GoodsPercent?: boolean
    BlShowInternalFields: boolean = true;
    IsFrameAgreement?: boolean;
}