import { IPodcastTransferModelDTO } from "../models/filter-transfer-modelDTO";
import { repositoryPodcast } from "../repository/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const severceListEpisodes = async (): Promise<IPodcastTransferModelDTO> => {

    let responseFormat: IPodcastTransferModelDTO = {
        statusCode: 0,
        body: []
    };

    const data = await repositoryPodcast();

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    };

    return responseFormat;
}