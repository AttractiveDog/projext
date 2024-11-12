export default function manifest() {
    return {
      name: 'LLM',
      short_name: 'LLM',
      description: 'LLM assistant',
      start_url: '.',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#007bff',
      icons: [
        {
          src: '/messaging.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/messaging.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }