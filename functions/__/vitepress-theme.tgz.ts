export async function onRequest(context) {
  if (context.request.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
    })
  }

  let response = await fetch(
    'https://github.com/NativeScript/docs/releases/download/vitepress-theme/vitepress-theme.tgz'
  )
  response = new Response(response.body, response)

  // Set CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')

  return response
}
