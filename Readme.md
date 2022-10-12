# Playstore Scraper

## Build with

-   Node Js
-   google-play-scraper
-   Express

## Installation

-   Clone this repo
-   Install all dependencies
    ```bash
    > npm i
    ```
-   Run
    ```bash
    > npm start
    ```
-   Server will be run at `127.0.0.1:4000/localhost:4000`

## Endpoint Routes
-   AppId
    - /apps/id/:appId
    - /apps/id/:appId/reviews
-   List Apps
    - /apps/lists/
    - /apps/list/categories
    - /apps/list/collections
    - /apps/list/category/:category
    - /apps/list/collection/:collection
-   Search
    - /apps/search


## example

### basic url
```
# get details app
/apps/id/com.mojang.minecraftpe

# get reviews app
/apps/id/com.mojang.minecraftpe/reviews
```

### optional parameter queriy

```
/apps/search?q=AppName&lang=id
```

#### list options parameter
- lang (default id)
- country (default id)
- q (query app name)
- limit (limit for result each)
- sort { NEWEST, RATING and HELPFULNESS } (sort reviews)
- detail { true or false } (show detail of a app)