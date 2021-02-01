## We Gather in God’s Name
{{ "layouts/shortcodes/greeting-blessedbegod.md" | readFile | safeHTML }}
{{ "layouts/shortcodes/collect-purity.md" | readFile | safeHTML }}
{{ "layouts/shortcodes/gloriaexcelsis.md" | readFile | safeHTML }}

### Salutation and Collect
{{ "layouts/shortcodes/letuspray.md" | readFile | safeHTML }}

{{/* propercollect */}}
### The Collect of the Day
Officiant:
> {{ readFile (path.Join "layouts/shortcodes/proper/collect" (default $.Page.Params.proper (.Get 0))) }}

**People:**
> **Amen.**
