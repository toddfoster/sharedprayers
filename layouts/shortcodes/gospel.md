##### The people stand as able.
**The Holy Gospel**
_{{ .Get 0 }}_

{{$gospel := split ( .Get 0) " " | first 1 }}
Deacon:
> The Holy Gospel of our Lord Jesus Christ according to Mark.

**People:**
> **Glory to you, Lord Christ.**

Deacon:

{{ .Inner | replaceRE "\n" "\n> " | safeHTML }}

Deacon:
> The Gospel of the Lord.

**People:**
> **Praise to you, Lord Christ.**
