# sharedprayers

This is a [static site](https://www.sharedprayers.net) to share liturgies for prayer, generally based on the [Book of Common Prayer](https://www.episcopalchurch.org/what-we-believe/book-common-prayer/) currently in use by [The Episcopal Church](https://www.episcopalchurch.org/). The top of each liturgy can contain a QR code, enabling people to share with one another by displaying the code and allowing someone else to scan it on their own smartphone.

This site was originally composed during the COVID-19 pandemic for use both remotely and without requiring physical contact between people and objects when we began gathering (tentatively and outdoors). 

[See the site!](https://www.sharedprayers.net)

# Prerequisites
"It runs on my box!"

**WARNING** In 2024, SharedPrayers makes _extensive_ use of file-system symlinks. These [were deprecated](https://discourse.gohugo.io/t/filesystem-soft-links-broken/52781) in v.0.123.0. So, without extensive re-work, SharedPrayer is now stuck at hugo v.0.122.0. It won't build with anything newer.

Fortunately, hugo is just building a static website. So there's no danger to deploying a website built with old hugo code. It just lacks newer features/bug-fixes for the build system. But this isn't just technical debt; for SharedPrayers it's a technical mortgage! I installed the needed version of hugo with `go install github.com/gohugoio/hugo@v0.122.0`. Then make sure it's in your path and you're running the right version. (I removed the system-installed hugo.)

At a minimum you're going to want:
- [hugo](https://gohugo.io/)
- [python](https://www.python.org/)
- [myqr](https://pypi.org/project/MyQR/): a Python library to generate QR codes
- [pyexcel_ods3](https://pypi.org/project/pyexcel-ods3/): a python library to parse LibeCalc files
- [LibreOffice](https://www.libreoffice.org/) is my tool of choice for editing spreadsheets. Why are you still paying the Microsoft tax? Especially now that they want to sell you an annual subscription. LibreOffice (and Open/Star Office before it) have been my go-to office suite for nearly 30 years!

# Instructions
- Fill out a spreadsheet page for the desired year.
- Run `./ods2sp` to build liturgies for that year.
- Run `./makeqrcodes` in root directory to automatically generate QR codes for every page.
- Run `hugo` to build static pages
- Push to [github](https://github.com/toddfoster/sharedprayers) (or your host of choice) to deploy

# Tags
There's a tags field that can be filled in, and picked up by index pages to automatically include select pages. The way I include them 
`index/listliturgies "StT weekend"` will pick up pages containing _all_ the specified tags for the current month _or_ the first week of the subsequent month. Because that's how I like to populate my indices.

# Acknowledgements
No effort stands alone. I particularly want to recognize important inspirations and data sources specific to this project:
- Kelly Puckett, maintainer of the invaluable [lectionarypage.net](http://lectionarypage.net/).
- Charles Wohlers of [satucket.com](http://satucket.com/bcp/), an early provider of digital texts of the BCP.
- The Rev. Greg Johnston, author of the amazing [venite.app](https://www.venite.app/home) and [Common Prayer Online](https://www.commonprayeronline.org/) with [readings for the daily office](https://www.commonprayeronline.org/en/daily-readings), who generously shares [digital resources](https://github.com/gbj), especially json encodings of data from the BCP.

# Tasks

### URGENT
- Update Palm Sunday to take account of liturgical year
- Update to work with current version of hugo
- Establish good generic liturgies

### IDEAS
- provide aliases to bcp/xxx to include by page number
- provide he/rite1/ versions
- provide he/eow/ versions

### TODO
- add tags to filenames created by ods2sp
- update lff2json to remove accents from slugs
- regenerate & re-import lff2018keys.csv into liturgy plans
- x add lff2018 feasts to template spreadsheet
- x use lff2018.json to generate collects, lessons from shortcodes
- x provide options & defaults for page numbers, hymn numbers for sanctus, Lord's prayer, fraction
- Psalms  page to access psalms individually
- ods2sp: only regenerate pages older than spreadsheet

### MAYBE/SOMEDAY
- (python) draw hymns from hymntracker spreadsheet automatically (or build json table with defaults?)
- (python) generate monthly home pages for the year; quick script to copy into index.html, and update archive/he-current.md to forward to the current week
- (python) build json table of dates for each sunday/bcp holiday for 2000-2100 (automate dates in templates)
 - (python) Daily Office RCL: begin by just drawing down from https://www.commonprayeronline.org/api/daily_summary/en/2022-2-16.json
- Add proper prefaces to Prayer A, Prayer B using bcpcollects
- Calendar interface simple range exercises
- Liturgical colors
- rename hymns/* to match h- l- wlp- convention of shortcode hymns
- Store psalms in json?
- Store scriptures in json?!?
- Add json db of BCP page number for Pss, Eucharistic Ps selections
- Test suite for lesson shortcode
- About
    - Inspiration & Intended uses
	- Opinionated options, readings
    - About me
	- About QR codes
	- About shortcodes
	- About customization for your organization
- Simplified Anglican Chant
- Get consistent on presider vs. celebrant: match BCP
- Review shortcodes for updated formatting
- Be able to select which readings/collects when alternatives are available (alt=2) -- or just require manual override?
- Generate lesser feasts
- Versioned shortcodes to maintain older liturgies?
- Consider lost formatting in lectionarypage.net texts (e.g., Hebrew poetry in Wisdom 3.1-9)
- (python) Ensure all oremus texts are reproduced in lpn folder: can oremus be removed?
- (python) Check that all scriptures in bcprcl are available
- script to generate responsive psalms for all partial psalms in rcl
- Separate generated liturgies for St. Thomas', generic?
- add BCP page numbers to more pieces
- Eucharist
    - For each season
    - For Major Feasts during each season
- Full years for each prayer?

### 2022 February
- x summaries of each week's lesson references for easy cut/paste
- x lectionary pages (all readings for a season / year)
- x Combine non-hymn part of he/communion into About Communion options
- x Add second parameter to hymn for "Processional" "Anthem" etc.
- x yaml/toml db for lff/saints -- converted lff2018 to json

### 2022 January
x Daily Office
    x For each season
- x Add json db of hymns: {{% hymn L-20 %}} -- Greg Johnstone provides!

### 2021
x Finish out Advent, Xmas liturgy templates
x Abandon template idea; build from spreadsheet (`ods2sp`)

### 27 November 2021
- x DRY he/lesson and office/lesson
- x DRY shortcode psalm.md(older) and  he/psalm.md
- x Handle canticles in psalm shortcode(?)
- x Thanksgiving litany for 2021, in template for 2022
- x Generate liturgies for 2022
- x Bring in Prayer B for 2022
- x Bring in other post-communion, longer fraction for 2022
- x Evaluate, Fix up, and copy in texts for lectionary from lectionarypage.net
- x Psalms draw alternatively from lpn folder?

### x Script to generate liturgies - 4 Nov 2021
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

### Super-old
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
- Eliminate "season" front matter in favor of proper (translate for daily office?)
- Finish tidying up evening prayer
- Stations of the cross slides / liturgy
- Nested shortcode parameters via scratch or pipe?
- Lessons (two parameters: first/second and reference)
    - x automatically provide appropriate introduction to reading
	- x if lesson is not provided as an inner, provide a link to oremus
	- add a blank line between paragraphs
	- Provide references for HE readings
	- Provide references for Office readings
	- provide actual scriptures for HE readings
	- provide actual scriptures for Office readings
- Gospels
    - x automatically provide introduction to reading (easier!)
	- x if lesson not provided as an inner, provide link to oremus
	- add a blank line between paragraphs
	- Provide references for readings
	- provide actual scriptures for HE readings
- Psalms
    - x Encode psalms for responsive reading
	- x automatically provide Psalm if not in Inner
	- Provide references for HE readings
	- Provide references for Office readings
	- provide partial Psalms for HE readings
    - parse out multiple Psalms for office readings
- x Slideshows
    - Adopt styles from remark.js intro slideshow (e.g., columns, colors)
- About
    - Archives
	- Slides
 	- Resources / Tools
	- Custom
	- Author
	- BCP / TEC
x properpreface (maybe?)
x Provide scriptures in manner similar to collects
x Allow SharedPrayers to be customized for different groups
  x what parts of a prayer need to be customized? (e.g., PoP, hymns)
  x provide a spreadsheet for a year's worth of prayers
  x parse that spreadsheet into a file hierarchy that is easily accessed from hugo
x Format Shared Prayers to print well to replace bulletins?
  x First step: a sticker with the shared prayers QR code on the mini-bulletin.
  - Second step: a sticker with the shared prayers QR code & explanation in the front cover of the prayer books in the pews.
