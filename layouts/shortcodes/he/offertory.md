##### The altar is prepared
##### The people stand as able.
{{ if (.Get 0)}}
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes" (.Get 0)) }}
{{ if fileExists $filename }}
### Offertory Hymn
{{ $filename | readFile | safeHTML }}
{{ else }}
### Offertory Hymn: {{ (.Get 0) }}
{{end}}{{end}}
