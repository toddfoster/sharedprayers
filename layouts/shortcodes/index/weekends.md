{{/* index/weekends.md */}}
{{/* parameters: [month [year]] */}}

{{ $DEBUG := true }}
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

**TODO exclude lff2018 from weekends **

**Weekend  liturgies for {{ $date.Format "January" }}:**
{{ range first 1 $results }}{{ range .Pages }}
{{- if or (in "Sunday" (.Date.Format "Monday")) (in "Saturday" (.Date.Format "Monday")) }}
- {{ .Date.Format "Monday, 2 January 2006" }}: {{ .Title -}}
{{ end }}{{ end }}{{ end }}


**Weekend liturgies for {{ $date.Format "January" }}:**
{{ range first 1 $results }}{{ range .Pages }}
- {{ .Date.Format "Monday, 2 January 2006" }}: {{ .Title -}}
{{ end }}{{ end }}

{{- range first 1 $results.Reverse }}{{ range first 1 .Pages }}
- {{ .Date.Format "Monday, 2 January 2006" }}: {{ .Title }}
{{ end }}
{{ end }}

