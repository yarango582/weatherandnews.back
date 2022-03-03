import {
    Get,
    JsonController,
    QueryParam,
    HttpError,
    Post,
    Body,
    UseBefore
} from "routing-controllers";
import { ExternalServices } from "../services/externalServices.service";
import { executeExternalServiceValidator } from "../validators/externalServices/executeExternalServiceValidator.validator";

@JsonController("/v1/services")
class ServicesController {

    constructor(protected readonly externalServices: ExternalServices) { }

    @Post("/executeService")
    async getServiceByName(
        @Body() body: executeExternalServiceValidator
    ) {
        if(body.nameService && body.dependency) {
            const service: any = await this.externalServices.getExternalServiceByName(body.nameService);
            const response = await this.externalServices.executeExternalService(service, body);
            return {
                ...response
            }
        }
        return new HttpError(400, "Datos incompletos!");
    }

    @Get("/dependencies")
    async getDependencies(
        @QueryParam("serviceName") queryParam?: string
    ) {
        if (!queryParam) {
            return new HttpError(400, "Datos incompletos!");
        }
        const data = await this.externalServices.getDependenciesByService(queryParam);
        return {
            data
        }
    }
}

export default ServicesController;