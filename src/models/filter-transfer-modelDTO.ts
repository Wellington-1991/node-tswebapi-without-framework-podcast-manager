import { PodcastModel } from "./podcast-model";

export interface IPodcastTransferModelDTO {
    statusCode: number;
    body: PodcastModel[];
}