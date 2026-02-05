/*
🔐 Authentication (Who is the user?)

Definition:
Authentication is the process of identifying who is making the request.

How it works (Backend view):
- User logs in with credentials (email/password)
- Backend verifies credentials
- Backend issues a token
- Client sends this token with every request
- Backend identifies the user using that token

Token (very important):
    A token is a digitally signed string that represents the authenticated user

Commonly stored in:
- HTTP headers (Authorization: Bearer <token>)
- Cookies (httpOnly)

Common token types:
- JWT (JSON Web Token) – stateless, widely used
- Session ID – stored on server (stateful)

OAuth (Snapshot)
    OAuth is an authorization framework, not authentication.

Purpose:
    Allows third-party apps to access user data without sharing passwords

Example:
    “Login with Google”

OAuth Tokens:
    Access Token → used to access protected resources
    Refresh Token → used to get a new access token

🔑 Authorization (What can the user do?)

Definition:
Authorization determines what actions an authenticated user is allowed to perform.

Key points:
Happens after authentication

Based on:
- Roles (admin, user, moderator)
- Permissions (read, write, delete)

Example:
 Admin → can delete users
 Normal user → cannot delete users

Backend implementation:
- Middleware checks user role from token
- Grants or denies access

✅ Validation (Is the data format correct?)

Definition:
    Validation checks whether input data follows the expected format and rules.

What it checks:
- Required fields present?
- Correct data type?
- Length, pattern, range?

Example:

email must be valid
password length >= 8
age must be a number

Tools:
- Joi
- Zod
- express-validator

📌 Validation happens before business logic.

✔️ Verification (Is the data true?)

Definition:
    Verification checks whether the provided data is correct or exists.

What it checks:
- Is password correct?
- Does user exist in DB?
- Does OTP match?
- Is token valid?

Example:
- Comparing hashed password with DB value
- Verifying OTP from database
- Verifying JWT signature

📌 Verification involves database or external system checks.

🧠 One-line comparison (Very important)
Term	                         Meaning
Authentication	                Who the user is
Authorization	                What the user can do
Validation	                    Is the input format correct
Verification	                Is the input data true


🔄 Typical Backend Flow
Request →
Validation →
Authentication →
Authorization →
Verification →
Controller Logic →
Response



🔐 JWT Flow Diagram (Login → Token → Middleware)
📌 Step-by-step JWT Flow

Client
  |
  | 1️⃣ Login Request (email + password)
  |
Backend
  |
  | 2️⃣ Verify credentials (DB)
  |
  | 3️⃣ Generate JWT (userId, role, expiry)
  |
  | 4️⃣ Send JWT to client
  |
Client
  |
  | 5️⃣ Stores JWT (localStorage / cookie)
  |
  | 6️⃣ Sends JWT with every request
  |     Authorization: Bearer <token>
  |
Backend (JWT Middleware)
  |
  | 7️⃣ Verify token signature & expiry
  |
  | 8️⃣ Attach user to req object
  |
Controller
  |
  | 9️⃣ Authorization check (role/permission)
  |
Response

🔑 JWT Contains
        Header → algorithm, type
        Payload → userId, role, exp
        Signature → prevents tampering

📌 JWT is stateless → server does not store session.


🆚 Auth vs OAuth (Interview Questions)
Q1. What is Authentication?
Answer:
Authentication verifies who the user is using credentials or tokens.

Q2. What is Authorization?
Answer:
Authorization determines what the authenticated user is allowed to do.

Q3. What is OAuth?
Answer:
OAuth is an authorization framework that allows third-party apps to access user data without sharing passwords.

Q4. Is OAuth Authentication?

Answer:
❌ No. OAuth is authorization, not authentication.
(Authentication can be layered on top of OAuth.)

Q5. JWT vs OAuth?
JWT	                                OAuth
Token format	            Authorization framework
Used for auth	            Used for delegated access
Stateless	                Uses access & refresh tokens

Q6. Real-world example?

- JWT → Your own app login
- OAuth → Login with Google / GitHub

Q7. Where is JWT stored?

- HTTP-only cookie (most secure)
- Authorization header
- localStorage (less secure)

*/