##### The ministers receive the Sacrament in both kinds, and then immediately deliver it to the people. All are welcome to receive at Christ's table. If you would prefer to receive a verbal blessing instead of communion, cross your arms over your chest to indicate this.
{{ if (.Get 0)}}
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes" (.Get 0)) }}
{{ if fileExists $filename }}
### Communion Hymn
{{ $filename | readFile | safeHTML }}
{{ else }}
### Communion Hymn: {{ (.Get 0) }}
{{end}}{{end}}

{{ if (.Get 1)}}
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes" (.Get 1)) }}
{{ if fileExists $filename }}
### Communion Hymn
{{ $filename | readFile | safeHTML }}
{{ else }}
### Communion Hymn: {{ (.Get 1) }}
{{end}}{{end}}
