---
title: Work in Progress
date: 2021-03-04
---

### TODO
- x Handle canticles in psalm shortcode(?)
- x Thanksgiving litany for 2021, in template for 2022
- x Generate liturgies for 2022
- x Bring in Prayer B for 2022
- x Bring in other post-communion, longer fraction for 2022
- x Evaluate, Fix up, and copy in texts for lectionary from lectionarypage.net
- x Psalms draw alternatively from lpn folder?
- Generate lesser feasts
- Get consistent on presider vs. celebrant: match BCP
- Review shortcodes for updated formatting

### MAYBE/SOMEDAY
- Consider lost formatting in lectionarypage.net texts (e.g., Hebrew poetry in Wisdom 3.1-9)
- Ensure all oremus texts are reproduced in lpn folder: can oremus be removed?
- Check that all scriptures in bcprcl are available
- script to generate responsive psalms for all partial psalms in rcl
- lectionary pages (all readings for a season / year)
- summaries of each days lesson references for easy cut/paste
- Calendar interface?
- Separate generated liturgies for St. Thomas', generic?
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
- Full years for each prayer?

### x Script to generate liturgies - 4 Nov 2022
- x Generate dates for a liturgical year
    - x all Sundays relative to SundayAfterChristmas or EasterSunday or Epiphany1 or SundayAfterNextXmas
	- x Thanksgiving is special (fourth Thursday in Nov)
	- x some fixed dates (encode precedence rules? fix by hand?)
- x For each feast/date, build from template
- x  by default only build future dates (parameter; assume current year; 2022 starts on advent1 in 2021)
- x Directory of templates in order of precedence:
     - directories: 2022 | yearc | default
	 - files: first-sunday-of-advent | advent | weekday | weekend | default

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
