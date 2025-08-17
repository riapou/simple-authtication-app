# 🔐 Next.js Authentication Project

This project is a **full-stack authentication system** built with:

- ⚡ [Next.js](https://nextjs.org/) – React framework for SSR & routing
- 🔑 [Auth.js](https://authjs.dev/) – Authentication with multiple providers
- 🗄 [Prisma](https://www.prisma.io/) – Modern database ORM
- 🔒 [bcryptjs](https://www.npmjs.com/package/bcryptjs) – Password hashing

It supports:

- **Signup & Login** pages
- **Protected Dashboard** (only accessible after login)
- **User-specific data display** after authentication

---

## 🚀 Features

✔ Register with email & password (hashed with bcryptjs)  
✔ Login with credentials or GitHub OAuth  
✔ JWT-based session handling via NextAuth.js  
✔ Prisma ORM with migrations  
✔ Secure authentication flow  
✔ Personalized dashboard

---

## 📦 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/riapou/simple-authtication-app
cd simple-authtication-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file by following the `.example.env` guide.

### 4️⃣ Setup Prisma

Run database migrations:

```bash
npx prisma init
npx prisma migrate dev --name init
```

(Optional) Open Prisma Studio:

```bash
npx prisma studio
```

5️⃣ Start the Development Server

```bash
npm run dev
```

👉 App will be available at: <http://localhost:3000>

## 🗂 Project Structure

```bash
├── prisma/            # Prisma schema & migrations
├── app/
│   ├── api/auth/      # NextAuth.js configuration
│   ├── dashboard/     # Protected dashboard
│   ├── login/         # Login page
│   └── signup/        # Signup page
├── components/        # Reusable UI components
├── lib/               # Helper functions (e.g. hashing)
├── .env               # Environment variables
├── package.json
└── README.md
```

## 🛠 Tech Stack

- Frontend & Backend: Next.js 13+ (App Router)
- Authentication: Auth.js (GitHub + Credentials)
- Database ORM: Prisma
- Password Security: bcryptjs
- Deployment Ready 🚀

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to fork this repo and submit a pull request.
