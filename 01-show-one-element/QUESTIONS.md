# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Teksts pēc lapas atjaunošanas ir paslēpts, tas tika atklāts tikai pēc momentā, kad lietotājs klikšķina uz pogu.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Kad es nonēmu to `window.addEventListener("load", function(){` daļu no koda, tad visa tā funkcija ar linku vienkārši nepārāda to parējo tekstu. Tādēļ visa funkcij nestrāda.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Ar šo funkciju - addEventListener, var izvēlēties noteikto notikumu un noteikt tam kaut kādu darbību. 
