import { Services } from "../models/service.model";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Services)
export class ServicesRepository extends Repository<Services> {
    async getServiceByName(name: string) {
        return await this.findOne({ where: { name } })
    }
    async getAllServices() {
        return await this.find({});
    }
    async getNamesServices() {
        return await this.findAndCount({ select: ["name"] });
    }
    async getDependenciesByService(name: string) {
        return await this.findOne({ select: ["name", "externalService"], where: { name } })
    }

}