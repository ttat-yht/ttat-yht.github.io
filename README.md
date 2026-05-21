# TTAT — Texnik tizimlarda axborot texnologiyalari

Bozarov F.S. tomonidan **statik ta'limiy sayt**. HTML, CSS va JavaScript; [GitHub Pages](https://pages.github.com/) da joylashtirish mumkin.

## Loyiha tuzilishi

```
ttat/
├── index.html
├── style.css
├── script.js
├── form-config.js
├── assets/
└── pdf/
    ├── maruza/          # 15 ta ma'ruza PDF
    ├── laboratoriya/    # 7 ta lab PDF
    ├── amaliy/          # 8 ta amaliy ish PDF
    ├── test/            # Test PDF
    ├── fansillabusi/    # Sillabus PDF
    └── mustaqiltalim.pdf
```

## PDF fayllarni joylashtirish

**Ma'ruzalar:** `pdf/maruza/1-mavzu.pdf` … `pdf/maruza/15-mavzu.pdf`

**Laboratoriya:** `pdf/laboratoriya/1-lab.pdf` … `pdf/laboratoriya/7-lab.pdf`

**Amaliy ishlar:** `pdf/amaliy/1-amaliy.pdf` … `pdf/amaliy/8-amaliy.pdf`

**Sillabus:** `pdf/fansillabusi.pdf`

**Testlar:** `pdf/test/oraliqtest.pdf`, `pdf/test/yakuniytest.pdf`

**Mustaqil ta'lim tartibi:** `pdf/mustaqiltalim.pdf`

Har bir material uchun saytda **«PDF ni ochish»** va **«Yuklab olish»** tugmalari mavjud.

## Formspree

`form-config.js` da endpoint: `https://formspree.io/f/xzdwelqk`

Formspree panelida forma **teacherfeedback2@gmail.com** ga ulangan bo'lishi kerak.

## GitHub Pages

1. Repozitoriy yarating va `ttat` papkasidagi fayllarni yuklang.
2. **Settings → Pages** → branch `main`, papka `/ (root)`.
3. Sayt: `https://<username>.github.io/<repo>/`

## Mahalliy ko'rish

```bash
python -m http.server 8000
```

Brauzerda: `http://localhost:8000`
