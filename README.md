# CinemaTicket-Blockchain 🎟️🎬🎥

Cinema is an innovative ticketing app that uses blockchain technology to offer you a unique experience. You can select your seat and buy movie tickets at your nearest Cinema Theatre. Using Sepolia testnet and Solidity smart contracts, Cinema brings you transparency in every transaction. In addition, ReactJS integration and MetaMask wallet ensure an attractive user interface and secure transactions.


## Setting Up
---
## 1. Clone the repository

## 2. Install dependencies

```bash
$ cd CinemaTicket-Blockchain
$ npm install --save-dev hardhat
$ npm install --save-dev @nomicfoundation/hardhat-toolbox
```
## 3. Change variables in Files
```bash
# hardhat.config.js
$ ALCHEMY_SEPOLIA_URL
$ PRIVATE_KEY
# src/config.json 
$ Contract address

```
## 4. Deployment Solidity Contract Addresses
```bash
$ npx hardhat clean
$ npx hardhat compile
```
``` bash
$ npx hardhat run scripts/deploy.js --network sepolia
```
<a href="https://imgur.com/5RlrIsi"><img src="https://i.imgur.com/5RlrIsi.gif" title="source: imgur.com" /></a>

``` bash

#After deploying the CinemaTicket.sol replace this address in src/config.json file with the variable:

 address:"0x32754C68F509fFbAb3589D4e3F2c6ADbd5483dAE"


```

## 5. Localhost Deployment

``` bash

npm install 

npm start

http://localhost:3000/

```
<a href="https://imgur.com/JMx4SPR"><img src="https://i.imgur.com/JMx4SPR.gif" title="source: imgur.com" /></a>
























