# sharedprayers

This is a static site to share liturgies for prayer. The top of each liturgy can contain a QR code, enabling people to share with one another by displaying the code and allowing someone else to scan it on their own smartphone.

# Instructions
- Add liturgies under content. Try to be tidy (organize by community, by year). Use `hugo server` to preview.
- Run `./makeqrcodes` in root directory to automatically generate QR codes for every page.
- Run hugo to build static pages
- Push to [github](https://github.com/toddfoster/sharedprayers) to deploy

# Conventions
- he/yyyy/sss/he/werespond template takes two optional arguments for the call/response of the prayers of the people. Default is "Lord in your mercy" "hear our prayer."

# Tasks
- x propercollect
- x propertitle
- x Use "single" page templates to include QR code?
- x Use "single" template to include optional headers
    + x title (read in from file using named proper)
    + x liturgydate
    + x bcppage
- x Translate liturgydate to my preferred form
- x Tighten up he-covid to minimize manual bits: he-covid-epiphany, he-covid-lent
- x Create omnibus shortcodes (nesting shortcodes doesn't seem to work) to go between hymns, scriptures. Or maybe just lots of hierarchies of shortcodes built for each year/season: stt/2021/he/wegather/epiphany.
    - x wegather
    - x werespond (with parameter for custom generic/custom PoP response?)
    - x greatthanksgiving-a
    - x wereceive
    - x dismissal
- x Share these prayers as part of a page template?
- x Scriptures as links to oremus
- x Optionally embed hymns in the shortcodes?
- Lessons (two parameters: first/second and reference)
    - x automatically provide appropriate introduction to reading
	- x if lesson is not provided as an inner, provide a link to oremus
	- add a blank line between paragraphs
	- provide actual scriptures for HE readings
	- provide actual scriptures for Office readings
- Gospels
    - x automatically provide introduction to reading (easier!)
	- x if lesson not provided as an inner, provide link to oremus
	- add a blank line between paragraphs
	- provide actual scriptures for HE readings
	- provide actual scriptures for Office readings
- Psalms
    - x Encode psalms for responsive reading
	- x automatically provide Psalm if not in Inner
	- provide partial Psalms for HE readings
    - parse out multiple Psalms for office readings

# Maybe/Someday
- properpreface (maybe?)
- Provide scriptures in manner similar to collects
- Allow SharedPrayers to be customized for different groups
  - what parts of a prayer need to be customized? (e.g., PoP, hymns)
  - provide a spreadsheet for a year's worth of prayers
  - parse that spreadsheet into a file hierarchy that is easily accessed from hugo
- Format Shared Prayers to print well to replace bulletins?
  - First step: a sticker with the shared prayers QR code on the mini-bulletin.
  - Second step: a sticker with the shared prayers QR code & explanation in the front cover of the prayer books in the pews.
