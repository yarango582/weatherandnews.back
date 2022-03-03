import { Axios, AxiosError, AxiosResponse } from "axios";
import { IFServices } from "../interfaces/services/services.interface";

export class ApiCore extends Axios {

    constructor() {
        super({});
    }
    async executeExternalService({ externalService }: IFServices, body: any) {
        const { fnCloud } = externalService.dependenciesToInjectParams;
        const dependencies = await this.executeFunctionFromCloud(fnCloud, body);
        const result = await this.request({
            method: externalService.method as any,
            url: externalService.url,
            headers: {
                ...externalService.headers
            },
            params: {
                ...dependencies,
                ...externalService.params
            },

        });
        return {
            ...JSON.parse(result.data),
            statusCode: result.status
        }
    }

    async executeFunctionFromCloud(cloudFnc: string, data: any) {
        const genericFnc = new Function("body", cloudFnc);
        const result = genericFnc(data);
        return result;
    }
}