import dotenv from 'dotenv'
import venom from 'venom-bot'
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config()
console.log(process.env.GEMINIM_API_KEY)
const stageChat = {stage: 0}
const genAI = new GoogleGenerativeAI(process.env.GEMINIM_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

venom.create({
    session: "alpha"
}).then(client => start(client))
.catch(err => console.error(err))

const start = (client) => {
    client.onMessage(async (message) => {
        if(message.body == "oi"){
            client.sendText(message.from, "Olá\nMe faça uma pergunta 🧙‍♂️")
            stageChat.stage = 1
        }
        if(message.body && stageChat.stage == 1){
            const results = await model.generateContent(message.body)
            const response = await results.response
            const text = response.text()
            client.sendText(message.from, text)
        }
    })
}
