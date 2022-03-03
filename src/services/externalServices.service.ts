import { ServicesRepository } from "../repositories/services.repository";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Services } from "../models/service.model";
import { ApiCore } from "../core/api.core";

@Service()
export class ExternalServices {
    private readonly apiCore: ApiCore;
    constructor(@InjectRepository() private servicesRepository: ServicesRepository) {
        this.apiCore = new ApiCore();
    }
    async getDependenciesByService(name: string) {
        return this.servicesRepository.getDependenciesByService(name)
            .then((dependencies) => {
                return {
                    name: dependencies?.name,
                    dependencies: dependencies
                        ?.externalService.dependenciesToInjectParams,
                }
            })
            .catch((err) => {
                return "No se logro encontrar dependencias para el servicio";
            });
    }
    async getExternalServiceByName(name: string) {
        return this.servicesRepository.getServiceByName(name)
            .then((dependencies) => dependencies)
            .catch((err) => {
                return "No se logro encontrar dependencias para el servicio";
            });
    }
    async executeExternalService(service: Services, body: any) {
        return this.apiCore.executeExternalService(service, body)
            .then((response) => response)
            .catch((err) => {
                return "Ocurrio un error al ejecutar el servicio remoto";
            });
    }
}