export interface FormInfo {
    dsInfo: Info;
    setDSInfo: (dsInfo:any)=>{};
}

export interface Info {
    id: number;
    name: string;
    age: number;
    gender: string;
    theme?: string;
    backstory?: string;
    photo: string;
    power: string;
    emoji?: string;
}