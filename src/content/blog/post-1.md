---
label: "Theme"
type: "object"
name: "theme"
value: ""
description: "Theme settings for customization."
fields:
  - label: "General"
    type: "object"
    name: "general"
    value: ""
    fields:
      - label: "Theme Name"
        type: "string"
        name: "theme_name"
        value: "Dark Mode"
      - label: "Primary Color"
        type: "string"
        name: "primary_color"
        value: "#000000"
      - label: "Secondary Color"
        type: "string"
        name: "secondary_color"
        value: "#FFFFFF"

  - label: "Typography"
    type: "object"
    name: "typography"
    value: ""
    fields:
      - label: "Font Family"
        type: "string"
        name: "font_family"
        value: "Inter"
      - label: "Font Size"
        type: "number"
        name: "font_size"
        value: "16"

  - label: "Media"
    type: "object"
    name: "media"
    value: ""
    fields:
      - label: "Logo"
        type: "media"
        name: "logo"
        value: "logo.png" # Single image
      - label: "Background Images"
        type: "gallery"
        name: "background_images"
        value:
          - "bg1.jpg"
          - "bg2.jpg"
          - "bg3.jpg" # List of images

  - label: "Advanced Settings"
    type: "object"
    name: "advanced"
    value: ""
    fields:
      - label: "Enable Animations"
        type: "boolean"
        name: "enable_animations"
        value: "true"
      - label: "Custom CSS"
        type: "string"
        name: "custom_css"
        value: "body { background: #000; }"
isIgnored: false
isRequired: true
---
