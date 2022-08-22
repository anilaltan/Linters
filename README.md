This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Çalışmaya başlamadan önce indirilecekler

- node.js (kullanılan sürüm v16.16.0)
- yarn (kullanılan sürüm v1.22.19)

## node.js yüklenmesi

[Node.js indir](https://nodejs.org/en/download/)

## Yarn yüklenmesi

`npm install --global yarn`

Kodunu çalıştırarak yarn package manager'ini kuruyoruz.

## [Eslint](https://eslint.org/docs/latest/)

Eslint belirli standartlarda kod yazmamıza yardımcı olur.

- Eslint yüklenmesi

```bash
yarn add eslint --init
```

[Eslint paketi](https://yarnpkg.com/package/eslint)

Ne şekilde kullanmak istediğimizi seçerek devam ediyoruz. Sonrasında paketler yüklenecektir.

- eslint'i nasıl kullanmak istersin?
  syntaxları kontrol et, pronlemleri bul ve yeniden yazmaya zorla

- hangi module tipinde kullanıyorsun?
  import ve export

- hangi framework?

> react

- typescript kullanıyor musun?

> hayır

- kod nerede çalışıyor?

> browser ve node

- hangi guide?

> populer olanlardan airbnb

- hangi format türünde tutulsun dosya?

> json

- paketler yüklensin mi?

> evet

- hangi manager kullanılsın?

> yarn

# [Prettier & config yüklenmesi](https://prettier.io/docs/en/index.html)

**NOT:** `Development modda çalıştırmak için "-D" eklenir.`

```bash
yarn add -D eslint-plugin-prettier eslint-config-prettier
```

- eslint-plugin-prettier: prettier pluginini yüklemek için
- eslint-config-prettier: eslint ve prettier çakışmalarını önlemek ve istenilen ayarları çalıştırmak için

## Aşağında görülen kod bloğu .eslintrc.json dosyasına aittir

```json
{
  "name": "linters",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .js,.jsx",
    "lint:fix": "yarn lint -- --fix",
    "format": "prettier --write ./**/*.{js,jsx}",
    "svgr": "svgr src/icons -d src/components/icons --replace-attr-values \"#fff=currentColor\" --svgo-config .svgorc.json",
    "prepare": "husky install"
  },
  "lint-staged": {
    "**/*.{js,jsx}": ["yarn format", "yarn lint", "yarn lint:fix"]
  },
  "dependencies": {
    "axios": "^0.27.2",
    "classnames": "^2.3.1",
    "next": "12.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@svgr/cli": "5.5.0",
    "eslint": "^7.32.0 || ^8.2.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-next": "12.2.5",
    "eslint-config-prettier": "^8.5.0",
    "eslint-import-resolver-alias": "^1.1.2",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.28.0",
    "eslint-plugin-react-hooks": "^4.3.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "husky": "^8.0.1",
    "lint-staged": "^13.0.3"
  }
}
```

- "extends": İçerisindeki 'airbnb' ve diğerlerini de isteğe bağlı şekilde eklenip çıkaralabiliyor.
- "plugins": Kullanılmak istenen pluginler buraya eklenir.
  Örneğin, Plugins içerisindeki settingste ->
  "alias": {
  "map": [["@", "."]],
  "extensions": [".js", ".jsx"]
  } görevi:

  uzantıyı daha basit şekilde gösterir, alt dosyaları ile göstermez, onun yerine seçtiğimiz sembolu kullanır. (absolute path'i eslintte hata dönmemesi için oluşturulmasına yardımcı olur.)

- "rules": Kullanılmak istenen rules varsa onlar buraya eklenir.

# Aşağında görülen kod bloğu .eslintignore dosyasına aittir

Eslint'in incelemesini istemediğimiz klasörleri bunun içinde belirtiriz.
Örneğin;

```bash
node_modules
.next
public
jsconfig.json
```

# Kolay otomatik düzeltilebilir içe aktarma sıralaması

```bash
eslint-plugin-simple-import-sort
```

# İndirme

```bash
yarn add --save-dev eslint-plugin-simple-import-sort
```

[Simple import sort paketi](https://yarnpkg.com/package/eslint-plugin-simple-import-sort)

.eslintrc dosyasında plagins kısmına simple-import-sort plugin'ini eklenir:

```json
{
  "plugins": ["simple-import-sort"]
}
```

- Ardından, içe ve dışa aktarmaları sıralamak için kuralları ekleyin:

```json
{
  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
}
```

# Aşağında görülen kod bloğu .prettierrc dosyasına aittir

- Kodu belirlenen kurallara göre düzenler ve tekrardan yazar.

```json
"printWidth":80, //Specify the line length that the printer will wrap on.
"semi": false, //don't use semicolon.
"tabWidth": 2, //Specify the number of spaces per indentation-level.
"singleQuote": true,
"trallingComma": "none", //No trailing commas.
"bracketSpacing": true
```

# Bracket Spacing

Parantez öncesi ve sonrası boşluk ayarı

`Valid options:`

- true - Example: { foo: bar }.
- false - Example: {foo: bar}.

# .prettierignore

- İgnore edilecek dosyalar için .prettierignore dosyası oluştur ve format edilmeyecek olan dosyaları yaz.

```js
.next
node_modules
```

# Absolute Path

- Absolute path tanımlamak için "jsconfig.json" dosyası oluşturulur, bu dosya "vs-code" içinde çalışıyor ve bir js projesinin roota sahip olduğunu göstermekte.

- Aşağında görülen kod bloğu jsconfig dosyasına aittir:

```json
"compilerOptions":{
 "baseUrl": ".",
 "paths": {
  "@/*": ["./*"]
 }
},
"exclude": ["node_modules", ".next"]
```

- Örnek:
- jsconfig dosyası (src kullanarak):

```json
"compilerOptions":{
 "baseUrl": ".",
 "paths": {
  "@/*": ["./src/*"]
 }
},
"exclude": ["node_modules", ".next"]
```

yazarak rootu "**@**" olarak tanımlıyoruz ve bazı klasörleri hariç tutmak için exclude ediyoruz.

- Eslint'in bu rootu resolve edebilmesi için eslint-import-resolver-alias pluginini development mod için yüklüyoruz.
  ve .eslintrc dosyasına settings bölümünü ekleyerek "map" ve "extension"ları giriyoruz.

```js
"settings": {
    "import/resolver": {
      "alias": {
        "map": [["@", "./src"]],
        "extensions": [".js", ".jsx"]
      }
    }
  }
```

---

# Dosya Mimarisi

- Her componentin kendine ait bir klasörü olmalı ve styling, test, stories gibi alt dosyalar bu klasör içerisinde bulunmalı. Aynı zamanda bu componenti export etmek için bir index dosyası bulunmalı, bu sayede birden fazla componenti tekbir dosya import ederek kullanabiliriz.
- Ayrıca components klasörü de bir index dosyası taşır ve onun içinden bütün componentsleri export edebilirsiniz. Böylelikle başka dosyada import ederken tek bir satırda hepsini çekebilirsiniz.
- Componentler olabildiğince sabit yazı içermemeli ki yeniden kullanılabilsin.
- Eğer sabit değişkenler içeren bir dosya yaratıcaksak bunu aynı bir klasör içinde yaratmalıyız(containers/home/customButton).
- Sabit değişkenleri merkezi bir yerde toplamak için constants klasörü oluşturmalıyız.
- Servisler için services klasörü oluşturabiliriz.
- Aynı şekilde bütün classlarımızı tutmak için utils klasörü oluşturabiliriz.

---

**NOT:**
`style dosyalarına .module eklenme sebebi browser sayfa oluşturken dosyaların karışmamasını sağlamak.`

---

# Custom Hoooks

**Custom Hooks** tekrarlanan kodun önüne geçebilmemiz adına ortaya çıkan bir yapıdır. **Custom Hook** yapısı ile tekrar kullanılabilir fonksiyonlar oluştururuz. Böylelikle daha temiz bir kod yapısı ve basitlik elde ederiz. Bu hook dosyalarını da Hooks klasörü altında toplayabiliriz.

---

# Utils

- Projede fonksiyonların tekrarlı şekilde yazılmaması için kullanılan yöntem.
  Örneğin;
  Utils/cleanPhone.js

```js
export const cleanPhone = (phone) => {
  if (phone.toString()[0] === '0')
    return phone.toString().split(1, phone.toString().length - 1)

  return phone
}
```

Para birimi çeviren fonksiyon ve tarih değiştirme foknsiyonları bunlara örnek verilebilir. Bir çok yerde gerektiğinde yeniden çağrılabilir.

---

# [SVG dosyalarını react componentine çevirme](https://react-svgr.com/docs/getting-started/)

**Önemli:** Yeni sürümlerinde problem olduğu için @svgr/cli@5.5.0 sürümünü development moda yüklüyoruz.

```bash
yarn add -D @svgr/cli@5.5.0
```

- Configleri ayarlayabilmek için .svgo.json dosyasını yaratıyoruz ve aşağıdaki kod satırınını ekliyoruz.

```json
{ "plugins": [{ "removeViewBox": false }] }
```

svg dosyalarını componente çevirmek için package.json a scrip yazıyoruz.

```json
"svgr": "svgr icons -d components/icons --svgo-config .svgorc.json"
```

- Burada svgr key wordümüz icons dosyamızdaki svg dosyalarını al components klasöründe icons klasörünü oluştur ve içerisine .svgorc.json dosyasındaki svgo-configlerini kullanarak react componentlerini oluştur diyoruz.

- Command propta `yarn svgr` diyerek çalıştırdığımızda bize svg dosyalarını react componenti olarak çıkaracak, aynı zamanda icons klasöründe index dosyası yaratarak bütün componentleri export edecek böylelikle bu componentleri çağırmak istediğimizde tek satırda çağırabileceğiz.

- svg dosyasıyla birlikte gelen fill attributesunu current color'a çevirmek için scripte yeni kod ekliyoruz.

```json
"svgr": "svgr icons -d components/icons --replace-attr-values \"#fff=currentColor\" --svgo-config .svgorc.json"
```

# Package.json dosyası

```json
"scripts":{
    "lint": "eslint . --ext .js,.jsx",
    "lint:fix": "yarn lint -- --fix",
    "format": "prettier --write ./**/*.{js,jsx}",
    "svgr": "svgr icons -d components/icons --replace-attr-values \"#fff=currentColor\" --svgo-config .svgorc.json"
}
```

husky lint-staged bunlar sayesinde belli scriptleri çalıştırmaya yarıyor.

`"lint": "eslint . --ext .js,.jsx"` => Belirtilen uzantılarda hata kontrolü yapmakta (terminalde gösterir).

`"lint:fix": "yarn lint -- --fix"` => Çözülebilecek hataları kendisi çözebiliyor.

`"format": "prettier --write ./**/*.{js,jsx}"` => Prettierda verilen kurallara göre kodu düzenler.

---

# [Husky](https://github.com/typicode/husky) & [Lint-Staged](https://github.com/okonet/lint-staged) kurulumu

- lint-staged "Aşamalı" dosyalar üzerinde çalışmak üzere özel olarak tasarlanmıştır. Bu, değiştirdiğiniz veya oluşturduğunuz ancak projenizi henüz taahhüt etmediğiniz dosyalar anlamına gelir. Aşamalı dosyalar üzerinde çalışmak, herhangi bir zamanda atmanız gereken dosya sayısını sınırlar ve iş akışını hızlandırır. Yapılandırdığınız komutlar "pre-commit" çalıştıracaktır. Projenize dosya eklemeye çalışırken, terminalinizde ESLint'in çalıştığını göreceksiniz. Tamamlandığında, kodu işlemeden önce düzeltmeniz gereken linting hatalarıyla başarılı bir şekilde değiştirilmiş olur.

- yarn kullanarak geliştirici modda lint-staged indirilir.

```bash
yarn add -D lint-staged
```

Link-staged package.json dosyası içerisinde tanımlanmaktadır.

- Aşağıdaki kod bloğunda dosyalar yüklenmeden önce hangi scriptlerin çalışacağı tanımlanmış olur.

```json
"lint-staged": {
    "**/*.{js,jsx}": [
      "yarn format",
      "yarn lint",
      "yarn lint:fix"
    ]
  },
```

- Husky

```bash
yarn add husky -D
```

- Yüklemeden sonra otomatik olarak etkinleştirmek için aşağıdaki komut satırını package.json'ınıza eklemeniz gerekir.

```json
"prepare": "husky install"
```

- Husky'nin hookları oluşturabilmesi için .git dosyası gerekiyor bunun için `git init` kodunu çalıştırıyoruz.

- Husky bir yarn ve npm paketi olmakla beraber git hooks’ ları kullanmamızı sağlar.

```bash
yarn prepare
```

```bash
npx husky add .husky/pre-commit "yarn lint-staged"
```

# Aşağında görülen kod bloğu husky ve lint-stated kurulumundan sonra Package.json dosyasına aittir

```json
"scripts":{
    "lint": "eslint . --ext .js,.jsx",
    "lint:fix": "yarn lint -- --fix",
    "format": "prettier --write ./**/*.{js,jsx}",
    "svgr": "svgr icons -d components/icons --replace-attr-values \"#fff=currentColor\" --svgo-config .svgorc.json",
    "prepare": "husky install"
},
"lint-staged": {
    "**/*.{js,jsx}": [
      "yarn format",
      "yarn lint",
      "yarn lint:fix"
    ]
  },
```

```bash
git add .husky/pre-commit
```

```json
#!/bin/sh.
"$(dirname "$0")/_/husky.sh"
yarn lint-staged
```

- Yukarıdaki kod bloğu ".husky" dizinin içerisinde oluşan "pre-commit" dosyasıdır.
- Gerekli her şeyi yaptıktan sonra test etmek için ->

1. `git .`
2. `git commit -m "Test commit with husky"`
3. `git push -u origin master`

---
