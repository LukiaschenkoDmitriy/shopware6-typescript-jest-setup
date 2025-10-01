const { resolve, join } = require('path');

const ADMIN_PATH = resolve('../../../../../../../vendor/shopware/administration/Resources/app/administration');
process.env.ADMIN_PATH = process.env.ADMIN_PATH || ADMIN_PATH;

module.exports = {
    globals: {
        adminPath: process.env.ADMIN_PATH,
    },

    preset: '@shopware-ag/jest-preset-sw6-admin',
    moduleNameMapper: {
        // Your moduleNameMappers

        "@ShopwareSrc(.*)$": resolve(join(process.env.ADMIN_PATH, 'src$1')),
        "@ShopwareNode\/(.*)$": resolve(join(process.env.ADMIN_PATH, 'node_modules/$1')),
        
        '^\@shopware-ag/admin-extension-sdk/es(.*)$': resolve(join(process.env.ADMIN_PATH, 'node_modules/@shopware-ag/admin-extension-sdk/umd$1')),
        '^\@shopware-ag/meteor-admin-sdk/es(.*)$': resolve(join(process.env.ADMIN_PATH, 'node_modules/@shopware-ag/meteor-admin-sdk/umd$1')),
    },
    testMatch: [
        '<rootDir>/test/**/*.spec.js',
        '<rootDir>/test/**/*.spec.ts'
    ],
};
