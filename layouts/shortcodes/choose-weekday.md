{{/* choose-weekday 0=office 1=item */}}
{{/* ----------------------------------------------- */}}
{{/* Parts of liturgy that change a lot can be encoded in json for */}}
{{/* easy reference. Returned record may contain: */}}
{{/* rubric (optional text to be included) */}}
{{/* path (path to .md file to include */}}
{{/* Get day from $.Page.Params.weekday */}}
{{/* ----------------------------------------------- */}}
{{ $DEBUG := false }}
{{/* ----------------------------------------------- */}}
{{/* TODO consider retrieving some info from $.Page.Params.season, etc.? */}}
{{/* $season := default ($.Page.Params.season) (.Get 0) */}}
{{ $office := (.Get 0) }}
{{ $item := (.Get 1) }}
{{ $day := $.Page.Params.weekday }}
{{ $rubric := ""  }}
{{ $path := "" }}
{{  with first 1 (where (where (where $.Site.Data.choose "office" $office) "item" $item) "day" $day)  }}
	{{ $rubric = default "" (index . 0).rubric }}
	{{ $path   = default "" (index . 0).path   }}
{{ end }}
{{ if $DEBUG }}{{ printf "=== DEBUG === office=%s  item=%s day=%s rubric=%s path=%s" $office $item $day $rubric $path }}{{ end }}
{{ if $rubric }}
#### {{ $rubric }}
{{ end }}
{{ $fullpath := printf "layouts/shortcodes/%s" $path }}
{{ readFile ($fullpath | safeHTML) }}
