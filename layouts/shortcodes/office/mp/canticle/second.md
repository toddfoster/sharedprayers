{{/* office/mp/canticle/second.md 0=season 1=day  */}}
{{/* ----------------------------------------------- */}}
{{/* TODO: DRY: combine with first.md */}}
{{/* ----------------------------------------------- */}}
{{ $DEBUG := false }}
{{/* ----------------------------------------------- */}}
{{ $season := default ($.Page.Params.season) (.Get 0) }}
{{ if eq $season "pentecost" }} {{ $season = "proper" }} {{ end }}
{{ $day := default "monday" (default ($.Page.Params.weekday) (.Get 1)) }}
{{ $canticleref := "default" }}
{{  with first 1 (where (where (where (where $.Site.Data.bcpcanticles "office" "mp") "season" $season) "day" $day) "order" "second") }}
	{{ $canticleref = (index . 0).canticle }}
{{ end }}
{{ if $DEBUG }}{{ printf "=== DEBUG === season=%s  day=%s" $season $day }}{{ end }}
{{ if $DEBUG }}{{ printf "=== DEBUG === canticleref = %s" $canticleref }}{{ end }}
{{ $canticle := printf "layouts/shortcodes/canticles/%s.md" $canticleref }}
{{ readFile $canticle | safeHTML }}
