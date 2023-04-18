# ZusK

### First touch point of [Blockchain Powered eSIM](https://github.com/ArpitxGit/Blockchain-Powered-eSIM) in N&W S3

A Zero-Knowledge Know Your Customer (KYC) protocol that is specifically designed for telecom network providers/companies to verify users who want to subscribe to their network. ZusK uses zero-knowledge cryptographic algorithms to create a ZK identity for end users/customers and perform KYC using a zero-knowledge proof protocol.

## ZusK Design and Architecture

ZusK is designed to be a secure and efficient KYC protocol that uses zero-knowledge proofs to verify the identity of end users/customers. The protocol is built on top of a blockchain-powered eSIM infrastructure, which provides a secure and decentralized platform for telecom network providers/companies to verify the identity of their customers.

## Architecture componenets:

1. Trusted Third Party (TTP): The TTP is responsible for creating a unique digital identity for the customer and encrypting it using a one-way hash function. The TTP also provides the zero-knowledge proof protocol for end users/customers to prove that they possess the private key to their encrypted digital identity.

2. Company: The company generates a random challenge for the customer, which requires them to prove that they possess the private key to their encrypted digital identity. The company then verifies the zero-knowledge proof provided by the customer and proceeds with the KYC process.

3. End User/Customer: The end user/customer provides their identity information to the TTP, which is used to create a unique digital identity for the customer.

## ZusK Workflow

1. The end user/customer provides their identity information to the TTP.

2. The TTP creates a unique digital identity for the customer and encrypts it using a one-way hash function.

3. The TTP sends the encrypted digital identity to the company requesting the KYC check.

4. The company generates a random challenge for the customer, which requires them to prove that they possess the private key to their encrypted digital identity.

5. The customer uses a zero-knowledge proof protocol to prove to the company that they possess the private key, without revealing the key itself or any other personal information.

Once the company is satisfied that the customer has passed the KYC check, the customer's identity is verified, and the company can proceed with their business relationship.

In addition, ZusK is also aiming to create a one-time ZK ID for end users/customers for user authentication of different platforms.  
For example, if a platform requires OTP verification, then by passing this one-time ZK ID, users will receive an OTP and submit it for authentication without providing their mobile numbers.

# AIM

ZusK is aiming to become a secure and efficient KYC protocol that uses zero-knowledge proofs to verify the identity of end users/customers. It is designed to provide a decentralized and privacy-enhancing solution for telecom network providers/companies to verify the identity of their customers without collecting or storing their personal information. ZusK is the first touch point of the project "Blockchain Powered eSIM" which aims to provide end users with a novel way of using eSIM services that enables them to do more than just communicate, and also provides users the option to use a network without trusting the network provider.
