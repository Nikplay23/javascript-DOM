# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

Lai atrast noteiktus filmus un paradīt tos caur toggle es izmantoju funkciju querySelectorAll. Tā ļauj izvelēties daudzus elementus. Savukārt, lai paņemt tieši noteiktas filmas, kuriem vajag paradīties, es uzrakstīju "u1.second_five", tādēļ es izvelējos noteikto filmu klasu, kura tiek paradīta ar pogu toogle. Funkcija querySelectorAll ir atšķirīga, tāpēc ka tā ļauj izmantot daudzākus un noteiktus elementus.    