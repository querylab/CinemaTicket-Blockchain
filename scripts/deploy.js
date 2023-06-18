const hre = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether');
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners();
  
  const NAME = "CinemaTicket";
  const SYMBOL = "CTK";

  // Deploy contract
  const TokenMaster = await ethers.getContractFactory("CinemaTicket");
  const tokenMaster = await TokenMaster.deploy(NAME, SYMBOL);
  await tokenMaster.deployed();

 //Consol View
 console.log("***********************************************************************************");
 console.log("Deploying contracts with the account:", deployer.address);
 console.log("Account balance:", (await deployer.getBalance()).toString());
 console.log("***********************************************************************************\n");
 console.log(`Cinema Ticket Contract at: ${tokenMaster.address}`,"\n");
 console.log("***********************************************************************************");

  // List 6 events
  const occasions = [
    {
      name: "Back to the Future",
      cost: tokens(0.00000123),
      tickets: 0,
      date: "June 22",
      time: "6:00PM",
      location: "Cinema"
    },
    {
      name: "Interestelar",
      cost: tokens(0.00000213),
      tickets: 100,
      date: "Jun 2",
      time: "1:00PM",
      location: "Cinema"
    },
    {
      name: "John Wick",
      cost: tokens(0.11234599),
      tickets: 107,
      date: "Jun 9",
      time: "10:00AM",
      location: "Cinema"
    },
    {
      name: "Rick and Morty",
      cost: tokens(0.21259),
      tickets: 0,
      date: "Jun 11",
      time: "2:30PM",
      location: "Cinema"
    },
    {
      name: "Lord of the Rings",
      cost: tokens(0.1),
      tickets: 125,
      date: "Jun 23",
      time: "11:00AM",
      location: "Cinema"
    }
    
  ];
  

  for (var i = 0; i < 5; i++) {
    const transaction = await tokenMaster.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location
    );

    await transaction.wait();

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`);
    console.log("***********************************************************************************");

  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});