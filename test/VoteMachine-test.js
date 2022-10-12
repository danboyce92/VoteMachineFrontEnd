const { expect } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { ethers } = require("hardhat");


  describe("VoteMachine basics", function () {
    async function deployVoteMachineFixture() {
        const [owner, voter1, voter2, voter3] = await ethers.getSigners();

        const VoteMachine = await hre.ethers.getContractFactory("VoteMachine");
        const voteMachine = await VoteMachine.deploy();


        return { voteMachine, owner, voter1, voter2, voter3 };
        
    }


    it("Should set deployer of contract as owner", async function () {

        const { voteMachine, owner } = await loadFixture(deployVoteMachineFixture);

        expect(await voteMachine.admin()).to.equal(owner.address)

    });

    it("Initial stage should be set to 0 (prevoting stage)", async function () {

        const { voteMachine } = await loadFixture(deployVoteMachineFixture);        

        expect(await voteMachine.stage()).to.equal(0)

    });

    it("Poll number should equal 1", async function () {

        const { voteMachine } = await loadFixture(deployVoteMachineFixture);  
        
        expect(await voteMachine.pollNumber()).to.equal(1);

    })

    it("Should add candidate to List", async function () {

        const { voteMachine } = await loadFixture(deployVoteMachineFixture);  

        await voteMachine.registerCandidate("David")

        expect(await voteMachine.candidateCounter()).to.be.gt(0);
        
    })

  });


  describe("VoteMachine casting votes", function () {
    async function deployVoteMachineFixture() {
        const [owner, voter1, voter2, voter3] = await ethers.getSigners();

        const VoteMachine = await hre.ethers.getContractFactory("VoteMachine");
        const voteMachine = await VoteMachine.deploy();


        return { voteMachine, owner, voter1, voter2, voter3 };
        
    }

    it("Should throw an error if same candidate is registered twice", async function () {

        const { voteMachine } = await loadFixture(deployVoteMachineFixture);

        await voteMachine.registerCandidate("Johnson")

        await expect(voteMachine.registerCandidate("Johnson")).to.be.revertedWith("Candidate is already registered!")

    });

    it("Should throw an error if a voter tries to vote twice", async function () {

        const { voteMachine, owner, voter1, voter2 } = await loadFixture(deployVoteMachineFixture);

        await voteMachine.registerCandidate("Johnson")
        await voteMachine.connect(owner).beginVoteStage()
        await voteMachine.connect(voter1).voteForCandidate("Johnson")

        await expect(voteMachine.connect(voter1).voteForCandidate("Johnson")).to.be.revertedWith("Voters can only vote once")

    });

});