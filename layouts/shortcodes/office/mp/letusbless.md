{{ $season := default ($.Page.Params.season) (.Get 0) }}
{{ $alleluia := "" }}
{{ if (eq $season "easter") }}{{ $alleluia = " Alleluia, alleluia!" }}{{ end }}
Officiant:
> Let us bless the Lord.{{ $alleluia }}

**People:**
> **Thanks be to God.{{ $alleluia }}**
