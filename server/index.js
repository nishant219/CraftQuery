const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const {Client} = require("@notionhq/client");
const dotenv=require("dotenv");
dotenv.config();

const app=express();

app.use(
    cors({
      origin: ["http://localhost:5000", 'https://craft-query-server.vercel.app/', "https://craft-query-client.vercel.app/"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true,
    })
  );
app.use(bodyParser.json());

const notion=new Client({
    auth:process.env.NOTION_TOKEN,
});

const databaseId=process.env.NOTION_DATABASE_ID;


app.post("/add", async (req, res) => {
    const { name, email, subject, category, description, date, attachments, actionStatus } = req.body;

    // Convert category and actionStatus to arrays if they are not already arrays
    const categoryArray = Array.isArray(category) ? category : [category];
    const actionStatusArray = Array.isArray(actionStatus) ? actionStatus : [actionStatus];

    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                Name: { title: [{ text: { content: name } }] },
                Email: { email: email },
                Subject: { rich_text: [{ text: { content: subject } }] },
                Category: { multi_select: categoryArray.map(categoryItem => ({ name: categoryItem })) },
                Description: { rich_text: [{ text: { content: description } }] },
                Date: { date: { start: date } },
                Attachments: { files: [{ name: "Attachment", type: "external", external: { url: attachments } }] },
                ActionStatus: { multi_select: actionStatusArray.map(statusItem => ({ name: statusItem })) },
            },
        });

        console.log("Success! Entry added: ", response);
        res.send({ message: "Success! Entry added.", response_data: response });
    } catch (error) {
        console.error(error.body);
        res.status(500).send({ error: error.body });
    }
});



app.get("/list",async(req,res)=>{
    const response=await notion.databases.query({
        database_id:databaseId,
    });
    console.log("Success! Entries retrieved: ", response);
    res.send({message:"Success! Entries retrieved.", response_data :response});
});


app.get("/list/:id",async(req,res)=>{
    const response=await notion.pages.retrieve({
        page_id:req.params.id,
    });
    console.log("Success! Entry retrieved: ", response);
    res.send({message:"Success! Entry retrieved.", response_data :response});
});


app.patch("/update/:id",async(req,res)=>{
    const {name,email,subject,category, description, date, attachments, actionStatus }=req.body;
    try{
        const response=await notion.pages.update({
            page_id:req.params.id,
            properties: {
                Name: { title: [{ text: { content: name } }] },
                Email: { email: email },
                Subject: { rich_text: [{ text: { content: subject } }] },
                Category: { multi_select: category.map(categoryItem => ({ name: categoryItem })) },
                Description: { rich_text: [{ text: { content: description } }] },
                Date: { date: { start: date } },
                Attachments: { files: [{ name: "Attachment", type: "external", external: { url: attachments } }] },
                ActionStatus: { multi_select: actionStatus.map(statusItem => ({ name: statusItem })) },
            },
        });
        console.log("Success! Entry updated: ", response);
        res.send({message:"Success! Entry updated.", response_data :response});
    }catch(error){
        console.error(error.body);
        res.status(500).send({error:error.body});
    }
});

//user will able to search by name, email
app.get("/search/:query", async (req, res) => {
    try {
        const response = await notion.search({
            query: req.params.query,
        });

        if (response.results.length === 0) {
            console.log("No matches found for query:", req.params.query);
            return res.status(404).send({ message: "No matches found", query: req.params.query });
        }

        console.log("Success! Entries retrieved for query:", req.params.query);
        res.send({ message: "Success! Entries retrieved.", query: req.params.query, response_data: response });
    } catch (error) {
        console.error("Error searching entries:", error.body);
        res.status(500).send({ error: "Error searching entries", query: req.params.query, error_data: error.body });
    }
});




app.listen(5000,()=>{
    console.log("Server listening on port 5000");
});

