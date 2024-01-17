export async function onRequest(context) {
  let response = await fetch(
    'https://github.com/NativeScript/docs/releases/download/vitepress-theme/vitepress-theme.tgz'
  )
  response = new Response(response.body, response)

  // Set CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')

  return response
}
