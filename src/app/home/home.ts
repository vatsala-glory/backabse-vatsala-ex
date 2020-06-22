export interface CityList{
    id:number;
    name?: string;
}

export interface CityListResponse{
    cnt: number;
    list: List[];
    [propName: string]: any;
}

export interface List{
    id:number;
    name:string;
    main: Object;
    weather: any[];
    wind:{speed:number, deg: number};
    [propName: string]: any;

}