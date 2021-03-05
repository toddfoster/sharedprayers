---
title: Test Shortcodes (WIP)
date: 2021-01-01
lectionaryyear: yearb
proper: lent2
liturgydate: 2021-02-28
bcppage: 355ff.
---
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

{{% he/penitentialorder/jesussaid %}}

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
## TEST: firstReading
{{% he/lesson firstReading /%}}

## TEST: secondReading
{{% he/lesson secondReading /%}}

## TEST: custom .Inner
{{% he/lesson "Third" "Job 1.23" %}}
This is an apocryphal lesson passed in the .Inner.
With two paragraphs.
{{% /he/lesson %}}

## TEST: text in file
{{% he/lesson "Fourth" "1 John 3:1-3" /%}}

# TODO TEST: psalms/responsively
{% he/psalms/responsively %}}

TODO:
- he/psalm: handle canticles, allow parameter specifying psalm, if no Psalm, provide link, allow .Inner override,
- he/gospel: one parameter: ref, check for full text, else link, allow .Inner override,
- change spreadsheet to reference hymns directly: e.g., hymns/levas-184


{% he/gospel %}}
{% he/homily/brief %}}
{% he/creed/nicene %}}
{% he/pop/lordhavemercy %}}
{% stt/2021/he/covid-peace %}}
{% stt/announcements %}}
{% he/offertory %}}
{% hymns/levas-184 %}}
{% he/prayera %}}
{% he/lordsprayer1 %}}
{% he/fraction/short-lent %}}
{% stt/2021/covid-communion %}}
{% hymns/levas-184 %}}
{% he/postcommunion-eternal %}}
{% he/blessings/lent2 %}}
{% he/hymn levas-1 %}}
{% he/dismissal/generic %}}
{% stt/2021/postscript-covid %}}
