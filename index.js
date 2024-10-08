import OpenAI from "openai";

const openai = new OpenAI();

// Create a prompt that generates questions for a job interview
// Ask for 3 interview questions for a JavaScript Developer
// Extra Credit: Make this a template to make this dynamic for any kind of developer

async function getJobInterviewQuestions(language) {
    const stream = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You are a technical lead interviewing a candidate for a software developer job.`
            },
            {
                role: "user",
                content: `Ask 3 technical questions specific to the programming language ${language}.`
            }
        ],
        model: "gpt-3.5-turbo",
        stream: true
    });
    for await (const chunk of stream) {
        process.stdout.write(
            chunk.choices[0].delta.content || ""
        );
    }
}

getJobInterviewQuestions("TypeScript");

