{{ $base_path := "layouts/shortcodes/collects" }}
{{ $file_path := .Get 0 }}
{{ $full_file_path := (path.Join $base_path $file_path ) }}
### The Collect of the Day
Officiant:
> {{ readFile  $full_file_path }}

**People:**
> **Amen.**
