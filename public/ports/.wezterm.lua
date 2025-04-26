local wezterm = require 'wezterm'
local config = wezterm.config_builder()

-- Define your custom color scheme
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
            "#19002e", -- black
            "#d70040", -- red
            "#00ffb7", -- green
            "#ffd700", -- yellow
            "#399ee6", -- blue
            "#ff0e82", -- magenta
            "#00f7e2", -- cyan
            "#c79bff", -- white
        },
        brights = {
            "#2a003f", -- bright black
            "#f40056", -- bright red
            "#00ffcc", -- bright green
            "#ffdf00", -- bright yellow
            "#58a8f3", -- bright blue
            "#ff2b99", -- bright magenta
            "#00ffdb", -- bright cyan
            "#e0a9ff", -- bright white
        },
    },
}

-- Apply the custom color scheme
config.color_scheme = 'Wildberries'

config.animation_fps = 60

config.enable_tab_bar = false

config.enable_wayland = true
-- Set font and other preferences
config.font = wezterm.font('JetBrainsMono Nerd Font', { weight = 'Bold' })
config.font_size = 12.0
config.window_background_opacity = 0.7

return config
