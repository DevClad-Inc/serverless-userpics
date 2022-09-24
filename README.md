# Serverless Userpics

## Usage (Important)

To get started quickly,

1. Head over to [userpics.devclad.com](https://userpics.devclad.com) and "Get a random user pic".
2. Use the URL in your app.

Alternatively (I recommend this),

- make a `GET` request to `https://userpics.devclad.com/api/random`.
- make a `GET` request to the URL in the response.
- Stream the bytes to a new file in the desired format and save it to the bucket of your choice. (wherever you are storing your user pics)
  - example: I use Django with S3 storage and they go in `media/avatars/`. I use the `uuid` of the user as the filename.

Instantly get user avatars via an API call. Configurable af.
I was using avatars.dicebear.com for a while, but I found some better avatars and decided to host my own serverless version of it.

Will be using this in production on [DevClad](https://devclad.com).
Live at [userpics.devclad.com](https://userpics.devclad.com)

## Python Example

``` python
def random_avatar():
    name = str(uuid.uuid4())[:8]
    with open(f"media/avatars/{name}.png", "wb+") as f:
        url = requests.get("https://userpics.devclad.com/api/getpic")
        response = requests.get(url.text, stream=True)
        if not response.ok:
            raise Exception("Could not get avatar")
        for block in response.iter_content(1024):
            if not block:
                break
            f.write(block)
    return f"avatars/{name}.png"
```

You can try svg too btw, haven't tested it but it should work.

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
- [X] Make the function URL public (?)

#### YANKING

Yanked the public/ and the vercel.json from [template-go-vercel](https://github.com/riccardogiorato/template-go-vercel).
