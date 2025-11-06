# Planering med Burak Ünal - Webbplats

En modern, responsiv webbplats om projektplanering, skapad som en kopia av den ursprungliga Wix-webbplatsen.

## Funktioner

- **Responsiv design** - Fungerar perfekt på både desktop och mobil
- **Hierarkisk navigation** - 3 huvudkategorier med undersidor
- **Modern styling** - Gult/svart/vit färgschema som original-Wix-sidan
- **Snabb och lätt** - Ingen onödig kod, snabb laddningstid
- **SEO-vänlig** - Semantisk HTML och korrekta meta-taggar

## Struktur

### Sidor
Webbplatsen innehåller 16 sidor totalt:

**Huvudsida**
- `index.html` - Välkomstsida

**Planering & Tidsplanering**
- `tidsplanering.html` - Översiktssida
  - `wbs.html` - Work Breakdown Structure
  - `aktiviteter.html` - Aktivitetsplanering
  - `natverk.html` - Nätverksplanering
  - `risk.html` - Riskhantering
  - `basplan.html` - Basplan
  - `layouter.html` - Layouter

**Resurser**
- `resurser.html` - Översiktssida
  - `resurssattning.html` - Resurssättning
  - `resursutjamning.html` - Resursutjämning
  - `evm.html` - Earned Value Management

**Uppföljning**
- `uppfoljning.html` - Översiktssida
  - `avstamning.html` - Avstämning
  - `rapportering.html` - Rapportering
  - `avvikelsehantering.html` - Avvikelsehantering

## Hur man använder webbplatsen

### Metod 1: Öppna direkt i webbläsare
Navigera till mappen `website/` och dubbelklicka på `index.html` för att öppna i din webbläsare.

### Metod 2: Använd en lokal webbserver (rekommenderas)

**Med Python:**
```bash
cd website
python3 -m http.server 8000
```
Öppna sedan: http://localhost:8000

**Med Node.js (http-server):**
```bash
npm install -g http-server
cd website
http-server -p 8000
```
Öppna sedan: http://localhost:8000

## Teknisk information

### Filer
- `css/style.css` - All styling
- `js/main.js` - JavaScript för navigation och interaktivitet
- `*.html` - Alla webbsidor

### Färgschema
- **Primär gul**: #F4E909
- **Bakgrund svart**: #000000
- **Text vit**: #FFFFFF
- **Accent blå**: #3A5AFE
- **Accent röd**: #ED1C24
- **Accent grön**: #00EC3D

### Typsnitt
- Open Sans (Google Fonts)

## Nästa steg

1. **Fyll i innehåll** - Texten "Innehåll från din PDF kommer att fyllas i här" behöver ersättas med faktiskt innehåll från dina PDF-filer.

2. **Lägg till bilder** - Placera bilder i `images/`-mappen och lägg till dem i HTML-filerna.

3. **Anpassa** - Ändra färger, typsnitt eller layout efter behov.

4. **Publicera** - När du är nöjd kan du publicera webbplatsen på:
   - GitHub Pages (gratis)
   - Netlify (gratis)
   - Vercel (gratis)
   - Din egen server

## Anpassning

### Ändra färger
Redigera `:root` CSS-variablerna i `css/style.css`:
```css
:root {
    --primary-yellow: #F4E909;
    --background-black: #000000;
    /* ... etc */
}
```

### Ändra typsnitt
Uppdatera Google Fonts-länken i `<head>` och ändra `font-family` i CSS.

## Support

Om du behöver hjälp med att fylla i innehåll eller anpassa webbplatsen, kan du:
1. Dela dina PDF-filer
2. Specificera ändringar du vill ha
3. Testa webbplatsen och rapportera eventuella problem

## Licens

© 2024 Planering med Burak Ünal
