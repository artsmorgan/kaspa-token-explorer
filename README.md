# 🚀 Kaspa Token Explorer

A **serverless** token explorer for **Kaspa KRC-20 tokens**, built with **Next.js**, **Tailwind CSS**, and **Cloudflare Pages-compatible**.

## 🛠️ Features
✅ Fetches **real-time token data** from the Kasplex API  
✅ Displays **total supply, holders, and latest transactions**  
✅ **Dark mode** support with Tailwind CSS  
✅ **Serverless** & deployable to **Cloudflare Pages**  
✅ **Optimized for static export (`next export`)**  

---

## 📌 Prerequisites
Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- A [Cloudflare Pages](https://pages.cloudflare.com/) account (for deployment)

---

## 📦 Setup Instructions

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/artsmorgan/kaspa-token-explorer.git
cd kaspa-token-explorer


### 2️⃣ **Install Dependencies**
```sh
npm install

### 3️⃣ **Set Up Environment Variables**
Create a .env.local file in the root of the project:
```sh
NEXT_PUBLIC_KASPA_API_URL=https://api.kasplex.org

### 4️⃣ **Start the Development Server**
🚀 Running the Project Locally
```sh
npm run dev

### 5️⃣ **Build the App**
Building and Exporting for Production

```sh
npm run dev

### 🌍 Deploying to Cloudflare Pages
You can deploy the Kaspa Token Explorer to Cloudflare Pages for free.

### **Set Up Cloudflare Pages**
Go to Cloudflare Pages
Click "Create a Project"
Select "Connect to GitHub" and choose your repository
Click "Begin Setup"

### **Set Deployment Settings**
Build Command:
```sh
npm run build && npm run export

