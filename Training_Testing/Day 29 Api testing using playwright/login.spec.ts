import { test, expect, request } from '@playwright/test';

test('Login', async ({ request }) => {
    let res = await request.post("https://www.shoppersstack.com/shopping/users/login", {
        data: {
            "email": "testusers@gmail.com",
            "password": "Password@1234",
            "role": "SHOPPER"
        },
        ignoreHTTPSErrors: true,
    });

    const resData = await res.json();
    let token = resData.data.jwtToken;
    console.log(resData);
});