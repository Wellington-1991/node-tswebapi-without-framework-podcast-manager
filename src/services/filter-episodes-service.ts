import { IPodcastTransferModelDTO } from "../models/filter-transfer-modelDTO";
import { repositoryPodcast } from "../repository/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<IPodcastTransferModelDTO> => {

    let reponseFormat: IPodcastTransferModelDTO = {
        statusCode: 0,
        body: []
    };

    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repositoryPodcast(queryString);

    reponseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    };

    return reponseFormat
}