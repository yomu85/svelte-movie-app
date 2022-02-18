exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'yomu85',
      age: 85,
      email: 'yomu85@gmail.com'
    })
  }
}