// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract ServiceProvider {
    address public zuskAddress;
    mapping(address => bool) private authenticatedUsers;

    constructor(address _zuskAddress) {
        zuskAddress = _zuskAddress;
    }

    function authenticateEndUser(address endUserAddress) public {
        require(msg.sender == zuskAddress, "Only the Zusk contract can authenticate end users.");
        authenticatedUsers[endUserAddress] = true;
    }

    function isAuthenticated(address endUserAddress) public view returns (bool) {
        return authenticatedUsers[endUserAddress];
    }
}
