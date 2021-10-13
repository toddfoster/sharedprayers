---
title: Test Shortcodes (without a week assigned)
date: 2021-01-01
---
[Proper test](/about/test/)
---------

# TEST: greeting
{{% he/greeting/blessthelord %}}


# TEST: songofpraise
{{% he/songofpraise/kyrie %}}

# TEST: propercollect-custom
{{% he/propercollect-custom %}}
This is random text passed in an .Inner to be the collect.
{{% /he/propercollect-custom %}}

# TEST: lesson
## TEST: custom .Inner
{{% lesson "Third" "Job 1.23" %}}
This is an apocryphal lesson passed in the .Inner.
With two paragraphs.
{{% /lesson %}}

## TEST: text in file
{{% lesson "Fourth" "1 John 3:1-3" /%}}

## TEST: Psalm - file
{{% he/psalm/responsively "Psalm 1" /%}}

## Test: Psalm - inner
{{% he/psalm/responsively "Psalm 144" %}}
A psalm
**doesn't have to be responsive.**
But it's nice.
{{% /he/psalm/responsively %}}

## TEST: gospel -- alternate
{{% he/gospel "John 3.16" /%}}

## TEST: gospel -- none
{{% he/gospel " " /%}}

## TEST: gospel -- override
{{% he/gospel "John 145.67" %}}
This is not really part of the Gospel of John.

But it does have two paragraphs.
{{% /he/gospel %}}



{{% he/homily/brief %}}
{{% he/creed/nicene %}}

{{% stt/2021/peace-covid %}}
{{% stt/2021/announcements %}}

# TEST: offertory without hymn
{{% stt/2021/offertory-covid %}}

# TEST: offertory with hymn
{{% stt/2021/offertory-covid "hymns/levas-184" %}}

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
