## We Offer Ourselves to God

##### The altar is prepared

{{ if (.Get 0)}}
##### At outdoor liturgies, an offertory may be sung:

### Offertory Hymn
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes" (.Get 0)) }}
{{ $filename | readFile | safeHTML }}
{{end}}
