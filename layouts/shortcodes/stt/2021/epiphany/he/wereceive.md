## We Receive the Gift of God
{{ "layouts/shortcodes/he/covid-communion.md" | readFile | safeHTML }}
{{ "layouts/shortcodes/postcommunion-eternal.md" | readFile | safeHTML }}
{{/* postcommunion-eternal */}}

### The Blessing

{{ if (.Get 0)}}
##### The Processional Hymn will only be sung at liturgies meeting outdoors.
### Processional Hymn
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes" (.Get 0)) }}
{{ $filename | readFile | safeHTML }}
{{end}}

### The Dismissal
Deacon:
> Go in peace to love and serve the Lord.

**People:**
> **Thanks be to God.**

_In order to minimize the possibility of infecting others,
please exit the campus immediately._