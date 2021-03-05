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
{{% he/lesson "Third" "Job 1.23" %}}
This is an apocryphal lesson passed in the .Inner.
With two paragraphs.
{{% /he/lesson %}}

## TEST: text in file
{{% he/lesson "Fourth" "1 John 3:1-3" /%}}

## TEST: Psalm - file
{{% he/psalm/responsively "1" /%}}

## Test: Psalm - inner
{{% he/psalm/responsively "144" %}}
A psalm
**doesn't have to be responsive.**
But it's nice.
{{% /he/psalm/responsively %}}


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
