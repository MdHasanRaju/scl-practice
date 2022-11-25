## This is social media frontend project instructions.

### 1. Ask your team lead what you assigned for and work by yourself.
### 2. while working on this repo make sure create a new branch and always make sure that you are up to date with master.
### 3.

### use ` npm install` or ` yarn ` or ` pnpm install` to install the dependencies.

### use figma for design references



## Figma design

https://www.figma.com/file/6sGxBsBEv5mvs2yA93Gjoc/SCL-Social-Media?node-id=0%3A1&t=ZZbb0YrLCS6zMjHw-0


# API documentation | Hridoy

## API Base URL

    http://localhost:8000/api/v1/
    https://market.metaviralbit.com/social/api/v1/

## Server Image Base URL

    http://localhost:8000/public/v1/
    https://market.metaviralbit.com/social/api/v1/

## Server Post, Avatar, Cover photo src URL Prefix

    /posts
    /avatar
    /cover_photo

## Apis

*Register* DONE

    URL : BASE_URL/register

    METHOD : POST

    DATA : {
        "name": "[yourName]",
        "email": "[yourEmail]",
        "password": "[yourPassword]",
        "phone": "[yourPhone]",
        "gender": "[yourGender]",
        "date_of_birth": "[yourDateOfBirth]",  // Format : "22-12-1999"
        "password_confirmation": "[yourPasswordAgain]"
    }

*Login* DONE

    URL : BASE_URL/login

    METHOD : POST

    DATA : {
        "email_or_phone": "[yourEmail or youPhone]",
        "password": "[yourPassword]"
    }

*Get profile* DONE
   
    URL : BASE_URL/profile
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : GET

*Update profile* DONE
   
    URL : BASE_URL/update-profile
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : POST

    DATA : {
        "name": [NewOrOldName],
        "bio": [NewOrOldBio], // It's optional, if don't want to change, don't pass this property.
        "email": [NewOrOldEmail],
        "phone": [NewOrOldPhone],
        "two_step": [On or Off],
        "two_step_tag": [email or phone],
        "gender": [male or female],
        "date_of_birth": [YourNewDateOfBirth] // Format : "22-12-1999"
    }

*Update profile & cover photo*  DONE
   
    URL : BASE_URL/avatar-cover-update
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : POST

    DATA : {
        "avatar": [give a valid image file],
        "cover_photo": [give a valid image file]
    }

*Get date profiles* DONE
   
    URL : BASE_URL/date-profiles
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : GET

*Get Friends* DONE
   
    URL : BASE_URL/get-friends
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : GET

*Send friend request* DONE
   
    URL : BASE_URL/send-friend-request
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : POST

    DATA : {
        "receiver_id" : "[userId]"
    }

*Get friend requests* DONE
   
    URL : BASE_URL/get-friend-requests
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : GET

*Get send friend requests* DONE
   
    URL : BASE_URL/get-send-friend-requests
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : GET

*Accept friend request* DONE
   
    URL : BASE_URL/accept-friend-request/[friendRequestId]
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : GET

*Cancel friend request* DONE
   
    URL : BASE_URL/cancel-friend-request/[friendRequestId]
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : GET

*Post create on newsfeed*  DONE
   
    URL : BASE_URL/post/create
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : POST

    DATA : {
        "title": "[postTitle]",
        "tags": "[taggedUser(s)Id]",
        "image": "[file (jpeg,jpg,png,gif,webp)]",
        "video": "[file (mp4,webm)]"
    }

*Get posts on newsfeed* DONE
   
    URL : BASE_URL/post/get
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : GET

*Post update on newsfeed* DONE
   
    URL : BASE_URL/post/update/[postId]
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : POST

    DATA : {
        "title": "[postTitle]",
        "tags": "[taggedUser(s)Id]", => Not mandatory, skip this line if don't want to update it
        "image": "[file (jpeg,jpg,png,gif,webp)]", => Not mandatory, skip this line if don't want to update it
        "video": "[file (mp4,webm)]" => Not mandatory, skip this line if don't want to update it
    }

*Delete post on newsfeed* DONE
   
    URL : BASE_URL/post/destroy/[postId]
   
    HEADERS : {"Authorization" : "Bearer [yourTokenHere]"}
   
    METHOD : GET
