import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcast-controller"
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

const server = http.createServer(
    async(req: http.IncomingMessage, resp: http.ServerResponse)=>{

        const baseUrl = req.url?.split("?")[0];


        if (req.method === HttpMethods.GET && baseUrl === Routes.EPISODES){
            await getFilterEpisodes(req, resp)
        }
        if (req.method === HttpMethods.GET && baseUrl === Routes.List){
            await getListEpisodes(req, resp)
        }

});

const port = process.env.PORT;

server.listen(port,()=>{
    console.log(`Servidor iniciado na porta ${port}!`)
})