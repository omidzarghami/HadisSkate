# سند طراحی — حدیث اسکیت (Hadis Skate)

> دامنه: **hadisskate.ir**  
> منبع حقیقت طراحی: **Google Stitch** → پروژه `Hadis Skate eCommerce UI`  
> Project ID: `5773998176644107892`  
> آخرین همگام‌سازی: ۲۰۲۶-۰۷-۱۸

این سند با خروجی Design System استیچ همگام است. نسخه‌ی خام استیچ در [`stitch/DESIGN.md`](./stitch/DESIGN.md) و فهرست اسکرین‌ها در [`stitch/screens.json`](./stitch/screens.json) نگهداری می‌شود.

---

## ۱. معرفی محصول

**حدیث اسکیت** وب‌سایت فروشگاهی برند اسکیت برای معرفی و فروش اسکیت‌بورد، قطعات، لوازم ایمنی و پوشاک است.

| مورد | مقدار |
|------|--------|
| مخاطب | نوجوانان و جوانان اسکیت‌باز + والدین |
| زبان | فارسی (RTL) |
| ارز | تومان |
| شخصیت برند | پرانرژی، فراگیر، خیابانی ولی قابل‌اعتماد |
| سبک بصری استیچ | **Modern Sports Retail / Modern-Playful** |

### اهداف
1. نمایش جذاب و سریع محصولات با هویت بصری استیچ  
2. خرید روان روی موبایل  
3. سئوی قوی برای `hadisskate.ir`  
4. هم‌خوانی کامل UI با اسکرین‌های استیچ  

---

## ۲. اتصال استیچ (Source of Truth)

| فیلد | مقدار |
|------|--------|
| عنوان پروژه | Hadis Skate eCommerce UI |
| Resource | `projects/5773998176644107892` |
| نوع | `TEXT_TO_UI_PRO` |
| حالت رنگ | Light |
| رنگ سفارشی | `#7b2cff` |
| گردی گوشه‌ها | `ROUND_EIGHT` |

هر تغییر طراحی باید اول در استیچ اعمال شود، سپس این فایل‌ها به‌روز شوند (یا برعکس با `upload_design_md`).

---

## ۳. سیستم بصری (از استیچ)

### ۳.۱ رنگ‌های کلیدی

| نقش | توکن | کد |
|-----|------|-----|
| Primary | `primary` | `#6100da` |
| Primary Container | `primary_container` | `#7b2cff` |
| Secondary | `secondary` | `#b5005f` |
| Secondary Container | `secondary_container` | `#e20378` |
| Tertiary | `tertiary` | `#833800` |
| Background / Surface | `background` / `surface` | `#fef7ff` |
| On Surface | `on_surface` | `#1d1a25` |
| Outline | `outline` | `#7b7488` |
| Error | `error` | `#ba1a1a` |

**گرادیان برند:** بنفش → صورتی با زاویه ۱۳۵° برای هیرو و CTAهای اصلی.  
**اکسنت‌های کمکی:** زرد و فیروزه‌ای برای بج‌های «جدید» و «فروش ویژه» (طبق سند استیچ).  
**سایه:** سایه‌ی بنفش نرم (`#7B2CFF` با opacity حدود ۱۵٪) به‌جای خاکستری خنثی.

فهرست کامل توکن‌ها: [`stitch/project.json`](./stitch/project.json) و frontmatter فایل [`stitch/DESIGN.md`](./stitch/DESIGN.md).

### ۳.۲ تایپوگرافی

| نقش | فونت | وزن / اندازه نمونه |
|-----|------|---------------------|
| Display / Headline / Label | **Rubik** | Display LG: 48/56، وزن ۷۰۰ |
| Body | **Plus Jakarta Sans** | Body MD: 16/24، وزن ۴۰۰ |
| Sticker text | Rubik | 12px، وزن ۸۰۰، letter-spacing 0.05em |

برای متن فارسی RTL، line-height حدود ۱۰–۱۵٪ بلندتر از معادل انگلیسی در نظر گرفته شود. در پیاده‌سازی وب، در صورت نیاز می‌توان **Vazirmatn** را به‌عنوان فونت پشتیبان فارسی کنار Rubik استفاده کرد.

