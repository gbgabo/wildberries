local wezterm = require 'wezterm'
local config = wezterm.config_builder()

config.color_schemes = {
    ['Wildberries'] = {
        foreground = "#ff0e82",
        background = "#19002e",
        cursor_bg = "#00ffb7",
        cursor_border = "#00ffb7",
        cursor_fg = "#19002e",
        selection_bg = "#240041",
        selection_fg = "#900048",
        ansi = {
            "#19002e", 
            "#d70040", 
            "#00ffb7", 
            "#ffd700", 
            "#399ee6", 
            "#ff0e82", 
            "#00f7e2", 
            "#c79bff",
        },
        brights = {
            "#2a003f",
            "#f40056", 
            "#00ffcc", 
            "#ffdf00", 
            "#58a8f3", 
            "#ff2b99", 
            "#00ffdb", 
            "#e0a9ff", 
        },
    },
}

config.color_scheme = 'Wildberries'
config.animation_fps = 60
config.enable_tab_bar = false
config.enable_wayland = true
config.font = wezterm.font('JetBrainsMono Nerd Font', { weight = 'Bold' })
config.font_size = 12.0
config.window_background_opacity = 0.7

return config
