![maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)
![madewith](https://img.shields.io/badge/Made%20with-Node-freen?style=for-the-badge)
![issues](https://img.shields.io/github/issues/arashi-u/techies-api.svg?style=for-the-badge)

## Installation

Clone the repository and install dependencies

```
git clone https://github.com/arashi-u/tehcies-api.git
cd techies
npm i
```
Create a .env file with the following entries

```
SDNGH_DB_URI=[your_mongodb_uri]
SDNGH_NS=[your_database_name]
PORT=[your_server_port]
```

Start the server with nodemon

```
nodemon
```

It has only one endpoint, which will get you the "users" collection from you database, you can test the endpoint using curl

```
curl http://localhost:5000/users
```


#### I know, it sucks :slightly_smiling_face: i will keep working on both front and backend whenever i get a free time.