### ۳.۳ فاصله و شبکه

| توکن | مقدار |
|------|--------|
| Base | 8px |
| Gutter | 24px |
| Margin موبایل | 16px |
| Margin دسکتاپ | 80px |
| دسکتاپ | گرید ۱۲ ستونه |
| موبایل | گرید ۴ ستونه |

### ۳.۴ شکل و عمق

- شعاع استاندارد المان‌ها: `0.5rem` (۸px)  
- کارت محصول و بنر: `1.5rem` (۲۴px)  
- دکمه‌های Primary: گرد / pill با گرادیان و میکرو‌انیمیشن bounce  
- Navbar و فوتر چسبان سبد: backdrop-blur ۱۲px + سفید نیمه‌شفاف (~۸۰٪)  
- بج‌ها: ظاهر «استیکر» با stroke سفید ۱px و سایه کمی offset  

### ۳.۵ کامپوننت‌های تعریف‌شده در استیچ

- Button (Primary gradient / Secondary / Ghost)  
- Product Card (پس‌زمینه lavender، تصویر با overflow پویا، بج استیکر)  
- Chip (سایز / دسته — border ضخیم ۲px در حالت selected)  
- Search Input (pill، focus ring فیروزه‌ای)  
- Progress (گرادیان دو‌رنگ برای موجودی / ارسال امن)  
- Sticker accents (ستاره‌، صاعقه، چرخ اسکیت)  

---

## ۴. صفحات و اسکرین‌های استیچ

نگاشت اسکرین → مسیر پیشنهادی اپلیکیشن:

| اسکرین استیچ | دستگاه | مسیر پیشنهادی |
|--------------|--------|----------------|
| Homepage | Desktop | `/` |
| Mobile Homepage | Mobile | `/` |
| Product Listing | Desktop | `/products` |
| Search Results | Desktop | `/search` یا `/products?q=` |
| Categories | Desktop | `/categories` |
| Product Detail | Desktop | `/products/[slug]` |
| Mobile Product Detail | Mobile | `/products/[slug]` |
| Shopping Cart | Desktop | `/cart` |
| Mobile Shopping Cart | Mobile | `/cart` |
| Checkout | Desktop | `/checkout` |
| My Account | Desktop | `/account` |
| Blog & Academy | Desktop | `/blog` |

جزئیات ID و لینک screenshot/HTML: [`stitch/screens.json`](./stitch/screens.json).

---

## ۵. استک فنی (پیاده‌سازی)

| لایه | انتخاب |
|------|--------|
| فریم‌ورک | Next.js (App Router) + TypeScript |
| استایل | Tailwind CSS — توکن‌های رنگ/فاصله از استیچ |
| کامپوننت | shadcn/ui (سفارشی‌شده با پالت استیچ) |
| میزبانی | Vercel |
| کنترل نسخه | GitHub (`omidzarghami`) |
| طراحی UI | Google Stitch MCP |

---

## ۶. سئو و UX

- موبایل‌اول (اسکرین‌های Mobile Homepage / Product / Cart موجودند)  
- `next/image` + متادیتای پویا + JSON-LD نوع `Product`  
- `sitemap.xml` / `robots.txt`  
- دسترس‌پذیری: کنتراست روی بنفش/صورتی بررسی شود  

---

## ۷. سؤالات باز

- [ ] درگاه پرداخت ایرانی؟  
- [ ] CMS / پنل ادمین؟  
- [ ] خرید مهمان کافی است یا حساب کاربری اجباری؟  
- [ ] هزینه‌ی ارسال چگونه محاسبه شود؟  
- [ ] محتوای Blog & Academy از کجا تغذیه شود؟  

---

## ۸. همگام‌سازی مجدد با استیچ

```text
1. list_projects / get_project  →  projects/5773998176644107892
2. استخراج designTheme.designMd  →  stitch/DESIGN.md
3. list_screens                  →  stitch/screens.json
4. به‌روزرسانی این فایل (design.md) و ROADMAP.md
```

برای آپلود سند محلی به استیچ: ابزار MCP `upload_design_md` سپس `create_design_system_from_design_md`.
