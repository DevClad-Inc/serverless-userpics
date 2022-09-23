# Serverless USERPICS

**IMPORTANT: You need to setup your own Cloudflare and Cloudflare R2 Bucket. This is not a free avatar generator. at least not rn.**

Instantly get user avatars via an API call. Configurable af.
I was using avatars.dicebear.com for a while, but I found some better avatars and decided to host my own serverless version of it.

Will be using this in production on [DevClad](https://devclad.com).
Live at [userpics.devclad.com](https://userpics.devclad.com)

## Features

- [x] Generate avatars on the fly
- [x] Tiny as fuck even with stupid inline comments (~ 100 lines of code)
- [x] Serverless on the *EDGEEEEEEEEE*. zooom bitch
- [x] Configurable as fuck

## Config

``` go
accountId := os.Getenv("ACCOUNT_ID")
bucketName := os.Getenv("BUCKET_NAME")
accessKeyId := os.Getenv("API_ACCESS_KEY")
accessKeySecret := os.Getenv("API_SECRET_KEY")
```

### Replicate this

1. Create an R2 bucket on Cloudflare.
2. Generate S3 Token via `Manage R2 API Tokens` in R2 Dashboard.
3. Set your environment variables.
4. Deploy ⚡

### Running locally

do the usual. install dependencies via `yarn` and run `yarn run start`/`yarn run dev`.

**Make sure to setup environment variables in your Vercel dashboard.**
**Also make sure to have S3 API access and secret on the recieving end if your bucket is private like mine.**

### Services

| Resource | Service |
| --- | --- |
| Storage | Cloudflare R2 (S3 compatible) |
| Serverless Hosting | Vercel (AWS Lambda) |
| Avatars? | [Craftwork.design](https://craftwork.design) |

---

### Todo

- [ ] Add more avatars
- [X] Host
- [ ] Modify `/` route.
- [ ] Make the function URL public (?)

#### YANKING

Yanked the public/ and the vercel.json from [template-go-vercel](https://github.com/riccardogiorato/template-go-vercel).
