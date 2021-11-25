## The Invitatory and Psalter
{{ $season := default ($.Page.Params.season) (.Get 0) }}
{{ $day := default ($.Page.Params.weekday) ("monday") }}
{{ $alleluia := " Alleluia." }}
{{ if (eq $season "lent") }}{{ $alleluia = "" }}{{ end }}
##### Officiant:
Lord, open our lips.

##### **People:**
**And our mouth shall proclaim your praise.**

##### **All:**
**Glory to the Father, and to the Son, and to the Holy Spirit:
as it was in the beginning, is now, and will be for ever.  Amen.{{ $alleluia }}**

{{ $antiphon := printf "layouts/shortcodes/office/mp/antiphon/%s.md" $season }}
{{ if not (eq $season "easter") }}
{{ if or (not (fileExists $antiphon)) (eq $season "other") (eq $season "proper") }}
    {{ $antiphon = printf "layouts/shortcodes/office/mp/antiphon/choose/other/%s.md" $day }}
  {{ end }}
##### **People:**
**{{ readFile $antiphon | replaceRE "\n" "" | safeHTML }}**
{{ end }}

{{ $invitatory := default $season (.Get 1) }}
{{ if and (eq $season "lent") (eq $.Page.Params.weekday "friday") }}{{ $invitatory = "psalm95" }}{{ end }}
{{ $invitatory = printf "layouts/shortcodes/office/mp/invitatory/%s.md" $invitatory }}
{{ readFile $invitatory | safeHTML }}

{{ if not (eq $season "easter") }}
##### **People:**
**{{ readFile $antiphon | replaceRE "\n" "" | safeHTML }}**
{{ end }}
