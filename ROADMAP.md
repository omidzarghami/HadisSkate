# نقشه‌ی راه — حدیث اسکیت

منبع UI: Google Stitch — `Hadis Skate eCommerce UI` (`5773998176644107892`)  
CMS/eCommerce: **Payload CMS 3 (قالب Ecommerce رسمی)** + Next.js + SQLite (لوکال)

## فاز ۰ — زیرساخت

- [x] تعیین استک فنی (Next.js + TS + Tailwind + Payload Ecommerce)
- [x] اتصال Vercel (`omidzarghami`)
- [x] اتصال GitHub (`omidzarghami` / HadisSkate)
- [x] اتصال Stitch MCP و همگام‌سازی Design System
- [x] ساخت اسکلت Next.js + Payload با توکن‌های رنگ/فونت استیچ و RTL پایه
- [x] ریپازیتوری GitHub برای این پروژه
- [ ] دیپلوی اولیه روی Vercel
- [ ] اتصال دامنه `hadisskate.ir`

## فاز ۱ — هویت بصری و شِل

- [x] CSS variables از استیچ (پایه در `globals.css`)
- [x] فونت‌ها: Rubik + Plus Jakarta Sans
- [x] RTL پایه (`lang=fa` / `dir=rtl`)
- [x] i18n ادمین Payload (فارسی) + localization محتوا (`fa`/`en`)
- [x] Graphify برای گراف ساختار کد (`graphify-out/`)
- [ ] Navbar / Footer مطابق اسکرین Homepage استیچ
- [ ] هم‌تراز کردن کامل کامپوننت‌ها با Design System استیچ

## فاز ۲ — صفحات اصلی (طبق اسکرین‌های استیچ)

- [ ] Homepage (Desktop + Mobile)
- [ ] Product Listing + Search Results
- [ ] Categories
- [ ] Product Detail (Desktop + Mobile)
- [ ] Blog & Academy

## فاز ۳ — خرید

- [ ] Shopping Cart (Desktop + Mobile) — پلاگین ecommerce موجود؛ UI باید با استیچ هم‌خوان شود
- [ ] Checkout
- [ ] My Account
- [ ] جایگزینی Stripe با درگاه پرداخت ایرانی

## فاز ۴ — سئو و پولیش

- [ ] متادیتا + JSON-LD
- [ ] `sitemap.xml` / `robots.txt`
- [ ] بهینه‌سازی تصویر و Core Web Vitals
- [ ] هم‌خوانی پیکسلی با اسکرین‌های استیچ

## فاز ۵ — محتوا

- [x] CMS محصولات / صفحات / سفارش‌ها (Payload Admin)
- [ ] مدل و UI برای Blog & Academy
- [ ] Seed فارسی نمونه محصولات
