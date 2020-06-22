export interface ForeCast {
    city:CityDetail;
    list: ForecatList[];
    [propName: string]: any;
}
export interface CityDetail{
    name: string;
    id: number;
    [propName: string]: any;
}

export interface ForecatList {
    dt_txt:string;
    weather: any;
    wind:{speed: number, deg: number};
    [propName: string]:any;
}