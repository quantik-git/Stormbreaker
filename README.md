# Framework
Documentation for CSS Framework based on flexbox with responviness and accessibility in mind.

---
## Objectives:
- [x] Basic site Layouts
- [x] Sticky navbar
- [ ] Hamburger menu
- [ ] Landmarks
- [ ] Headings
- [ ] Audio tag
- [ ] Figure
- [ ] Img tag responsive
- [ ] Form label
- [ ] Form fieldset
- [ ] Form date
- [ ] Datetime tag
- [ ] Create Screen Reader only class
- [ ] Contrast colors hsl()?
- [ ] Meaningfull anchor tags
- [ ] Accesskey attribute
- [ ] Tabindex? pode ser confuso

---
### Atom snippets code:

```HTML
<!DOCTYPE html>
<html lang="pt" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout</title>
    <link rel="stylesheet" href="Framework.css">
    <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Montserrat" rel="stylesheet">
  </head>
  <body class="full">

      <header class="sticky-top">
        <nav class="flexContainer">
          <ul class="flexContainer flexCenter flexStart fill">
            <li><a href="#">Brand Name</a></li>
          </ul>
          <ul class="flexContainer flexCenter flexEnd links-hover">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </nav>
      </header>

      <aside class="sidebar-left">
        <h4>Left Sidebar</h4>
      </aside>

      <main>
        
      </main>

      <aside class="sidebar-right">
        <h4>Right Sidebar</h4>
      </aside>

      <footer class="flexContainer flexCenter">
        <h4 class="">Footer</h4>
      </footer>

  </body>
</html>
```
