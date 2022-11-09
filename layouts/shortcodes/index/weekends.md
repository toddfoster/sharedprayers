{{/* index/weekends.md */}}
{{/* parameters: [month [year]] */}}
{{/* TODO: add front matter to know whether to list for St. Thomas' index page */}}

{{ $DEBUG := false }}
{{ if $DEBUG }}{{ printf "DEBUG: running index/weekends.md"  }}{{ end }}

{{/* Figure out date: argument or system date */}}
{{ $year_month := now.Format "2006-01" }}
{{ with .Get 0 }}
  {{ $year_month = . }}
{{ end}}
{{ $datestring := printf "%s-01" $year_month }}
{{ if $DEBUG }}{{ printf "DEBUG: date is %s" $datestring }}{{ end }}
{{ $date := time $datestring }}
{{ if $DEBUG }}{{ printf "DEBUG: date is %s" $date }}{{ end }}

{{ $limit := $date.Format "2006-01" }}
{{ $results := first 2 (where (.Site.RegularPages.GroupByDate  "2006-01" "asc") ".Key" "ge" $limit) }}

{{ $weekends := slice }}
{{ $weekdays := slice }}
{{ range first 1 $results }}{{ range .Pages }}
{{ if or (eq "Sunday" (.Date.Format "Monday")) (eq "Saturday" (.Date.Format "Monday")) }}
{{ if not (in (.Param "proper") "lff2018") }}
{{ $weekends = $weekends | append . }}
{{ end }}
{{ else }}
{{ $weekdays = $weekdays | append . }}
{{ end }}{{ end }}{{ end }}

{{/* Pick up first weekend of following month */}}
{{- range first 1 $results.Reverse }}{{ range .Pages }}
{{ if or (eq "Sunday" (.Date.Format "Monday")) (eq "Saturday" (.Date.Format "Monday")) }}
{{ if lt .Date.Day 7 }}
{{ if not (in (.Param "proper") "lff2018") }}
{{ $weekends = $weekends | append . }}
{{ else }}
{{ $weekdays = $weekdays | append . }}
{{ end }}{{ end }}{{ end }}{{ end }}{{ end }}


**Weekend  liturgies for {{ $date.Format "January" }}:**
{{ range $weekends }}
- [{{ .Date.Format "Monday, 2 January 2006" }}: {{ .Title }}]({{ .Permalink }}){{ end }}

**Weekday  liturgies for {{ $date.Format "January" }}:**
{{ range $weekdays }}
- [{{ .Date.Format "Monday, 2 January 2006" }}: {{ .Title }}]({{ .Permalink }}){{ end }}


