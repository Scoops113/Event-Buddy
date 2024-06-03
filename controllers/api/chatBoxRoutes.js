const router = require('express').Router();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

// Function to get a response from OpenAI's GPT-3.5 model
async function getResponse(prompt) {
    try {
        // Send a request to the chat completion endpoint
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo", // Changed model name
          messages: [{ role: "user", content: prompt }],
      });

        // // Log the entire response for debugging
        // console.log("API Response:", response);

        // Extract and return the response content
        if (response.choices && response.choices.length > 0) {
            const reply = response.choices[0].message.content;
            return reply;
        } else {
            console.error("No choices found in the response");
            return "Sorry, I couldn't generate a response.";
        }
    } catch (error) {
        console.error("Error:", error);
        return "Sorry, there was an error processing your request.";
    }
}

  
router.post('/', async (req, res) => {
  const { prompt } = req.body;

  try {
      const reply = await getResponse(prompt); // Await the getResponse function
      res.status(200).json({ reply }); // Return the reply in a JSON object
  } catch (err) {
  console.log(err)
  res.status(400).json(err);
  }
});
  
  
module.exports = router;
