import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import axios from "axios";
import { useState } from "react";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const AiPage = () => {


  const [question,setQuestion] = useState("");
  const [answer,setAnswer] = useState("");

  async function generateContent() { 
  
  // try to set a better loader
  setAnswer("loading...");
  try {
  const response = await axios({
    url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    method: "post",
    data:{
    "contents": [
      {
        "parts": [
          {
            "text": question
          }
        ]
      }
    ]
  }
  })

  // console.log(response)
  // setAnswer(response['data']['candidates']['0']['content']['parts']['0']['text']);

  setAnswer(response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response");
    } catch (error) {
      console.error(error);
      setAnswer("An error occurred while generating the response.");
    }

}

  
  return (
    
     <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto ">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Chat with AI</h2>
      </div>
      <div className="flex flex-col gap-4 items-center ">
      <textarea value={question}
       onChange={(e) => setQuestion(e.target.value)} 
       className="textarea textarea-accent resize-none w-full max-w-3xl px-6" 
       placeholder="Ask Me anything..."/>
      <button className="btn bg-primary mb-3 hover:shadow-lg hover:bg-secondary transition-all duration-300 text-base-100" onClick={generateContent}>Generate Answer</button>
      
        {answer && (
          <div className="mt-8 bg-primary text-base-100 rounded-2xl shadow-md p-6 max-w-5xl mx-auto overflow-auto prose max-h-[70vh]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {answer}
            </ReactMarkdown>
          </div>
        )}
        </div>

    </div>
  )
}


  
export default AiPage
