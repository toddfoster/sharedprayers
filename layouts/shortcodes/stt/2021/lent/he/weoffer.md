## We Offer Ourselves to God

##### The altar is prepared

{{ if (.Get 0)}}
##### At outdoor liturgies, an offertory may be sung:

### Offertory Hymn
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes" (.Get 0)) }}
{{ $filename | readFile | safeHTML }}
{{end}}

{{ "layouts/shortcodes/he/prayera.md" | readFile | safeHTML }}
{{ "layouts/shortcodes/he/lordsprayer1.md" | readFile | safeHTML }}

### The Breaking of the Bread
Presider:
> Christ our Passover is sacrificed for us.

**People:**
> **Therefore let us keep the feast.**

Presider:
> The Gifts of God for the People of God.