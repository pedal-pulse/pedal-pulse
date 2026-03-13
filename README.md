# 🚴 PedalPulse Nairobi

> Nairobi's Premier Cycling Experience — Guided tours, training sessions & bike hire.

Live site: `https://YOUR-USERNAME.github.io/pedalpulse`

---

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Public-facing website |
| `admin.html` | Admin dashboard (password protected) |

## 🚀 Hosting on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Your site will be live at `https://YOUR-USERNAME.github.io/pedalpulse`

## 🔐 Admin Access

Visit `/admin.html` on your live site.

Default credentials (change these in `admin.html`):
- **Username:** `admin`
- **Password:** `pedalpulse2024`

To change password, open `admin.html` and edit lines:
```js
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'pedalpulse2024';
```

## 📝 Notes

- All booking data is stored in the visitor's browser (`localStorage`). For a shared/persistent backend, consider upgrading to a service like Firebase or Supabase.
- Bookings submitted on the public site appear in the admin panel on the **same browser/device** in the demo setup.

## 📞 Contact

PedalPulse Nairobi — ride@pedalpulse.co.ke
