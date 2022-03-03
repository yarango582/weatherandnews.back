import { Container } from "typedi";
import { useContainer as typeOrmContainer } from "typeorm";
import { useContainer as routeContainer } from "routing-controllers";

routeContainer(Container);
typeOrmContainer(Container);
