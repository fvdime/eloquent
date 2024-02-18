# Blog Website
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Eloquent Studio</h3>

  <p align="center">
    <a href="https://eloquent-ruddy.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/fvdime/eloquent/issues">Report Bug</a>
    ·
    <a href="https://github.com/fvdime/eloquent/issues">Request Feature</a>
  </p>
</div>


### Built With

Build with:

* Next JS
* Next JS Server Actions
* Amazon S3 
* Prisma
* Vercel Postgres
* Tailwind CSS
* Gsap
* Framer Motion

<p align="right">(<a href="#readme-top">↑</a>)</p>


### Getting Started

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

## Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/fvdime/eloquent.git
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
3. Add .env file:
   ```bash
	POSTGRES_URL="< POSTGRES URL>"
    POSTGRES_PRISMA_URL="<POSTGRES PRISMA URL>"
    POSTGRES_URL_NO_SSL="<POSTGRES URL NO SSL>"
    POSTGRES_URL_NON_POOLING="<POSTGRES URL NON POOLING>"
    POSTGRES_USER="<POSTGRES USER>"
    POSTGRES_DATABASE="<POSTGRES DATABSE>"
    POSTGRES_PASSWORD="<POSTGRES PASSWORD>"
    POSTGRES_HOST="<POSTGRES HOST>"
    NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY="<AWS S3 SECRET ACCESS KEY>"
    NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID="<AWS S3 SECRET ACCESS KEY ID>"
    NEXT_PUBLIC_AWS_S3_REGION="<AWS S3 REGION>"
    NEXT_PUBLIC_AWS_S3_BUCKET_NAME="<AWS S3 BUCKET NAME>"
    NEXT_PUBLIC_JWT_SECRET_KEY="<JWT SECRET KEY>"
    ```
4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
6. If you like the run with Docker, add these to the .env:

    ```bash
    DB_NAME="<DATABASE NAME>"
    DB_USER="<DATABASE USER>"
    DB_PASSWORD="<DATABASE PASSWORD>"
    DB_PORT="<DATABASE PORT>"

    DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}?schema=public

    ```
6. Then run: 

    ```bash
    docker compose up -d
    ```
 

<p align="right">(<a href="#readme-top">↑</a>)</p>


### Contact

Fadime or Faya - fadime.dogrulj@gmail.com

Project Link: [https://github.com/fvdime/eloquent](https://github.com/fvdime/eloquent)

<p align="right">(<a href="#readme-top">↑</a>)</p>


### License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">↑</a>)</p>

