## We Gather in God’s Name
{{ "layouts/shortcodes/he/greeting-blessedbegod.md" | readFile | safeHTML }}
{{ "layouts/shortcodes/he/collect-purity.md" | readFile | safeHTML }}
{{ "layouts/shortcodes/lordhavemercy.md" | readFile | safeHTML }}

### Salutation and Collect
{{ "layouts/shortcodes/letuspray.md" | readFile | safeHTML }}

{{/* propercollect */}}
### The Collect of the Day
Officiant:
> {{ readFile (path.Join "layouts/shortcodes/proper/collect" (default $.Page.Params.proper (.Get 0))) }}

**People:**
> **Amen.**
