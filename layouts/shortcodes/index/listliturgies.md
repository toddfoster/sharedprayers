{{/* index/weekends.md */}}
{{/* parameters: tags [year-month] */}}
{{/* TODO: add front matter to know whether to list for St. Thomas' index page */}}

{{ $DEBUG := false }}
{{ if $DEBUG }}{{ printf "DEBUG: running index/weekends.md"  }}{{ end }}

{{ $tags := slice "StT" }}
{{ with .Get 0 }}
  {{ $tags = split . " " }}
{{ end }}

{{/* Figure out date: argument or system date */}}
{{ $year_month := now.Format "2006-01" }}
{{ with .Get 1 }}
  {{ $year_month = . }}
{{ end}}
{{ if $DEBUG }}{{ printf "DEBUG: tags are %s" (delimit $tags ", ") }}{{ end }}
{{ if $DEBUG }}{{ printf "DEBUG: year_month is %s" $year_month }}{{ end }}

{{ $results := first 2 (where (.Site.RegularPages.GroupByDate  "2006-01" "asc") ".Key" "ge" $year_month) }}

{{ $liturgies := slice }}
{{ range first 1 $results }}{{ range .Pages }}
{{ $liturgies = $liturgies | append . }}
{{ end }}{{ end }}

{{/* Pick up first weekend of following month */}}
{{- range first 1 $results.Reverse }}{{ range .Pages }}
{{ if lt .Date.Day 7 }}
{{ $liturgies = $liturgies | append . }}
{{ end }}{{ end }}{{ end }}

{{ range where $liturgies "Params.tags" "intersect" $tags }}
- [{{ .Date.Format "Monday, 2 January 2006" }}: {{ .Title }}]({{ .Permalink }}){{ end }}

