
import fs from "fs";
import path from "path";



export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const filePath = path.resolve("public/manifest.webmanifest.json");
    const data = fs.readFileSync('public/manifest.webmanifest.json');
    const value = JSON.parse(data.toString());
    value["name"] = body["name"]
    value["short_name"] = body["short_name"]
    value["url"] = body["url"]
    value["descriptions"] = body["descriptions"]
    value["url_handlers"][0]["origin"] = body["url"];




    value["icons"][0]["src"] = body["icons"]["192"]
    value["icons"][1]["src"] = body["icons"]["256"]
    value["icons"][2]["src"] = body["icons"]["384"]
    value["icons"][3]["src"] = body["icons"]["512"]


    fs.writeFileSync(filePath, JSON.stringify(value, null, 2));

    return value

})