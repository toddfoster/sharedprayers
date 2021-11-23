{{ $week := default $.Page.Params.proper (.Get 0) }}
{{ $sentence := printf "layouts/shortcodes/advent/ocomechoices/%s.md" $week }}
{{ if not (fileExists $sentence) -}}{{ $sentence = "layouts/shortcodes/advent/ocomechoices/default.md" }}{{- end}}
{{ readFile $sentence | safeHTML }}
