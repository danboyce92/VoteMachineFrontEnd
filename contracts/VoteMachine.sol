// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract VoteMachine {

    //Variables

    //To restrict certain functions
    address public admin;
    //To identify what stage of voting is currently underway 
    uint256 public stage;
    //To keep a number on each poll
    uint256 public pollNumber;
    //For timer purposes
    uint256 public startTime;
    uint256 public expirationTime;
    //Gives candidate a number so their struct can be identified 
    uint256 public candidateCounter;
    //Keeps track of registered candidates
    string[] public listOfCandidates;
    //Array of candidate structs
    Candidate[] public candidates;
    //To reset ability for voters to vote in future polls
    address[] public voters;


    //Mappings

    //To make sure candidate doesn't get registered more than once
    mapping(string => bool) public candidateRegistered;
    //Helps identify votes of each candidate in struct for results function
    mapping(string => uint) public arrayTracker;
    //Prevents voters from voting more than once
    mapping(address => bool) public voteOnce;

    constructor() {
        admin = msg.sender;
        stage = 0;
        candidateCounter = 0;
        pollNumber = 1;
    }

    struct Candidate {
        string name;
        uint votes;
    }

    //Modifiers
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the Admin can call this function");
        _;
    }

    modifier regStage() {
        require(stage == 0);
        _;
    }

    modifier votStage() {
        require(stage == 1);
        _;
    }

    //Functions
    function beginVoteStage() public onlyAdmin{

    //Stage 0 = Registering phase
    //Stage 1 = Voting phase
    stage = 1;
    startTime = block.timestamp;
    expirationTime = startTime + 1 days;



    }

    function registerCandidate(string memory _name) public regStage{
        require(candidateRegistered[_name] == false, "Candidate is already registered!");
        candidateRegistered[_name] = true;

        Candidate memory candidate;
        candidate.name = _name;
        candidate.votes = 0;

        listOfCandidates.push(_name);
        candidates.push(candidate);

        //Helps identify structs in array for results
        arrayTracker[_name] = candidateCounter;
        candidateCounter ++;
    }

    function getListOfCandidates() public view returns(string[] memory){
        return listOfCandidates;
    }

    function voteForCandidate(string memory _name) public votStage{
        require(candidateRegistered[_name] == true, "Candidate not registered!");
        require(voteOnce[msg.sender] == false, "Voters can only vote once");
        require(expirationTime >= block.timestamp, "This poll has ended");

        voteOnce[msg.sender] = true;
        voters.push(msg.sender);

        Candidate storage _candidate = candidates[arrayTracker[_name]];

        _candidate.votes ++;
    }

    function getResults() public view returns(Candidate[] memory) {
        return candidates;
    
    }

    function reset() public onlyAdmin{
        require(expirationTime < block.timestamp, "This poll has not ended yet");
        require(stage == 1, "There is no ended poll to reset");
        stage = 0;

        for(uint i = 0; i < candidates.length; i++){
            candidateRegistered[listOfCandidates[i]] = false; 
            arrayTracker[listOfCandidates[i]] = 0;
            delete candidates[i];
            delete listOfCandidates[i];
        }

        for(uint j = 0; j < voters.length; j++){
            voteOnce[voters[j]] = false;
        }


        delete voters;
        candidateCounter = 0;
        startTime = 0;
        expirationTime = 0;
    }


}