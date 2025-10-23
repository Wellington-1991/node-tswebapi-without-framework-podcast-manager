import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repository/podCasts.json")

export const repositoryPodcast = async (
    podcastName?: string
) => {
    const language = "utf-8";

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if (podcastName) {
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.podcastName === podcastName
        )
    }
    return jsonFile;
}