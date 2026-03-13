# 🚴 PedalPulse Nairobi — Firebase Edition

Live bookings, real-time admin dashboard, and secure authentication — powered by Firebase.

---

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Public website with live booking form |
| `admin.html` | Admin dashboard (Firebase Auth protected) |
| `firebase-config.js` | **Your Firebase credentials go here** |
| `firestore.rules` | Firestore security rules (paste into Firebase console) |

---

## 🔥 Firebase Setup (Step by Step)

### Step 1 — Create a Firebase Project
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it `pedalpulse-nairobi`
3. Disable Google Analytics (optional) → **Create project**

---

### Step 2 — Enable Firestore Database
1. In the left sidebar click **Build → Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode** → select region `europe-west1` (closest to Nairobi) → **Enable**
4. Go to the **Rules** tab and replace the contents with everything from `firestore.rules`
5. Click **Publish**

---

### Step 3 — Enable Authentication
1. In the left sidebar click **Build → Authentication**
2. Click **Get started**
3. Click **Email/Password** → toggle **Enable** → **Save**
4. Go to the **Users** tab → click **Add user**
5. Enter your email (e.g. `eliud@pedalpulse.co.ke`) and a strong password
6. Click **Add user** — this is your admin login

---

### Step 4 — Get Your Firebase Config
1. Click the ⚙️ gear icon → **Project settings**
2. Scroll down to **Your apps** → click the **</>** (Web) icon
3. Register the app with name `pedalpulse-web` → click **Register app**
4. You'll see a config object like this:
   ```js
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "pedalpulse-nairobi.firebaseapp.com",
     projectId: "pedalpulse-nairobi",
     storageBucket: "pedalpulse-nairobi.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123"
   };
   ```
5. Open `firebase-config.js` and replace each `REPLACE_WITH_...` value with your actual values

---

### Step 5 — Deploy to GitHub Pages
1. Push all 4 files to your GitHub repo (same repo as before)
2. GitHub Pages will serve the updated site automatically

---

## ✅ How It Works After Setup

| Action | What Happens |
|--------|-------------|
| Visitor submits booking | Saved to Firestore → appears instantly in admin |
| Admin logs in | Firebase Auth verifies email + password |
| Admin confirms booking | Firestore doc updated → slot shows as "booked" on public site in real time |
| Admin edits availability | Saved to Firestore `availability` collection |

---

## 🔒 Security Notes
- The `firestore.rules` file ensures only authenticated admins can confirm/reject bookings
- Anyone can **create** a booking (needed for the public form), but only you can **read or modify** them
- Never share your Firebase config's `apiKey` publicly in a private/secret context — it's safe to include in frontend code as Firebase restricts access via security rules, not the API key

---

## 📞 Support
PedalPulse Nairobi — ride@pedalpulse.co.ke
