export default defineEventHandler(async (event) => {
  const body = await readRawBody(event, 'hex');
  const binary = new Blob
  const blob = await readBody<ArrayBuffer>(event);
  const headers = getRequestHeaders(event);
  const uploadKey = headers['x-custom-auth-key'];
  console.log(body[0], body[1], body[2], body[3], body[4]);
  console.log('Uploading image with key:', headers);

  let res = await $fetch('https://r2.uchuujinai.com/images/uchuuthon.png', {
    headers: {
      'Content-Type': 'image/png',
      'X-Custom-Auth-Key': uploadKey!
    },
    method: 'PUT',
    mode: 'cors',
    body: blob
  });
  return body;
})