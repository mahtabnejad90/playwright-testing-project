import type { PlaywrightTestConfig } from "@playwright/test";
import dotenv from 'dotenv';
import path from 'path';

//require('dotenv').config();

//dotenv.config();
require('dotenv').config({ path: 'local.env' })



const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    use: {
        //baseURL: process.env.BASE_URL,
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "off",
    },
    projects: [
        {
            name: "Chromium",
            use: {browserName: "chromium"},
        },
        {
            name: "Firefox",
            use: {browserName: "firefox"},
        },
        {
            name: "Webkit",
            use: {browserName: "webkit"},
        }
    ]
}

export default config;