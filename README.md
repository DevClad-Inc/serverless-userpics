# serverless-userpics

Instantly get user avatars via an API call. Configurable af.
I was using avatars.dicebear.com for a while, but I found some better avatars and decided to host my own serverless version of it.

Will be using this in production on [DevClad](https://devclad.com).

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

For environment variables, I’m using [godotenv](https://github.com/joho/godotenv) to load them from a .env file.

### Services

| Resource | Service |
| --- | --- |
| Storage | Cloudflare R2 (S3 compatible) |
| Serverless Hosting | Vercel (AWS Lambda) |
| Avatars? | [Craftwork.design](https://craftwork.design) |

---

### Todo

- [ ] Add more avatars
- [ ] Host lol
- [ ] Make the function URL public (?)
