import { Provider } from "@nestjs/common";
import { CreateTaskHandler } from "./create/create-task.handler";

export const withTaskHandlerProvider: Provider[] = [
	CreateTaskHandler
];
