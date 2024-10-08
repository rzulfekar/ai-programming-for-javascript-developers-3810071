import OpenAI from "openai";

const openai = new OpenAI();
console.log('running');
async function hello() {
    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a helpful assistant." }
        ],
        model: "gpt-3.5-turbo"
    });
    console.log(completion.choices[0]);
}

hello();    