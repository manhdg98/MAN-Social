```puml
participant Client
participant Server
database RDS
participant Gmail

alt REGISTER
Client -> Server: Send info user {}
activate Server
Server -> Server: Hash password()
Server -> RDS:Save info user
Server -> Server : Verification, generate code
Client -> Client: Save global username, email
activate Client

Client -> Client : Redirect /verify
else VERIFY
Server -> Gmail: Send email, attached code

Client -> Gmail: Check email, get code

Client -> Client:  Enter Code
Client -> Server: Send code
activate Server
Server -> Server: Get code,email
Server -> RDS: Find user equal email
activate RDS
RDS -> Server: Info user
alt code === User.code
Server -> RDS: Save info user
else code !== User.code
Server -> Client: Invalid code
end
deactivate RDS
deactivate Server
else LOGIN
Client -> Client: Redirect /login
Client -> Server : Send username, password
activate Server
Server -> RDS: Find user
activate RDS
RDS -> Server: Send info user
deactivate RDS
Server -> Server: Compare password
Server -> Server: Generate token
Server -> Client: Send info + token
activate Client
Client -> Client: Save token to localStorage
Client -> Client: Set common headers Authorization = Bearer {token}
Client -> Client: Redirect /content
deactivate Client
deactivate Server
end


deactivate Server

```
