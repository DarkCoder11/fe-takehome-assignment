# 🛠️ Web3 App

### Preview 👉 https://web3-app-azure.vercel.app

## 📝 Description
This application is a **React-based Web3 wallet integration** designed to provide users with an intuitive and streamlined blockchain transaction experience. Built with **Dynamic SDK**, **Wagmi**, and EIP-4337 account abstraction, the app enables the following key features:
- Seamless wallet connection with embedded wallets.
- Real-time display of wallet address and balance.
- Ability to perform gasless transactions using a paymaster service.
- User feedback through toast messages for various states (e.g., transaction pending, success, rejection).

### Assumptions
- The app is deployed and tested on the Sepolia testnet with a valid paymaster service.
- Users are familiar with basic blockchain wallet operations, such as connecting a wallet and initiating transactions.
- Transaction amounts and recipient addresses are handled as inputs or defaults during interaction.

### Limitations
- Styling and UI design are currently minimal, focusing on functionality over aesthetics. Given more time, key elements would be styled for a more polished user experience.
- The implementation prioritizes functional flow (e.g., transaction handling, error feedback) over advanced UX features like animations or complex layouts.
- Gasless transactions rely on an external paymaster service, which is assumed to be correctly set up and compatible with the testnet.
- Error handling and edge case coverage are functional but could be extended further with additional time for testing and refinement.

## 🌄 Demo


## 📚 Stack

- React
- TypeScript
- TailwindCSS
- Dynamic SDK
- Wagmi/Viem
- Lodash
- ESLint/Prettier

## 🗂 Folder Structure

```
src
├── @types
├── assets
├── components
├── const
├── containers
├── hooks
├── layouts
├── routes
├── styles
├── tools
├── utils
```

## ➕ Installation and Setup Instructions

#### Example:

Clone down this repository. You will need `node` stalled globally on your machine.

Installation:

`npm install`

To Start App:

`npm run dev`

To Visit App:

`http://localhost:5173`
