import { FullConfig } from "@playwright/test";
import dotenv from 'dotenv';

async function initSetup(config: FullConfig) {
    dotenv.config({
        path: '.env',
        override: true
    });
}

module.exports = initSetup;