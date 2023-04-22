# ZusK

### First touch point of [Blockchain Powered eSIM](https://github.com/ArpitxGit/Blockchain-Powered-eSIM)

A Zero-Knowledge Know Your Customer(KYC) protocol that is specifically designed for telecom network providers/companies to verify users who want to subscribe to their network. ZusK uses zero-knowledge cryptographic algorithms to create a ZK identity for end users/customers and perform KYC using a zero-knowledge proof protocol.

## ZusK Design and Architecture

The ZusK protocol aims to provide a secure and privacy-preserving KYC process for telecom network providers while verifying users who want to subscribe to their network. The protocol utilizes three factors for user authentication: biometrics, a personal identification number (PIN), and a private key (PK). The user's mobile number will serve as the public key for identification purposes.

## Architecture componenets:

1. Trusted Third Party (TTP): The TTP is responsible for creating a unique digital identity for the customer and encrypting it using a one-way hash function. The TTP also provides the zero-knowledge proof protocol for end users/customers to prove that they possess the private key to their encrypted digital identity.

2. Company: The company generates a random challenge for the customer, which requires them to prove that they possess the private key to their encrypted digital identity. The company then verifies the zero-knowledge proof provided by the customer and proceeds with the KYC process.

3. End User/Customer: The end user/customer provides their identity information to the TTP, which is used to create a unique digital identity for the customer.

## ZusK Workflow

### User Registration

a. The user submits their biometric data (e.g., fingerprint, facial scan) to a trusted third-party biometric authentication service (BAS).

b. The BAS generates a unique biometric identifier (BI) for the user and securely stores the user's biometric data, associating it with the BI.

c. The user creates a PIN and generates a public-private key pair (PPK). The mobile number serves as the public key.

d. The user generates a zero-knowledge proof (ZKP) that attests to the correctness of their biometric data, PIN, and PPK without revealing the actual data.

e. The user sends the ZKP, BI, and their mobile number (public key) to the telecom network provider.

### Telecom Network Provider Verification

a. The telecom network provider forwards the ZKP, BI, and mobile number to the BAS for verification.

b. The BAS verifies the ZKP against the stored biometric data and responds with a confirmation of validity.

c. If the verification is successful, the telecom network provider creates an account for the user and associates it with the mobile number (public key).

### User Subscription

a. To subscribe to the network, the user needs to authenticate themselves using their biometric data, PIN, and PK.

b. The user generates a new ZKP that proves they possess the correct biometric data, PIN, and PK without revealing them.

c. The user sends the ZKP, their mobile number (public key), and their desired subscription package to the telecom network provider.

d. The telecom network provider verifies the ZKP and, if successful, activates the subscription for the user.

### Ongoing Authentication

a. To ensure secure and continuous access to the network, the user periodically generates new ZKPs as a form of ongoing authentication.

b. The telecom network provider verifies these ZKPs and maintains the user's access to the network.

# AIM

ZusK is aiming to become a secure and efficient KYC protocol that uses zero-knowledge proofs to verify the identity of end users/customers. It is designed to provide a decentralized and privacy-enhancing solution for telecom network providers/companies to verify the identity of their customers without collecting or storing their personal information. ZusK is the first touch point of the project "Blockchain Powered eSIM" which aims to provide end users with a novel way of using eSIM services that enables them to do more than just communicate, and also provides users the option to use a network without trusting the network provider.
