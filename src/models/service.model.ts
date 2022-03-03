import { Transform } from "class-transformer";
import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectID, ObjectIdColumn } from "typeorm";
import { IFExternalService } from "../interfaces/services/services.interface";

@Entity({ name: "services" })
export class Services {
    @ObjectIdColumn({ name: "_id", type: "varchar" })
    @Transform((id: any) => id.toHexString(), { toPlainOnly: true })
    _id?: string;

    @Column({ nullable: false })
    name: "string";

    @Column({ nullable: false })
    externalService: IFExternalService;

    @CreateDateColumn({ type: "timestamp", nullable: false })
    createdAt?: Date;

    @UpdateDateColumn({ type: "timestamp", nullable: true })
    updatedAt?: Date;
}