# sharedprayers

This is a static site to share liturgies for prayer. The top of each liturgy can contain a QR code, enabling people to share with one another by displaying the code and allowing someone else to scan it on their own smartphone.

# Instructions
- Add liturgies under content. Try to be tidy (organize by community, by year). Use `hugo server` to preview.
- Run `./makeqrcodes` in root directory to automatically generate QR codes for every page.
- Run hugo to build static pages
- Push to git hub to deploy

# Tasks
- ~~propercollect~~
- ~~propertitle~~
- ~~Use "single" page templates to include QR code?~~
- ~~Use "single" template to include optional headers~~
   + title (read in from file using named proper)
   + liturgydate
   + bcppage
- Translate liturgydate to my preferred form
- Tighten up he-covid to minimize manual bits: he-covid-epiphany, he-covid-lent
- Create omnibus shortcodes (nesting shortcodes doesn't seem to work) to go between hymns, scriptures
  - wegather
  - werespond (with parameter for custom generic/custom PoP response?)
  - greatthanksgiving-a
  - wereceive
  - dismissal
- Optionally imbed hymns in the shortcodes?
- Share these prayers as part of a page template?
- properpreface (maybe?)
- Provide scriptures in manner similar to collects
- Allow SharedPrayers to be customized for different groups
  - what parts of a prayer need to be customized? (e.g., PoP, hymns)
  - provide a spreadsheet for a year's worth of prayers
  - parse that spreadsheet into a file hierarchy that is easily accessed from hugo
- Format Shared Prayers to print well to replace bulletins?
  - First step: a sticker with the shared prayers QR code on the mini-bulletin.
  - Second step: a sticker with the shared prayers QR code & explanation in the front cover of the prayer books in the pews.
