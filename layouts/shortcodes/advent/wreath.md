{{ $week := default $.Page.Params.proper (.Get 0) }}
{{ $sentence := printf "layouts/shortcodes/advent/wreathchoices/%s.md" $week }}
{{ if not (fileExists $sentence) -}}{{ $sentence = "layouts/shortcodes/advent/wreathchoices/default.md" }}{{- end}}
{{ readFile $sentence | safeHTML }}
