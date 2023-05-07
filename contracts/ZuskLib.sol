// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

library ZuskLib {
    struct ZKIdentity {
        bytes32 id;
        bytes credentials;
    }

    function createZKIdentity(bytes32 _id, bytes memory _credentials) internal pure returns (ZKIdentity memory) {
        return ZKIdentity({id: _id, credentials: _credentials});
    }
}
