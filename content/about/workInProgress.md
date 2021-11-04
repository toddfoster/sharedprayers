---
title: Work in Progress
date: 2021-03-04
---

### TODO
- Generate liturgies for 2022

### Script to generate liturgies
- x Generate dates for a liturgical year
    - x all Sundays relative to SundayAfterChristmas or EasterSunday or Epiphany1 or SundayAfterNextXmas
	- x Thanksgiving is special (fourth Thursday in Nov)
	- x some fixed dates (encode precedence rules? fix by hand?)
- Get lesser feast dates from a table (month/day/code)
- For each feast/date, build from template
- by default only build future dates (parameter; assume current year; 2022 starts on advent1 in 2021)
- Directory of templates in order of precedence:
     - directories: 2022 | yearc | default
	 - files: first-sunday-of-advent | advent | weekday | weekend | default
### MAYBE/SOMEDAY
- Check that all scriptures in bcprcl are available
- lectionary pages (all readings for a season / year)
- summaries of each days lesson references for easy cut/paste
- Calendar interface?
- Separate generated liturgies for St. Thomas', generic?
- Handle canticles in psalm shortcode(?)
- Be able to select which readings/collects when alternatives are available (alt=2)
- Provide track1lesson(?)
- Add proper prefaces to Prayer A, Prayer B using bcpcollects
- add BCP page numbers to more pieces
- DRY he/lesson and office/lesson
- DRY shortcode psalm.md(older) and  he/psalm.md
- Alternate page template for non-prayers
- About
    - Inspiration & Intended uses
	- Opinionated options, readings
    - About me
	- About QR codes
	- About shortcodes
	- About customization for your organization
- Daily Office
    - For each season
- Eucharist
    - For each season
    - For Major Feasts during each season

### October 2021
- x Proof, adpat, and integrate bcprcl.json from venite.app
- x Also move collects, titles, prefaces into bcpcollects.json
- x Check that generated pages are essential unchanged (except for corrections)

### Older
- Automatic 2021
    - x Python: only generate liturgies for after current date
	- x Adapt spreadsheet to reflect he-current
	- Move to sharedprayers project, creating bin folder
	- Automatically [export from librecalc](https://ask.libreoffice.org/en/question/50035/convert-to-csv-via-command-line-with-all-text-fields-quoted/)
- x Fill out he/blessing stubs
- > Handle canticles that take the place of Psalms
- Texts
    - x Write script to get a single text from [oremus api](http://bible.oremus.org/api.html)
	- x check formatting of downloaded text for suitability
	- x generate slugs for passages by removing spaces, punctuation
	- =loop through references & download texts (instead harvested from lectionarypage.net)
- =Link lectionaryyear: abc to 'a'
- Refactor
    - =script to translate from week to season?
	    Won't necessarily work for Major Feasts on edges of moving seasons
    - x clean up scattered shortcodes to be ready for automated liturgies
- xPentitential Order
    -  x Add greetings for other seasons (manually / logically chosen)
	-  x Move out of Lent into (into root directory of shortcodes?)
