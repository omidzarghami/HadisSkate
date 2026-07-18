# حدیث اسکیت — Hadis Skate

وب‌سایت فروشگاهی برند اسکیت. دامنه: **[hadisskate.ir](https://hadisskate.ir)**

## استک انتخاب‌شده

**[Payload CMS 3](https://payloadcms.com/) + قالب رسمی Ecommerce** روی Next.js

| معیار | چرا Payload |
|--------|-------------|
| رایگان | MIT — بدون اشتراک اجباری SaaS |
| پایدار | Next.js-native، ادمین + API داخل همان اپ |
| eCommerce | محصولات، واریانت، سبد، سفارش، حساب کاربری |
| CMS | صفحات، مدیا، SEO plugin، Blog-ready |
| دیپلوی | سازگار با Vercel (+ Postgres رایگان مثل Neon برای production) |

طراحی UI از **Google Stitch** همگام است (`stitch/`).

> پرداخت پیش‌فرض قالب Stripe است؛ برای ایران بعداً با درگاه ایرانی (مثل زرین‌پال) جایگزین می‌شود.

## اسناد

| فایل | توضیح |
|------|--------|
| [`design.md`](./design.md) | سند طراحی محصول |
| [`stitch/DESIGN.md`](./stitch/DESIGN.md) | Design System استیچ |
| [`ROADMAP.md`](./ROADMAP.md) | فازبندی |
| [`rules.md`](./rules.md) | قوانین توسعه |

## راه‌اندازی محلی

```bash
cp .env.example .env   # اگر هنوز ندارید
npm install
npm run dev
```

- فروشگاه: [http://localhost:3001](http://localhost:3001)
- پنل ادمین: [http://localhost:3001/admin](http://localhost:3001/admin)

اولین ورود به `/admin` کاربر ادمین می‌سازد. از ادمین می‌توانید دیتابیس را seed کنید.

## اسکریپت‌ها

| دستور | کار |
|-------|-----|
| `npm run dev` | توسعه |
| `npm run build` | بیلد production |
| `npm run start` | اجرای production |
| `npm run generate:types` | تایپ‌های Payload |
| `npm run lint` | ESLint |

## دیتابیس

محلی: **SQLite** (`DATABASE_URL=file:./hadisskate.db`) — رایگان و بدون سرویس اضافه.  
Production روی Vercel: Postgres (مثلاً Neon / Vercel Postgres) توصیه می‌شود.
