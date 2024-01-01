# CraftQuery Application🚀 

CraftQuery is a web application that allows users to manage and query data using the Notion API.

Users can generate/raise queries over our platform.

## Technologies Used
**ReactJs** \
**NodeJs**  \
**ExpressJs** \
**Notion Database** 


## Image Gallery
Notion DB images:

| Image | 
|-------|
| <img src="https://github.com/nishant219/CraftQuery/assets/72811435/431497e3-a61e-412e-9496-5afdda2dfe91" alt="Image 1"  /> 

## Features

- View and manage queries stored in a Notion database.
- Search for queries by name or email.
- Add, update, and delete queries.
- User-friendly interface.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- Notion API Integration (API Key and Database ID)

## Environment Variables
Create a .env file in the project root with the following variables:
```
NOTION_TOKEN=your-notion-api-key
NOTION_DATABASE_ID=your-notion-database-id
```

## API Endpoints
`GET /list`: Retrieve a list of queries. \
`GET /list/:id`: Retrieve details of a specific query.\
`POST /add`: Add a new query.\
`PATCH /update/:id`: Update an existing query.\
`GET /search/:query`: Search for queries by name or email.

## Contributing

Contributions to the projects are welcome! Please follow these steps:

1. 🍴 Fork the repository.
2. 🌿 Create a new branch for your feature or fix.
3. 🛠️ Make your changes and commit them.
4. 🚀 Push your changes to your fork.
5. 🔄 Create a pull request to the main repository.

Contributions and feedback are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue. Please follow the contribution guidelines.

👨‍💻 **Author**: Nishant (@nishant219)
