# Shopware 6 — TypeScript + Jest for Admin Components

This repository provides a minimal setup for integrating **TypeScript** and **Jest** testing into Shopware 6 admin components (Vue-based admin UI). The goal is to offer a concise and practical toolset for writing typed Vue components and unit tests for the Shopware 6 administration layer.

## Installation

Clone or copy this project into the `<shopware_root>/custom/plugins/{YourPluginName}/src/Resources/app/administration` directory.

Run the following command in the `<shopware_root>/custom/plugins/{YourPluginName/}src/Resources/app/administration` directory to install dependencies:

```bash
npm install
```

Update the alias configurations in `vite.config.mts` and `tsconfig.json` if needed. If you want to use Vite aliases in your tests, ensure they are also defined in `jest.config.ts`.

## Usage

To run the unit tests, execute the following command in the `<shopware_root>/custom/plugins/{YourPluginName}/src/Resources/app/administration` directory:

```bash
npm run jest
```