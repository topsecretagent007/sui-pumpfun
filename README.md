# 🧪 Sui.fun

A fully on-chain experimental token launch and trading platform built on the **Sui blockchain**, inspired by Pump.fun. Users can **connect wallets, create tokens**, and **buy/sell tokens** instantly. The project combines a modern frontend with a Move-based smart contract backend.

---

## ⚙️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) + [Javascript](https://www.javascriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Blockchain**: [Sui](https://sui.io/) + [Move](https://move-language.github.io/)
- **Wallet Integration**: Sui Wallet Adapter

---

## 🚀 Features

- 🔐 **Wallet Connect**: Connect your Sui wallet securely.
- 🪙 **Token Creation**: Create custom tokens in seconds.
- 📈 **Buy & Sell Tokens**: Trade tokens instantly on-chain.
- 🔗 **Move Smart Contract**: Powered by a custom-written Move contract.
- 📊 **Live Stats** (optional): Show real-time volume, holders, token supply, etc.

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/topsecretagent007/sui-pumpfun.git
cd sui-pumpfun

# Install dependencies
yarn install

# Start the development server
yarn dev
```

## 🔗 Wallet Setup

Make sure you have the Sui Wallet installed. You can also integrate other wallets using the @mysten/wallet-adapter.

## 🛠️ Smart Contract (Move)

The smart contract is written in Move and deployed to the Sui network. Find the code in the contracts/ folder.

```bash
# move contract devnet deploy example
sui client publish --path ./contracts --gas-budget 100000000
```

## 📁 Project Structure

```graphql
.
├── Components/        # Reusable UI components
├── Helper/         # Move Helper
├── Hook/            # Project Hook
├── Layouts/            # Project layouts
├── Lib/            # Project Lib
├── Pages/             # Next.js pages
├── Style/             # TypeScript styles
└── README.md
```

## 📬 Contact

For questions or collaborations, reach out via Telegram: [@topsecretagnt_007](https://t.me/topsecretagent_007)

---

Let me know if you want to add demo images, a deploy guide, or links to your live project or smart contract repo.
