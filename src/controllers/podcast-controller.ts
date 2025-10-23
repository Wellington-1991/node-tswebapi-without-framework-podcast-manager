import { IncomingMessage, ServerResponse } from "http"
import { severceListEpisodes } from "../services/list-episodes-service"
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { IPodcastTransferModelDTO } from "../models/filter-transfer-modelDTO";

const DEFAULT_CONTENT = { "content-type": ContentType.JSON };

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

    const content = await severceListEpisodes();

    response.writeHead(StatusCode.OK, DEFAULT_CONTENT);
    response.write(JSON.stringify(content.body))
    response.end();
}

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

    const content: IPodcastTransferModelDTO = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, DEFAULT_CONTENT);
    response.write(JSON.stringify(content.body))
    response.end();
}