// Configuración del tema de Tailwind para la vista de Login
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-primary": "#ffffff",
                "on-primary-container": "#003c0b",
                "primary-container": "#4caf50",
                "on-tertiary-fixed": "#002204",
                "background": "#f3faff",
                "on-surface": "#071e27",
                "primary": "#006e1c",
                "outline-variant": "#becab9",
                "outline": "#6f7a6b",
                "surface-container-lowest": "#ffffff"
            },
            "fontFamily": {
                "headline-md": ["Manrope"],
                "label-sm": ["Manrope"],
                "label-md": ["Manrope"],
                "headline-sm": ["Manrope"],
                "body-md": ["Manrope"]
            }
        }
    }
};