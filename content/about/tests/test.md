---
title: Test Shortcodes (WIP)
date: 2021-01-01
lectionaryyear: b
proper: second-sunday-in-lent
liturgydate: 2021-02-28
bcppage: 355ff.
---
[Non-proper test](/about/test-generic/)
------------

# TEST: preparing-covid
{{% stt/2021/preparing-covid %}}

# TEST: greeting
## TEST: blessthelord
{{% he/greeting/blessthelord %}}

## TEST: blessedbegod
{{% he/greeting/blessedbegod %}}

## TEST: onebody
{{% he/greeting/onebody %}}

# TEST: penitentialorder
**NOTE:** There are two additional greetings for use in the Penitential order. But "Bless the Lord" is designated for "Lent and on other penitential occasions." If I'm using the Penitential order, it's probably during "Lent and on other penitential occasions." According to my past practice it certainly isn't during the Easter season!

{{% lent/penitentialorder %}}

# TEST: songofpraise
## TEST: gloriaexcelsis
{{% he/songofpraise/gloriaexcelsis %}}

## TEST: kyrie
{{% he/songofpraise/kyrie %}}

## TEST: lordhavemercy
{{% he/songofpraise/lordhavemercy %}}

## TEST: trishagion
{{% he/songofpraise/trishagion %}}

# TEST: propercollect
{{% he/propercollect %}}

## TEST: propercollect-custom
{{% he/propercollect-custom %}}
This is random text passed in an .Inner to be the collect.
{{% /he/propercollect-custom %}}

# TEST: lesson
## TEST: first
{{% lesson first /%}}

## TEST: second
{{% lesson second /%}}

## TEST: custom .Inner
{{% lesson "Third" "Job 1.23" %}}
This is an apocryphal lesson passed in the .Inner.
With two paragraphs.
{{% /lesson %}}

## TEST: text in file
{{% lesson "Fourth" "1 John 3:1-3" /%}}

# TEST: psalms/responsively
{{% lesson "psalm" /%}}

## TEST: psalm - file
{{% lesson "psalm" "Psalm 1" /%}}

## Test: psalm - inner
{{% lesson "psalm" "Psalm 144" %}}
A psalm
**doesn't have to be responsive.**
But it's nice.
{{% /lesson %}}

TODO:
- he/psalm: handle canticles, allow parameter specifying psalm, if no Psalm, provide link, allow .Inner override,
- he/gospel: one parameter: ref, check for full text, else link, allow .Inner override,
- change spreadsheet to reference hymns directly: e.g., hymns/levas-184

# TEST: gospel - default
{{% lesson "gospel" /%}}

## TEST: gospel -- alternate
{{% lesson "gospel" "John 3.16" /%}}

## TEST: gospel -- none
{% he/gospel " " /%}}

## TEST: gospel -- override
{{% lesson "gospel" "John 145.67" %}}
This is not really part of the Gospel of John.

But it does have two paragraphs.
{{% /lesson %}}

# TEST: homily
{{% he/homily/brief %}}

{{% he/creed/nicene %}}
{{% he/pop/lordhavemercy %}}
{{% stt/2021/peace-covid %}}
{{% stt/2021/announcements %}}

# TEST: offertory without hymn
{{% stt/2021/offertory-covid %}}

# TEST: offertory with hymn
{{% stt/2021/offertory-covid "hymns/levas-184" %}}

# TEST: Lord's prayer with default BCP page
{{% he/lordsprayer/1 %}}


# TEST: Lord's prayer with custom BCP page
{{% he/lordsprayer/1 bcp="42" %}}

# TEST: Lord's prayer with no BCP page
{{% he/lordsprayer/1 bcp="no" %}}


# TEST: prayer a
{{% he/eucharisticprayer/a /%}}
{{% he/lordsprayer/1 %}}
{{% he/fraction/short-lent %}}
{{% stt/2021/communion-covid %}}
{{% hymns/levas-184 %}}
{{% he/postcommunion/eternal %}}
{{% he/blessing/lent %}}
{{% he/dismissal/goinpeace %}}
{{% stt/2021/postscript-covid %}}
{{% nrsv %}}

----

[Non-proper test](/about/test-generic/)
