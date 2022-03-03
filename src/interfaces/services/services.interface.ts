
export interface IFServices {
    name: "string";
    externalService: IFExternalService;
}

export interface IFExternalService {
    url: "string";
    method: "string";
    headers: IFHeaders;
    params: any;
    dependenciesToInjectParams: any;
}

export interface IFHeaders {
    "Content-Type": "string";
}
