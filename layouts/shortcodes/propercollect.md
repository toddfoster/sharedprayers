{{ $base_path := "layouts/shortcodes/collects/propers" }}
{{ $file_path := $.Page.Params.proper }}
{{ $full_file_path := (path.Join $base_path $file_path ) }}
### The Collect of the Day
Officiant:
> {{ readFile  $full_file_path }}

**People:**
> **Amen.**
