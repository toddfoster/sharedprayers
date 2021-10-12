<ul>
{{ range $.Site.Data.bcprcl }}
<li>{{ . }}</li>
{{ end }}
</ul>

bcprcl:
{{ range where (where (where $.Site.Data.bcprcl "year" (.Get 0)) "day" (.Get 1)) "lesson" (.Get 2) }}
    - {{ .citation | safeHTML }}
{{ end }}


dump:
{{ range $.Site.Data.bcprcl }}
     {{ . }}
{{ end }}
