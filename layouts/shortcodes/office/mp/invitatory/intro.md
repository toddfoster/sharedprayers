## The Invitatory and Psalter
{{ $alleluia := " Alleluia." }}
{{ if (.Get 0) }} {{ if (eq (.Get 0) "lent") }}{{ $alleluia = "" }}{{ end }}
{{ else }}{{ if eq ($.Page.Params.season) "lent" }}{{ $alleluia = "" }}{{ end }}{{ end }}
##### Officiant:
Lord, open our lips.

##### **People:**
**And our mouth shall proclaim your praise.**

##### **All:**
**Glory to the Father, and to the Son, and to the Holy Spirit:
as it was in the beginning, is now, and will be for ever.  Amen.{{ $alleluia }}**
