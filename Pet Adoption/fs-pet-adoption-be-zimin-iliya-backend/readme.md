## List of Routes

### Auth

Signup API - ~~`/signup`~~ `/auth/signup` [POST]

Login API - ~~`/login`~~ `/auth/login` [POST]

### Pets

Get Pets API - ~~`/pet`~~ `/pets` [GET]

Add Pet API - ~~`/pet`~~ `/pets` [POST] (Protected to admin only)

Get Pet By ID API - ~~`/pet/:id`~~ `/pets/:id` [GET]

Edit Pet API - ~~`/pet/:id`~~ `/pets/:id` [PUT] (protected to admin only)

Adopt/Foster API - ~~`/pet/:id/adopt`~~ `/pets/:id/adopt` [POST] (protected to logged in users)

Return Pet API - ~~`/pet/:id/return`~~ `/pets/:id/return` [POST] (protected to logged in users)

Save Pet API - ~~`/pet/:id/save`~~ `/pets/:id/save` [POST] (protected to logged in users)

Delete Saved Pet API - ~~`/pet/:id/save`~~ `/pets/:id/save` [DELETE] (protected to logged in users)

Get Pets By User ID API - ~~`/pet/user/:id`~~ `/users/:id/pets` [GET]

### Users

Get Users API - ~~`/user`~~ `/users` [GET] (protected to admin)

Get User By ID API - ~~`/user/:id`~~ `/users/:id` [GET]

Update User API - ~~`/user/:id`~~ `/users/:id` [PUT] (protected to logged in user)

Get User By ID API - ~~`/user/:id/full`~~ `/users/:id/full` [GET]
