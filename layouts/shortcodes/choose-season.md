{{/* choose-season 0=office 1=item (optional 2=season) */}}
{{/* ----------------------------------------------- */}}
{{/* Parts of liturgy that change a lot can be encoded in json for */}}
{{/* easy reference. Returned record may contain: */}}
{{/* rubric (optional text to be included) */}}
{{/* path (path to .md file to include */}}
{{/* If not specified, get day from $.Page.Params.season */}}
{{/* TODO DRY: nearly identical to choose.md */}}
{{/* ----------------------------------------------- */}}
{{ $DEBUG := false }}
{{/* ----------------------------------------------- */}}
{{ $office := (.Get 0) }}
{{ $item := (.Get 1) }}
{{ $day := default $.Page.Params.season (.Get 2) }}
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
